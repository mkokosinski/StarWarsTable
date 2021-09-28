import React, { useState, useEffect } from 'react'

import Button from 'components/common/buttons/basic/Button'
import Modal from 'components/modal/Modal'
import Input from 'components/common/inputs/basic/Input'

import { useUiContext } from 'context/uiContext'
import { useStarWarsData } from 'context/dataContext'

import { MODAL_TYPE } from 'components/modal/constants'
import { BUTTON_VARIANT } from 'components/common/buttons/basic/ButtonConstants'
import './editModal.scss'

const EditModal = () => {
  const [value, setValue] = useState('')

  const { editHero } = useStarWarsData()
  const { modal, hideModal } = useUiContext()
  const { type, state } = modal

  const isOpen = type === MODAL_TYPE.EDIT

  const handleInputChange = (e) => {
    setValue(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    editHero({ url: state.url, name: value })
    hideModal()
  }

  useEffect(() => {
    setValue(state.name)
  }, [state.name])

  return (
    <Modal className="editModal" isOpen={isOpen} hideModal={hideModal}>
      <form onSubmit={handleSubmit}>
        <Input value={value} onChange={handleInputChange} />
        <Button type="submit" variant={BUTTON_VARIANT.PRIMARY_BLUE}>
          Save
        </Button>
        <Button type="button" onClick={hideModal} variant={BUTTON_VARIANT.SECONDARY_RED}>
          Close
        </Button>
      </form>
    </Modal>
  )
}

export default EditModal
