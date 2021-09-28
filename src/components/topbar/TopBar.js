import React from 'react'
// import PropTypes from 'prop-types'
import Button from 'components/common/buttons/basic/Button'
import HomeworldSelect from 'components/topbar/selects/HomeworldSelect'
import SearchInput from 'components/common/inputs/search/SearchInput'
import SpeciesSelect from 'components/topbar/selects/SpeciesSelect'
import StatusSelect from 'components/topbar/selects/StatusSelect'

import { BUTTON_VARIANT } from 'components/common/buttons/basic/ButtonConstants'
import { ReactComponent as MunisIco } from 'assets/icons/minus.svg'

import { useUiContext } from 'context/uiContext'
import { useStarWarsData } from 'context/dataContext'
import './topbar.scss'

const TopBar = (props) => {
  const { deactivePeoples, removePeoples } = useStarWarsData()
  const { selectedItems, setSelectedItems, setSearchQuery } = useUiContext()

  const handleRemove = (ids) => {
    removePeoples(ids)
    setSelectedItems((prev) => prev.filter((item) => !ids.includes(item)))
  }

  return (
    <div className="topbar">
      <div className="topbar__filters">
        <SearchInput placeholder="Search" onChange={(e) => setSearchQuery(e.target.value)} />
        <SpeciesSelect />
        <HomeworldSelect />
        <StatusSelect />
      </div>
      <div className="topbar__buttons">
        <Button
          disabled={!selectedItems.length}
          variant={BUTTON_VARIANT.PRIMARY_BLUE}
          onClick={() => deactivePeoples(selectedItems)}>
          <MunisIco className="topbar__icon topbar__icon--deactivate" />
          <span>Deactivate characters</span>
        </Button>
        <Button
          disabled={!selectedItems.length}
          variant={BUTTON_VARIANT.SECONDARY_RED}
          onClick={() => handleRemove(selectedItems)}>
          <MunisIco className="topbar__icon" />
          <span>Remove characters</span>
        </Button>
      </div>
    </div>
  )
}

TopBar.propTypes = {}

export default TopBar
