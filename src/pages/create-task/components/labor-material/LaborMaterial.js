import { useState, Fragment } from 'react'
import { nanoid } from 'nanoid'
import ReadOnlyRow  from './table-components/ReadOnlyRow'
import EditableRow  from './table-components/EditableRow'
import './LaborMaterial.css'

const LaborMaterial = () => {

	const mat_data = [{"id": 1, "material_name": "Cement", "material_brand": "India Cements", "material_qty": 50, "material_units": "bags"}, {"id": 2, "material_name": "Sand", "material_brand": "Ultratech", "material_qty": 60, "material_units": "bags"}]

	const [laborHours, setLaborHours] = useState('')
	const [numberOfLaborers, setNumberOfLaborers] = useState('')
	const [assignedMaterial, setAssignedMaterial] = useState('')
	const [allocatedMaterial, setAllocatedMaterial] = useState(mat_data)
	const [editMaterialId, setEditMaterialId] = useState()
	const [addFormData, setAddFormData] = useState({
		material_name: '',
		material_brand: '',
		material_qty: '',
		material_units: ''
	})
	const [editFormData, setEditFormData] = useState({
		material_name: '',
		material_brand: '',
		material_qty: '',
		material_units: ''	
	})



	const handleEditRow = (event, material) => {
		event.preventDefault()
		setEditMaterialId(material.id)

		const formValues = {
			material_name: material.material_name,
			material_brand: material.material_brand,
			material_qty: material.material_qty,
			material_units: material.material_units
		}
		setEditFormData(formValues)
	}

	const handleAddFormChange = (event) => {
		event.preventDefault()
		const fieldName = event.target.getAttribute('name')
		const fieldValue = event.target.value;
		const newFormData = { ...addFormData}
		newFormData[fieldName] = fieldValue
		setAddFormData(newFormData)
	}

	const handleEditFormChange = (event) => {
		event.preventDefault()
		const fieldName = event.target.getAttribute('name')
		const fieldValue = event.target.value
		const newFormData = {...editFormData}
		newFormData[fieldName] = fieldValue
		setEditFormData(newFormData)
	}

	const handleAddFormSubmit = (event) => {
		event.preventDefault()
		const newRecord = {
			id: nanoid(),
			material_name: addFormData.material_name,
			material_brand: addFormData.material_brand,
			material_qty: addFormData.material_qty,
			material_units: addFormData.material_units
		}
		const newAllocatedMaterial = [...allocatedMaterial, newRecord]
		setAllocatedMaterial(newAllocatedMaterial)
	}

	const handleEditFormSubmit = (event) => {
		event.preventDefault()
		const editedMaterial = {
			id: editMaterialId,
			material_name: editFormData.material_name,
			material_brand: editFormData.material_brand,
			material_qty: editFormData.material_qty,
			material_units: editFormData.material_units
		}

		const newMaterials = [...allocatedMaterial]

		const index = allocatedMaterial.findIndex((allocatedMaterial) => allocatedMaterial.id === editMaterialId)

		newMaterials[index] = editedMaterial

		setAllocatedMaterial(newMaterials)
		setEditMaterialId(null)
	}

	const handleCancelClick = () => {
		setEditMaterialId(null)
	}

	const handleDeleteClick = (materialId) => {
		const newMaterial = [...allocatedMaterial]
		const index = allocatedMaterial.findIndex((material) => material.id === materialId)

		newMaterial.splice(index, 1)
		setAllocatedMaterial(newMaterial)
	}
	
	return (
		<div className="create-card-labor-material">
			<div className="create-card-labor-material-label-input">
			<label htmlFor="create-card-labor-hours">Labor Hours Allocated: </label>
			<input
				type="text"
				id="create-card-labor-hours"
				value={laborHours}
				onChange={(e) => setLaborHours(e.target.value)}
			/>

			<label htmlFor="create-card-labor-hours">Number of Laborers Allocated: </label>
			<input
				type="text"
				id="create-card-labor-hours"
				value={numberOfLaborers}
				onChange={(e) => setNumberOfLaborers(e.target.value)}
			/>
			</div>
        	
        	{/* table input for allocated material */}
        	<form onSubmit={handleEditFormSubmit}>
        		<table>
        			<thead>
        				<tr>
        					<th>Material Name</th>
        					<th>Material Brand</th>
        					<th>Material Quantity</th>
        					<th>Material Units</th>
        					<th>Actions</th>
        				</tr>
        			</thead>
        			<tbody>
        				{allocatedMaterial.map((rec) => (
        					<Fragment>
        						{ 
        							editMaterialId === rec.id ? 
        							<EditableRow editFormData={editFormData} 
        							handleEditFormChange={handleEditFormChange} 
        							handleCancelClick={handleCancelClick}/> 

        							: <ReadOnlyRow 
        							materialRecord={rec} 
        							handleEditRow={handleEditRow}
        							handleDeleteClick={handleDeleteClick}
        							/>
        						}
        						{/*
        						<EditableRow />
        						<ReadOnlyRow materialRecord={rec}/>*/}
        					</Fragment>
        				))}
        			</tbody>
        		</table>
        	</form>
        	
        	<form onSubmit={handleAddFormSubmit}>
        		<input type="text" name="material_name" required="required" placeholder="Material Name..." onChange={handleAddFormChange}/>
        		<input type="text" name="material_brand" required="required" placeholder="Material Brand..." onChange={handleAddFormChange}/>
        		<input type="number" name="material_qty" required="required" placeholder="Material Quantity..." onChange={handleAddFormChange}/>
        		<input type="text" name="material_units" required="required" placeholder="Material Units..." onChange={handleAddFormChange}/>
        		<button type="submit">Allocate Material</button>
        	</form>
        	
        	
		</div>
	)

}

export default LaborMaterial