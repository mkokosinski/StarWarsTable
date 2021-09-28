import { createContext, useContext, useState } from 'react'
import PropTypes from 'prop-types'

const UiContext = createContext()

export const useUiContext = () => useContext(UiContext)

const initModalState = { type: '', state: {} }

const UiContextProvider = ({ children }) => {
  const [selectedSpecies, setSelectedSpecies] = useState([])
  const [selectedHomeworlds, setSelectedHomeworlds] = useState([])
  const [selectedStatus, setSelectedStatus] = useState('')
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedItems, setSelectedItems] = useState([])
  const [modal, setModal] = useState(initModalState)

  const showModal = (type, state) => {
    setModal({ type, state })
  }

  const hideModal = () => {
    setModal(initModalState)
  }

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
        modal,
        showModal,
        hideModal,
      }}>
      {children}
    </UiContext.Provider>
  )
}

UiContextProvider.propTypes = {
  children: PropTypes.node,
}

export default UiContextProvider
