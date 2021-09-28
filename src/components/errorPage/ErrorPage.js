import React from 'react'
import PropTypes from 'prop-types'

import './errorPage.scss'
import Button from 'components/common/buttons/basic/Button'
import { BUTTON_VARIANT } from 'components/common/buttons/basic/ButtonConstants'

const ErrorPage = ({ error }) => {
  const refreshPage = () => {
    window.location.reload(false)
  }

  return (
    <div className="errorPage">
      <div>Ups, We have a problem:</div>

      <div>{error}</div>

      <Button onClick={refreshPage} variant={BUTTON_VARIANT.GHOST_GRAY}>
        Try Again
      </Button>
    </div>
  )
}

ErrorPage.propTypes = {
  error: PropTypes.string,
}

export default ErrorPage
