import React from 'react'

const ReadOnlyRow = ({ materialRecord, handleEditRow, handleDeleteClick }) => {
	return (
	
			<tr>
				<td>{materialRecord['material_name']}</td>        				
				<td>{materialRecord['material_brand']}</td>
				<td>{materialRecord['material_qty']}</td>
				<td>{materialRecord['material_units']}</td>
				<td><button type="button" onClick={(event) => {handleEditRow(event, materialRecord)}}>Edit</button>
					<button type="button" onClick={(event) => {handleDeleteClick(materialRecord.id)}}>Delete</button>
				</td>
				
        	</tr>
	
	)
}

export default ReadOnlyRow