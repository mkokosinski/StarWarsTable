import { useCallback } from 'react'
// import PropTypes from 'prop-types'
import Select from 'components/common/inputs/select/Select'
import { useStarWarsData } from 'context/dataContext'
import { useUiContext } from 'context/uiContext'

const SpeciesSelect = (props) => {
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

SpeciesSelect.propTypes = {}

export default SpeciesSelect
