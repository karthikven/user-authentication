import React from 'react'
import TableActionsButton from './TableActionsButton'

const ReadOnlyRow = ({ materialRecord, handleEditRow, handleDeleteClick }) => {

	const [showButton, setShowButton] = React.useState(false);


	return (
	
			<tr
				onMouseEnter={() => setShowButton(true)}
	        	onMouseLeave={() => setShowButton(false)}
			>
				<td>{materialRecord['material_name']}</td>        				
				<td>{materialRecord['material_brand']}</td>
				<td>{materialRecord['material_qty']}</td>
				<td>{materialRecord['material_units']}</td>
				{showButton && 
					<TableActionsButton materialRecord={materialRecord} handleEditRow={handleEditRow} handleDeleteClick={handleDeleteClick} />}
				{/* <td> */}
				{/* 	<button type="button" onClick={(event) => {handleEditRow(event, materialRecord)}}>Edit</button> */}
				{/* 	<button type="button" onClick={(event) => {handleDeleteClick(materialRecord.id)}}>Delete</button> */}
				{/* </td> */}
				
        	</tr>
	
	)
}

export default ReadOnlyRow