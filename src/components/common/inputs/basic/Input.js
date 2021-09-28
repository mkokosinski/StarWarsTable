import React from 'react'
import PropTypes from 'prop-types'
import cs from 'classnames'

import { INPUT_SIZE } from './InputConstants'

import '../inputs.scss'

const Input = ({ className, errorMessage, icon, innerRef, name, size, onChange, ...props }) => {
  const inputClass = cs('input', {
    [`input--${size}`]: size,
    'input--has-error': errorMessage,
    [className]: className,
  })
  return (
    <div>
      <div className={inputClass}>
        <input name={name} id={name} onChange={onChange} ref={innerRef} {...props} />
        {icon}
      </div>
      {errorMessage && <div className="input__error-message">{errorMessage}</div>}
    </div>
  )
}

Input.defaultProps = {
  size: INPUT_SIZE.SMALL,
  type: 'text',
}

Input.propTypes = {
  className: PropTypes.string,
  errorMessage: PropTypes.string,
  name: PropTypes.string.isRequired,
  icon: PropTypes.node,
  innerRef: PropTypes.oneOfType([PropTypes.func, PropTypes.shape({ current: PropTypes.any })]),
  size: PropTypes.oneOf(Object.values(INPUT_SIZE)),
  type: PropTypes.string,
  onChange: PropTypes.func,
  onClick: PropTypes.func,
}

export default Input
