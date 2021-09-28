import { createContext, useContext, useState } from 'react'
import PropTypes from 'prop-types'

const UiContext = createContext()

export const useUiContext = () => useContext(UiContext)

const UiContextProvider = ({ children }) => {
  const [selectedSpecies, setSelectedSpecies] = useState([])
  const [selectedHomeworlds, setSelectedHomeworlds] = useState([])
  const [selectedStatus, setSelectedStatus] = useState('')
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedItems, setSelectedItems] = useState([])

  return (
    <UiContext.Provider
      value={{
        selectedSpecies,
        selectedHomeworlds,
        selectedStatus,
        searchQuery,
        selectedItems,
        setSelectedItems,
        setSearchQuery,
        setSelectedHomeworlds,
        setSelectedSpecies,
        setSelectedStatus,
      }}>
      {children}
    </UiContext.Provider>
  )
}

UiContextProvider.propTypes = {
  children: PropTypes.node,
}

export default UiContextProvider
