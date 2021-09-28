import { useCallback } from 'react'

import Select from 'components/common/inputs/select/Select'

import { useStarWarsData } from 'context/dataContext'
import { useUiContext } from 'context/uiContext'

const SpeciesSelect = () => {
  const {
    data: { species },
  } = useStarWarsData()
  const { setSelectedSpecies } = useUiContext()

  const handleChange = useCallback(
    (ids) => {
      setSelectedSpecies(ids)
    },
    [setSelectedSpecies],
  )

  const options = species.map(({ name, url }) => ({ label: name, value: url }))
  return (
    <div>
      <Select isMultiselect placeholder="Species" onChange={handleChange} options={options} />
    </div>
  )
}

export default SpeciesSelect
