import Button from 'components/common/buttons/basic/Button'

import { ReactComponent as Edit } from 'assets/icons/edit.svg'
import { ReactComponent as Menu } from 'assets/icons/menu-dot.svg'

import './actionsCell.scss'

const ActionsCell = () => {
  return (
    <div className="actionsCell">
      <Button className="actionsCell__button">
        <Edit />
      </Button>
      <Button className="actionsCell__button">
        <Menu />
      </Button>
    </div>
  )
}

export default ActionsCell
