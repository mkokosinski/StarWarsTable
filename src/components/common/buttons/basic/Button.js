import PropTypes from 'prop-types'
import cs from 'classnames'

import { BUTTON_SIZE, BUTTON_VARIANT } from './ButtonConstants'
import '../buttons.scss'

const Button = ({ children, size, variant, onClick }) => {
  const buttonClass = cs('button', {
    [`button--${variant}`]: variant,
    [`button--${size}`]: size,
  })
  return <button className={buttonClass}>{children}</button>
}

Button.defaultProps = {
  variant: BUTTON_VARIANT.PRIMARY,
  size: BUTTON_SIZE.SMALL,
}

Button.propTypes = {
  children: PropTypes.node,
  size: PropTypes.oneOf(Object.values(BUTTON_SIZE)),
  variant: PropTypes.oneOf(Object.values(BUTTON_VARIANT)),
  onClick: PropTypes.func,
}

export default Button
