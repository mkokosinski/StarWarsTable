import React from 'react'
import PropTypes from 'prop-types'

import SortableHeaderCell from './sortableHeaderCell/SortableHeaderCell'

import { useUiContext } from 'context/uiContext'
import { tableHeaderType } from './tableTypes'

const TableHeader = ({ headers, sortState, handleSelectAll, handleSort }) => {
  const { selectedItems } = useUiContext()

  return (
    <thead>
      <tr>
        <th>
          <input
            type="checkbox"
            onChange={handleSelectAll}
            name=""
            id=""
            checked={selectedItems.length}
          />
        </th>
        {headers.map((header, idx) => (
          <th key={idx}>
            <SortableHeaderCell sortState={sortState} header={header} handleSort={handleSort} />
          </th>
        ))}
      </tr>
    </thead>
  )
}

TableHeader.propTypes = {
  headers: PropTypes.arrayOf(tableHeaderType),
  sortState: PropTypes.shape({
    key: PropTypes.string,
    direction: PropTypes.oneOf(['asc', 'desc']),
  }),
  handleSelectAll: PropTypes.func,
  handleSort: PropTypes.func,
}

export default TableHeader
