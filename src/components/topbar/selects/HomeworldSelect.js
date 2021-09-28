import { useCallback } from 'react'

import Select from 'components/common/inputs/select/Select'

import { useStarWarsData } from 'context/dataContext'
import { useUiContext } from 'context/uiContext'

const HomeworldSelect = () => {
  const {
    data: { planets },
  } = useStarWarsData()
  const { setSelectedHomeworlds } = useUiContext()

  const handleChange = useCallback(
    (ids) => {
      setSelectedHomeworlds(ids)
    },
    [setSelectedHomeworlds],
  )

  const options = planets.map(({ name, url }) => ({ label: name, value: url }))
  return (
    <div>
      <Select isMultiselect onChange={handleChange} options={options} placeholder="Homeworld" />
    </div>
  )
}

export default HomeworldSelect
