import { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import './Projects.css'
import ProjectList from './components/ProjectList'
import Logo from './components/Logo'
import axios from './../../api/axios'

const Projects = () => {

	const routeParams = useParams()
	const userId = routeParams.id
	const [projList, setProjList] = useState([])

	const PROJECTS_URL = `/users/${userId}/projects`

	useEffect(() => {

		const fetchProjectsList = async () => {
			try {
				const response = await axios.get(PROJECTS_URL)
				setProjList(response.data)
				console.log("RESPONSE: ", response.data)
			} catch (err) {
				if (err.response) {
					console.log(err.response.data)
					console.log(err.response.status)
					console.log(err.response.headers)
				} else {
					console.log(`Error: ${err.message}`)
				}
			}
		}
		
		fetchProjectsList()

	}, [])

	return (
		<div className="projects-page">
			<Logo />
			<div className="project-list-container">
				<h1>Choose your construction project</h1>
				<ProjectList projects={projList}/>
			</div>
		</div>
		
	)
}

export default Projects