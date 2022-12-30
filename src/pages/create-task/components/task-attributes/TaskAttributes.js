import { useEffect, useState, useRef } from 'react'
import { useParams } from 'react-router-dom';
import Select from 'react-select'
import './TaskAttributes.css'
import { useLocalStorage } from "./../../../../hooks/useLocalStorage";
import useFetch from './../../../../hooks/useFetch'

const TaskAttributes = (props) => {

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


	const [taskName, setTaskName] = useLocalStorage("taskName", '')
	const [category, setCategory] = useLocalStorage("category", 'Civil')
	const [workflow, setWorkflow] = useLocalStorage("workflow", '')
	const [plannedStartDate, setPlannedStartDate] = useLocalStorage("plannedStartDate", '')
	const [deadline, setDeadline] = useLocalStorage("deadline", '')
	const [measurementsValue, setMeasurementsValue] = useLocalStorage("measurementsValue", '')
	const [measurementsUnits, setMeasurementsUnits] = useLocalStorage("measurementsUnits", '')
	// const [fetchUsersError, setFetchUsersError] = useState(null)
	const [taskAssignedTo, setTaskAssignedTo] = useLocalStorage("taskAssignedTo", [])
	const [taskSupervisors, setTaskSupervisors] = useLocalStorage("taskSupervisors", [])

	const [dropdownUsersList, setDropdownUsersList] = useState(null)
	

	const routeParams = useParams()
	const projectId = routeParams.projectId
	const userId = routeParams.userId

	const cat_list = category_list.map(cat => ({value: cat, label: cat}))
	const wf_list = category_workflow_map[category].map(wf => ({value: wf, label: wf}))

	const { usersInProj } = props

	console.log("usersInProj FLAGGGG: ", usersInProj)

	

	useEffect(() => {
		if (usersInProj) {
			const usersList = usersInProj.map(user => ({value: user.user_id, label: user.user_full_name, image: user.user_avatar}))
			setDropdownUsersList(usersList)
		}

	}, [usersInProj])

	// ref for dropdown's menuportal target
	const menuContainerRef = useRef(null);
	useEffect(() => {
    	menuContainerRef.current = document.getElementById('dropdown-menu-container');
  	}, []);

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
			<Select id="category" className="create-card-select" options={cat_list} onChange={(e) => setCategory(e['value'])}/>

			<label htmlFor="workflow">Workflow: </label>
			<Select id="workflow" className="create-card-select" options={wf_list} onChange={(e) => setWorkflow(e['value'])}/>

			<label htmlFor="planned_start_date">Planned Start Date: </label>
			<input
				className="create-card-date-field"
				type="date"
				id="planned_start_date"
				value={plannedStartDate}
				onChange={(e) => console.log(e)}
			/>

			{/* setPlannedStartDate(e.target.value) */}

			<label htmlFor="deadline">Deadline: </label>
			<input
				className="create-card-date-field"
				type="date"
				id="deadline"
				value={deadline}
				onChange={(e) => setDeadline(e.target.value)}
			/>			

			<label htmlFor="create-card-assignee-list">Assign task to: </label>
			<Select 
				className="create-card-select" 
				id="create-card-assignee-list" 
				options={dropdownUsersList} 
				menuPortalTarget={menuContainerRef.current}
				isMulti 
				formatOptionLabel={ user => (
					<div className="user-list-option">
						<img src={user.image} height="40px" width="40px"/>&nbsp;<span>{user.label}</span>
					</div>
					)
				}
				onChange={(e) => setTaskAssignedTo(e.map(elem => elem.value))}
				
			/>
			

			<label htmlFor="create-card-supervisor-list">Task Supervisors: </label>
			<Select 
				className="create-card-select" 
				id="create-card-supervisor-list"
				options={dropdownUsersList} 
				isMulti 
				menuPortalTarget={menuContainerRef.current}
				formatOptionLabel={ user => (
					<div className="user-list-option">
						<img src={user.image} height="40px" width="40px"/>&nbsp;<span>{user.label}</span>
					</div>
					)
				}
				onChange={(e) => setTaskSupervisors(e.map(elem => elem.value))}
			/>
			

			<label htmlFor="measurement-value">Measurements - Value:</label>
			<input className="create-card-number-field" type="number" value={measurementsValue} id="measurement-value" onChange={(e) => setMeasurementsValue(e.target.value)}></input>

			<label htmlFor="measurement-unit">Measurements - Units:</label>
			<input type="text" value={measurementsUnits} id="measurement-unit" onChange={(e) => setMeasurementsUnits(e.target.value)}></input>

			<div id="dropdown-menu-container"  />

		</div>
	)
}

export default TaskAttributes