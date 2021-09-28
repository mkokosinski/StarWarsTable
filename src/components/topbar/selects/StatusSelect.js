import { useCallback } from 'react'
import Select from 'components/common/inputs/select/Select'
import { PEOPLE_STATUS } from 'context/dataContext'
import { useUiContext } from 'context/uiContext'

const StatusSelect = () => {
  const { setSelectedStatus } = useUiContext()

  const handleChange = useCallback(
    (ids) => {
      setSelectedStatus(ids)
    },
    [setSelectedStatus],
  )

  const options = [
    { label: 'Active', value: PEOPLE_STATUS.ACTIVE },
    { label: 'Deactivated', value: PEOPLE_STATUS.DEACTIVATED },
  ]
  return (
    <div>
      <Select onChange={handleChange} options={options} placeholder="Status" />
    </div>
  )
}

export default StatusSelect
