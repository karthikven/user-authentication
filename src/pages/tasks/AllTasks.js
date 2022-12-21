import { Link, useParams, useLocation } from 'react-router-dom';
import { useState } from 'react'
import useFetch from './../../hooks/useFetch'
import Sidebar from './../../components/sidebar/Sidebar'
import './AllTasks.css'

const AllTasks = (props) => {

	const routeParams = useParams()
	const projectId = routeParams.projectId
	const userId = routeParams.userId

	const location = useLocation()
	const { avatar, project_name } = location.state


	const TASKS_URL = `/users/${userId}/projects/${projectId}/tasks`

	const {data: tasks, loading, error } = useFetch(TASKS_URL)

	{tasks && console.log(tasks)}



	return (
		<div className="display-all-tasks-screen">
			<Sidebar avatar={avatar} project_name={project_name.name}/>	
		</div>
	)
}

export default AllTasks