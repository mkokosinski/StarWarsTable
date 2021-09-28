import { useMemo } from 'react'

import Table from 'components/common/table/Table'

import { useStarWarsData } from 'context/dataContext'
import { useUiContext } from 'context/uiContext'
import { getTableData } from './helpers'

const StarWarsTable = () => {
  const { data } = useStarWarsData()
  const { searchQuery, selectedHomeworlds, selectedSpecies, selectedStatus } = useUiContext()

  const filters = useMemo(
    () => ({ searchQuery, selectedHomeworlds, selectedSpecies, selectedStatus }),
    [searchQuery, selectedHomeworlds, selectedSpecies, selectedStatus],
  )
  const { headers, rows } = useMemo(() => getTableData(data, filters), [data, filters])

  return <Table headers={headers} rows={rows} />
}

export default StarWarsTable
