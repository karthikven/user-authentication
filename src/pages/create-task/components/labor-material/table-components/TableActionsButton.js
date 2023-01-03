import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsis } from '@fortawesome/free-solid-svg-icons'

const TableActionsButton = (props) => {

	const { materialRecord, handleEditRow, handleDeleteClick } = props

	const [showActionsMenu, setShowActionsMenu] = useState(false)
	const [showEllipsisButton, setShowEllipsisButton] = useState(true)

	const handleTableActions = () => {
		setShowEllipsisButton(false)
		setShowActionsMenu(true)
	}

	return (
		<div table-actions-cell>
			{showEllipsisButton && (
				<div className="table-actions-button" onClick={() => handleTableActions()}>
					<FontAwesomeIcon icon={faEllipsis} />
    			</div>	
			)}
			{
				showActionsMenu && (
					<div className="table-actions-menu">
						<td>
							<button type="button" onClick={(event) => {handleEditRow(event, materialRecord)}}>Edit</button>
							<button type="button" onClick={(event) => {handleDeleteClick(materialRecord.id)}}>Delete</button>
						</td>
					</div>
				)
			}


			
		</div>
	)
}

export default TableActionsButton