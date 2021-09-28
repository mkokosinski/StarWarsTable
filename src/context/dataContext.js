import { createContext, useContext, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { endponits } from 'api/api'
import { getAllPages } from 'api/apiHelpers'
import { REQUEST_STATUS } from 'api/constants'

const DataContext = createContext()

const initialState = {
  people: [],
  films: [],
  planets: [],
  species: [],
  starships: [],
  vehicles: [],
}

const getData = async () => {
  const urls = Object.values(endponits)
  const data = await Promise.all(urls.map((url) => getAllPages(url)))
  const [people, films, planets, species, starships, vehicles] = data
  const peopleWithStatus = people.map((p) => ({ ...p, status: PEOPLE_STATUS.ACTIVE }))
  return { films, people: peopleWithStatus, planets, species, starships, vehicles }
}

export const PEOPLE_STATUS = {
  ACTIVE: 'active',
  DEACTIVATED: 'deactivated',
}

export const useStarWarsData = () => useContext(DataContext)

const DataProvider = ({ children }) => {
  const [data, setData] = useState(initialState)
  const [status, setStatus] = useState(REQUEST_STATUS.IDLE)
  const [error, setError] = useState(null)

  const editHero = (editedHero) => {
    setData((prev) => ({
      ...prev,
      people: prev.people.map((hero) =>
        hero.url === editedHero.url ? { ...hero, ...editedHero } : hero,
      ),
    }))
  }

  const removePeoples = (peopleIds) => {
    setData((prev) => ({
      ...prev,
      people: prev.people.filter((hero) => !peopleIds.includes(hero.url)),
    }))
  }

  const deactivePeoples = (peopleIds) => {
    setData((prev) => ({
      ...prev,
      people: prev.people.map((hero) =>
        peopleIds.includes(hero.url) ? { ...hero, status: PEOPLE_STATUS.DEACTIVATED } : hero,
      ),
    }))
  }

  useEffect(() => {
    setStatus(REQUEST_STATUS.LOADING)
    getData()
      .then((res) => {
        setData(res)
        setStatus(REQUEST_STATUS.FULFILLED)
      })
      .catch((err) => {
        console.error({ err })
        setStatus(REQUEST_STATUS.ERROR)
        setError(err.message)
      })
  }, [])

  return (
    <DataContext.Provider value={{ data, error, editHero, deactivePeoples, removePeoples, status }}>
      {children}
    </DataContext.Provider>
  )
}

DataProvider.propTypes = {
  children: PropTypes.node,
}

export default DataProvider
