import { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import './Projects.css'
import ProjectList from './components/ProjectList'
import Logo from './components/Logo'
import useFetch from './../../hooks/useFetch'

const Projects = () => {

	const routeParams = useParams()
	const userId = routeParams.id

	const PROJECTS_URL = `/users/${userId}/projects`

	const { data: projList, loading, error } = useFetch(PROJECTS_URL)

	return (
		<div className="projects-page">
			<Logo />
			<div className="project-list-container">
				{ error && <div>{error}</div>}
				{ loading && <div>Loading...</div>}
				{ projList && 
					<>
						<h1>Choose your construction project</h1>
						<ProjectList projects={projList}/>
					</>
				}
			</div>
		</div>
	)
}

export default Projects