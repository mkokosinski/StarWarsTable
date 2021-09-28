const filterData = (data, filters) => {
  const { searchQuery, selectedHomeworlds, selectedSpecies, selectedStatus } = filters
  return {
    ...data,
    people: data.people.filter((row) => {
      if (searchQuery && !row.name.toLowerCase().includes(searchQuery.toLowerCase())) {
        return false
      }

      if (selectedHomeworlds.length && !selectedHomeworlds.includes(row.homeworld)) {
        return false
      }

      if (
        selectedSpecies.length &&
        !selectedSpecies.some((selected) => row.species.includes(selected))
      ) {
        return false
      }

      if (selectedStatus && selectedStatus !== row.status) {
        return false
      }

      return true
    }),
  }
}

const composeRowData = (data) =>
  data.people.map((hero) => {
    const homeworld = data.planets.find((p) => p.url === hero.homeworld).name
    const vehicles = data.vehicles.filter((v) => hero.vehicles.includes(v.url)).map((v) => v.name)
    const starships = data.starships
      .filter((s) => hero.starships.includes(s.url))
      .map((s) => s.name)
    const vehiclesAndStarships = [...vehicles, ...starships]
    const species = data.species.filter((s) => hero.species.includes(s.url)).map((s) => s.name)
    return {
      born: hero.birth_year,
      homeworld,
      name: hero.name,
      species,
      status: hero.status,
      vehiclesAndStarships,
      url: hero.url,
    }
  })

export const getTableData = (data, filters) => {
  const filteredData = filterData(data, filters)
  const tableData = composeRowData(filteredData)
  return tableData
}

export const headers = [
  {
    label: 'Name',
    key: 'name',
    sortable: true,
  },
  {
    label: 'Born',
    key: 'born',
    sortable: true,
  },
  {
    label: 'Homeworld',
    key: 'homeworld',
    sortable: true,
  },
  {
    label: 'Vehicles and Starships',
    sortable: false,
  },
  {
    label: 'Status',
    sortable: false,
  },
  {
    label: 'Actions',
    sortable: false,
  },
]
