import PropTypes from 'prop-types'
import cs from 'classnames'

import { BUTTON_SIZE, BUTTON_VARIANT } from './ButtonConstants'
import '../buttons.scss'

const Button = ({ className, children, size, variant, onClick, ...props }) => {
  const buttonClass = cs('button', {
    [`button--${variant}`]: variant,
    [`button--${size}`]: size,
    [className]: className,
  })
  return (
    <button onClick={onClick} className={buttonClass} {...props}>
      {children}
    </button>
  )
}

Button.defaultProps = {
  variant: BUTTON_VARIANT.PRIMARY,
  size: BUTTON_SIZE.SMALL,
}

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  size: PropTypes.oneOf(Object.values(BUTTON_SIZE)),
  variant: PropTypes.oneOf(Object.values(BUTTON_VARIANT)),
  onClick: PropTypes.func,
}

export default Button
