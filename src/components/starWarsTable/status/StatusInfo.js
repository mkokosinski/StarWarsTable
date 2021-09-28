import React from 'react'
import PropTypes from 'prop-types'

import { ReactComponent as Active } from 'assets/icons/check.svg'
import { ReactComponent as Deactivated } from 'assets/icons/minus.svg'

import './statusInfo.scss'
import { PEOPLE_STATUS } from 'context/dataContext'

const icons = {
  [PEOPLE_STATUS.ACTIVE]: <Active />,
  [PEOPLE_STATUS.DEACTIVATED]: <Deactivated />,
}

const StatusInfo = ({ status }) => {
  return (
    <div className="status-info">
      <span className="status-info__icon">{icons[status]}</span>
      <span className="status-info__label">{status}</span>
    </div>
  )
}

StatusInfo.propTypes = {
  status: PropTypes.string,
}

export default StatusInfo
