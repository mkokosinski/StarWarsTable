import React from 'react'
import PropTypes from 'prop-types'
import cs from 'classnames'

import { useUiContext } from 'context/uiContext'

import './modal.scss'

const Modal = ({ children, className, isOpen }) => {
  const { hideModal } = useUiContext()
  if (!isOpen) {
    return null
  }

  const modalClass = cs('modal', {
    [className]: className,
  })

  return (
    <div className={modalClass}>
      <div className="modal__overlay" onClick={hideModal} role="dialog"></div>
      <div className="modal__body">
        <div className="modal__content">{children}</div>
      </div>
    </div>
  )
}

Modal.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  isOpen: PropTypes.bool,
}

export default Modal
