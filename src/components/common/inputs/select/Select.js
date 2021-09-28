import { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import cs from 'classnames'

import Input from '../basic/Input'
import useDetectOutsideClick from 'hooks/useDetectOutsideClick'

import { ReactComponent as Arrow } from 'assets/icons/arrow.svg'

import './select.scss'

const Select = ({ className, isMultiselect, options, onChange, ...props }) => {
  const [isActive, setIsActive] = useState(false)
  const [visibleOptions, setVisibleOptions] = useState(options)
  const [searchQuery, setSearchQuery] = useState('')
  const [selected, setSelected] = useState([])

  const inputRef = useRef()
  const containerRef = useRef()

  const expandOnClick = () => {
    if (inputRef?.current) {
      inputRef.current.focus()
    }
  }

  const handleBlur = () => {
    setSearchQuery('')
    setIsActive(false)
  }

  const handleSelectChange = (item) => {
    if (isMultiselect) {
      setSelected((prev) => {
        return prev.some(({ value }) => value === item.value)
          ? prev.filter(({ value }) => value !== item.value)
          : [...prev, item]
      })
      return
    }

    setSelected([item])
    setIsActive(false)
    setSearchQuery('')
  }

  const handleInputChange = (e) => {
    const { value } = e.target
    setSearchQuery(value)
  }

  const handleInputFocus = (e) => {
    e.target.select()
    setIsActive(true)
  }

  const getInputValue = () => {
    if (searchQuery || isActive) {
      return searchQuery
    }

    if (isMultiselect) {
      return selected.length ? `${selected.length} items` : ''
    }

    return selected[0]?.label
  }

  useEffect(() => {
    const filteredOptions = options.filter((opt) =>
      opt.label.toLowerCase().includes(searchQuery.toLowerCase()),
    )
    setVisibleOptions(filteredOptions)
  }, [searchQuery, options])

  useEffect(() => {
    if (onChange) {
      const value = isMultiselect ? selected.map((o) => o.value) : selected[0]?.value
      onChange(value)
    }
  }, [isMultiselect, onChange, selected])

  useDetectOutsideClick(containerRef, handleBlur)

  const inputClass = cs('select', {
    'select--is-active': isActive,
  })
  const hasOptions = visibleOptions?.length > 0

  return (
    <div className={inputClass} ref={containerRef} onClick={expandOnClick} role="combobox">
      <Input
        icon={<Arrow className="select__icon" />}
        innerRef={inputRef}
        value={getInputValue()}
        onChange={handleInputChange}
        onFocus={handleInputFocus}
        {...props}
      />
      <div className="select__options">
        {hasOptions ? (
          visibleOptions.map((option) => {
            const isSelected = selected?.some((s) => s.value === option.value)
            return (
              <div
                key={option.value}
                className={cs('select__option', { 'select__option--selected': isSelected })}
                onClick={() => handleSelectChange(option)}>
                {option.label}
              </div>
            )
          })
        ) : (
          <div className="select__no-results">No results</div>
        )}
      </div>
    </div>
  )
}

Select.defaultProps = {
  options: [],
}

Select.propTypes = {
  className: PropTypes.string,
  isMultiselect: PropTypes.bool,
  options: PropTypes.arrayOf(PropTypes.shape({ label: PropTypes.string, value: PropTypes.string }))
    .isRequired,
  onChange: PropTypes.func,
}

export default Select
