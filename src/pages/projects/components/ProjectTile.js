
const ProjectTile = (props) => {
	
	const {name, avatar} = props

	return (
		<div className="project-tile">
			<img src={avatar}></img>
			<div className="project-name">{name}</div>
		</div>
	)
}

export default ProjectTile

