import React from 'react'
import PropTypes from 'prop-types'

import Input from '../basic/Input'

import { INPUT_SIZE } from '../basic/InputConstants'
import { ReactComponent as Magnifier } from 'assets/icons/search.svg'

import './searchInput.scss'

const SearchInput = ({ name, size, ...props }) => {
  return (
    <Input
      className="searchInput"
      name={name}
      size={size}
      type="search"
      icon={<Magnifier />}
      {...props}
    />
  )
}

SearchInput.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.oneOf(Object.values(INPUT_SIZE)),
  onChange: PropTypes.func,
}

export default SearchInput
