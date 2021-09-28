import PropTypes from 'prop-types'

import Button from 'components/common/buttons/basic/Button'

import { ReactComponent as Edit } from 'assets/icons/edit.svg'
import { ReactComponent as Menu } from 'assets/icons/menu-dot.svg'

import './actionsCell.scss'

const ActionsCell = ({ handleEdit }) => {
  return (
    <div className="actionsCell">
      <Button onClick={handleEdit} className="actionsCell__button">
        <Edit />
      </Button>
      <Button className="actionsCell__button">
        <Menu />
      </Button>
    </div>
  )
}

ActionsCell.propTypes = {
  handleEdit: PropTypes.func,
}

export default ActionsCell
