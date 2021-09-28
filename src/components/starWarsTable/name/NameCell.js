import React from 'react'
import PropTypes from 'prop-types'

import './nameCell.scss'

const NameCell = ({ name, species }) => {
  return (
    <div className="nameCell">
      <div className="nameCell__name">{name}</div>
      <div className="nameCell__species">{species.length ? species.join(', ') : 'Unspecified'}</div>
    </div>
  )
}

NameCell.propTypes = {
  name: PropTypes.string,
  species: PropTypes.arrayOf(PropTypes.string),
}

export default NameCell
