import ProjectTile from './ProjectTile'

const ProjectList = (props) => {

	const { projects } = props
	return (
		<div className="project-list">
			{
				projects.map(project => (
					// For each project in the array, render a ProjectTile component.
					<ProjectTile key={project.project_id} name={project.project_name} avatar={project.project_avatar}/>
				))
			}
		</div>
			
	)
}

export default ProjectList