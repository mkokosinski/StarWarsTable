import { useCallback, useEffect, useState } from 'react'
import PropTypes from 'prop-types'

import Pagination from './pagination/Pagination'
import TableHeader from './TableHeader'
import TableRow from './TableRow'

import { useUiContext } from 'context/uiContext'
import { tableHeaderType, tableRowType } from './tableTypes'
import './table.scss'

const Table = ({ colSizes, headers, pageSize, rows }) => {
  const [currentPage, setCurrentPage] = useState(1)
  const [visibleData, setVisibleData] = useState([])
  const [sortState, setSortState] = useState({ key: '', direction: '' })

  const { selectedItems, setSelectedItems } = useUiContext()

  const hasPagination = rows.length - pageSize > 0
  const activeItems = visibleData.filter((row) => !row.meta.disabled)

  const handleSelectAll = () => {
    if (selectedItems.length === activeItems.length) {
      setSelectedItems([])
      return
    }

    setSelectedItems(activeItems.map((row) => row.meta.id))
  }

  const handleSort = ({ key, direction }) => {
    setSortState({ key, direction })
  }

  const updateVisibleItems = useCallback(
    (data) => {
      const pagination = (currentPage - 1) * pageSize
      const currentIndex = pageSize + pagination
      const newVisibleItems = data.slice(pagination, currentIndex)
      setVisibleData(newVisibleItems)
    },
    [currentPage, pageSize],
  )

  useEffect(() => {
    updateVisibleItems(rows)
  }, [rows, updateVisibleItems])

  useEffect(() => {
    const sortedRows = [...rows].sort((a, b) => {
      const { direction, key } = sortState
      const itemA = a.cols.find((a) => a.key === key)
      const itemB = b.cols.find((a) => a.key === key)
      if (direction === 'asc') {
        return itemA.title.localeCompare(itemB.title)
      }
      if (direction === 'desc') {
        return itemB.title.localeCompare(itemA.title)
      }
      return 0
    })

    updateVisibleItems(sortedRows)
  }, [rows, sortState])

  useEffect(() => {
    setCurrentPage(1)
  }, [rows])

  return (
    <>
      <div className="table">
        <table cellPadding="0" cellSpacing="0">
          <colgroup>
            <col style={{ width: '38px' }} />
            {colSizes.map((size, idx) => (
              <col key={idx} style={{ width: size + '%' }} />
            ))}
          </colgroup>

          <TableHeader
            headers={headers}
            sortState={sortState}
            handleSelectAll={handleSelectAll}
            handleSort={handleSort}
          />
          <tbody>
            {visibleData.length ? (
              visibleData.map((row, index) => <TableRow key={index} row={row} />)
            ) : (
              <tr>
                <td colSpan={headers.length}>NO RESULTS</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      {hasPagination && (
        <div className="table__pagination">
          <Pagination
            currentPage={currentPage}
            totalPages={Math.ceil(rows.length / pageSize)}
            changePage={setCurrentPage}
          />
        </div>
      )}
    </>
  )
}

Table.defaultProps = {
  colSizes: [],
  headers: [],
  pageSize: 6,
  rows: [],
}

Table.propTypes = {
  colSizes: PropTypes.arrayOf(PropTypes.number),
  headers: PropTypes.arrayOf(tableHeaderType),
  pageSize: PropTypes.number,
  rows: PropTypes.arrayOf(tableRowType),
}

export default Table
