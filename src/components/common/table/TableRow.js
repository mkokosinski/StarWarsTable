import { useEffect } from 'react'

import { useUiContext } from 'context/uiContext'
import { tableRowType } from './tableTypes'

const TableRow = ({ row }) => {
  const { selectedItems, setSelectedItems } = useUiContext()
  const isSelected = selectedItems.includes(row.meta.id)

  const handleSelect = (e) => {
    const { checked, value } = e.target
    if (checked) {
      setSelectedItems((prev) => [...prev, value])
      return
    }

    setSelectedItems((prev) => prev.filter((item) => item !== value))
  }

  useEffect(() => {
    setSelectedItems((prev) => prev.filter((item) => item !== row.meta.id))
  }, [row.meta.disabled, row.meta.id, setSelectedItems])

  return (
    <tr aria-disabled={row.meta.disabled}>
      <td>
        <input
          type="checkbox"
          name={row.meta.id}
          id={row.meta.id}
          onChange={handleSelect}
          checked={isSelected}
          value={row.meta.id}
        />
      </td>
      {row.cols.map((col, idx) => (
        <td key={idx} title={col.title}>
          {col.content}
        </td>
      ))}
    </tr>
  )
}

TableRow.propTypes = {
  row: tableRowType,
}

export default TableRow
