import { useEffect, useState } from 'react'
import Select from 'react-select'
import './TaskAttributes.css'

const TaskAttributes = () => {

	// fields in this page: task name, category, workflow, planned start date, deadline, priority, measurements
	const category_list = ["Civil", "Electrical", "Plumbing", "Carpentry", 
						"Marble Flooring", "Granite Flooring", "Tile Flooring", "False Ceiling", 
						"Fabrication - Windows", "Fabrication - MS, SS", "HVAC", "Lift", 
						"Painting", "Weathering Course", "Waterproofing"]

	const category_workflow_map = {"Civil": ["Civil WF 1", "Civil WF 2", "Civil WF 3"],
									"Electrical": ["Electrical WF 1", "Electical WF 2", "Electrical WF 3"],
									"Plumbing": ["Plumbing WF 1", "Plumbing WF 2", "Plumbing WF 3"],
									"Carpentry": ["Carpentry WF 1", "Carpentry WF 2", "Carpentry WF 3"],
									"Marble Flooring": ["Marble Flooring WF 1", "Marble Flooring WF 2", "Marble Flooring WF 3"],
									"Granite Flooring": ["Granite Flooring WF 1", "Granite Flooring WF 2", "Granite Flooring WF 3"],
									"Tile Flooring": ["Tile Flooring WF 1", "Tile Flooring WF 2", "Tile Flooring WF 3"],
									"False Ceiling": ["False Ceiling WF 1", "False Ceiling WF 2", "False Ceiling WF 3"],
									"Fabrication - Windows": ["Fabrication - Windows WF 1", "Fabrication - Windows WF 2", "Fabrication - Windows WF 3"],
									"Fabrication - MS, SS": ["Civil WF 1", "Civil WF 2", "Civil WF 3"],
									"HVAC": ["HVAC WF 1", "HVAC WF 2", "HVAC WF 3"],
									"Lift": ["Lift WF 1", "Lift WF 2", "Lift WF 3"],
									"Painting": ["Painting WF 1", "Painting WF 2", "Painting WF 3"],
									"Weathering Course": ["Weathering Course WF 1", "Weathering Course WF 2", "Weathering Course WF 3"],
									"Waterproofing": ["Waterproofing WF 1", "Waterproofing WF 2", "Waterproofing WF 3"]
									
								}


	const [taskName, setTaskName] = useState('')
	const [category, setCategory] = useState('Civil')
	const [workflow, setWorkflow] = useState('')
	const [plannedStartDate, setPlannedStartDate] = useState(' ')
	const [deadline, setDeadline] = useState('')
	const [measurementsValue, setMeasurementsValue] = useState('')
	const [measurementsUnits, setMeasurementsUnits] = useState('')
	const [fetchUsersError, setFetchUsersError] = useState(null)
	const [taskAssignedTo, setTaskAssignedTo] = useState(null)
	const [dropdownUsersList, setDropdownUsersList] = useState(null)

	const cat_list = category_list.map(cat => ({value: cat, label: cat}))
	const wf_list = category_workflow_map[category].map(wf => ({value: wf, label: wf}))

	return (
		<div className="create-card-task-attributes">
			
			<label htmlFor="task_name">Task Name: </label>
			<input 
				type="text"
				id="task_name"
				value={taskName}
				onChange={(e) => setTaskName(e.target.value)}
			/>

			<label htmlFor="category">Category: </label>
			<Select className="create-card-select" options={cat_list} onChange={(e) => setCategory(e['value'])}/>

			<label htmlFor="workflow">Workflow: </label>
			<Select className="create-card-select" options={wf_list} onChange={(e) => setWorkflow(e['value'])}/>

			<label htmlFor="planned_start_date">Planned Start Date: </label>
			<input
				className="create-card-date-field"
				type="date"
				id="planned_start_date"
				value={plannedStartDate}
				onChange={(e) => setPlannedStartDate(e.target.value)}
			/>

			<label htmlFor="deadline">Deadline: </label>
			<input
				className="create-card-date-field"
				type="date"
				id="planned_start_date"
				value={deadline}
				onChange={(e) => setDeadline(e.target.value)}
			/>			

			<label htmlFor="create-card-assignee-list">Assign task to: </label>
			<Select className="create-card-select" options={dropdownUsersList} isMulti />


			<label htmlFor="create-card-assignee-list">Task Supervisors: </label>
			<Select className="create-card-select" options={dropdownUsersList} isMulti />

			<label htmlFor="measurement-value">Measurements - Value:</label>
			<input className="create-card-number-field" type="number" value={measurementsValue} id="measurement-value" onChange={(e) => setMeasurementsValue(e.target.value)}></input>

			<label htmlFor="measurement-unit">Measurements - Units:</label>
			<input type="text" value={measurementsUnits} id="measurement-unit" onChange={(e) => setMeasurementsUnits(e.target.value)}></input>


		</div>
	)
}

export default TaskAttributes