import React from 'react'

const EditableRow = ({editFormData, handleEditFormChange, handleCancelClick}) => {
	return (
		<tr>
			<td>
				<input
				type="text"
				required="required"
				placeholder="Enter Material Name"
				name="material_name"
				value={editFormData.material_name}
				onChange={handleEditFormChange}
				></input>
			</td>
			<td>
				<input
				type="text"
				required="required"
				placeholder="Enter Material Brand"
				name="material_brand"
				value={editFormData.material_brand}
				onChange={handleEditFormChange}
				></input>
			</td>
			<td>
				<input
				type="text"
				required="number"
				placeholder="Enter Material Quantity"
				name="material_qty"
				value={editFormData.material_qty}
				onChange={handleEditFormChange}
				></input>
			</td>
			<td>
				<input
				type="text"
				required="required"
				placeholder="Enter Material Units"
				name="material_units"
				value={editFormData.material_units}
				onChange={handleEditFormChange}
				></input>
			</td>
			<td>
				<button type="submit">Save</button>
				<button type="button" onClick={handleCancelClick}>Cancel</button>
			</td>
		</tr>

	)
}

export default EditableRow