import React from 'react'
import PropTypes from 'prop-types'
import cs from 'classnames'

import Button from 'components/common/buttons/basic/Button'

import { BUTTON_VARIANT } from 'components/common/buttons/basic/ButtonConstants'
import { ReactComponent as Arrow } from 'assets/icons/arrow_thin.svg'
import { getPaginationPages } from './helpers'

import './pagination.scss'

const Pagination = ({ currentPage, totalPages, visibleButtonsCount, changePage }) => {
  const { leftPages, rightPages, isSeparatorVisible } = getPaginationPages(
    currentPage,
    totalPages,
    visibleButtonsCount,
  )
  const isPreviousPageVisible = currentPage > 1
  const isNextPageVisible = currentPage < totalPages
  return (
    <div className="pagination">
      {isPreviousPageVisible && (
        <Button
          actice="true"
          variant={BUTTON_VARIANT.GHOST_GRAY}
          onClick={() => changePage(currentPage - 1)}>
          <Arrow className="pagination__arrow--left" />
        </Button>
      )}
      {leftPages.map((nr) => (
        <Button
          key={nr}
          className={cs({ 'pagination__button--active': nr === currentPage })}
          variant={BUTTON_VARIANT.GHOST_GRAY}
          onClick={() => changePage(nr)}>
          {nr}
        </Button>
      ))}
      {isSeparatorVisible && <span className="pagination__separator">...</span>}
      {rightPages.map((nr) => (
        <Button
          key={nr}
          className={cs({ 'pagination__button--active': nr === currentPage })}
          variant={BUTTON_VARIANT.GHOST_GRAY}
          onClick={() => changePage(nr)}>
          {nr}
        </Button>
      ))}
      {isNextPageVisible && (
        <Button variant={BUTTON_VARIANT.GHOST_GRAY} onClick={() => changePage(currentPage + 1)}>
          <Arrow />
        </Button>
      )}
    </div>
  )
}

Pagination.defaultProps = {
  visibleButtonsCount: 6,
}

Pagination.propTypes = {
  currentPage: PropTypes.number,
  totalPages: PropTypes.number,
  visibleButtonsCount: PropTypes.number,
  changePage: PropTypes.func,
}

export default Pagination
