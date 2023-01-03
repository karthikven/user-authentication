

const AddNewRow = ({handleAddFormChange, handleAddFormSubmit, addFormData}) => {
	return (
		<tr>
			<td>
				<input
				type="text"
				required="required"
				placeholder="Material Name"
				name="material_name"
				value={addFormData.material_name}
				onChange={handleAddFormChange}
				></input>
			</td>
			<td>
				<input
				type="text"
				required="required"
				placeholder="Material Brand"
				name="material_brand"
				value={addFormData.material_brand}
				onChange={handleAddFormChange}
				></input>
			</td>
			<td>
				<input
				type="text"
				required="number"
				placeholder="Material Qty"
				name="material_qty"
				value={addFormData.material_qty}
				onChange={handleAddFormChange}
				></input>
			</td>
			<td>
				<input
				type="text"
				required="required"
				placeholder="Material Units"
				name="material_units"
				value={addFormData.material_units}
				onChange={handleAddFormChange}
				></input>
			</td>
			<td >
				<button type="submit" onClick={(event) => handleAddFormSubmit(event)}>Allocate Material</button>
			</td>
		</tr>

	)
}

export default AddNewRow