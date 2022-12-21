import { Link, useNavigate } from 'react-router-dom';

const ProjectTile = (props) => {
	
	const {name, avatar, projectId, userId} = props
	const navigate = useNavigate();

	return (
		<div className="project-tile">
			<Link to={`/users/${userId}/projects/${projectId}/tasks`} state={{ avatar: {avatar}, project_name: {name} }}>
				<img src={avatar}></img>
				<div className="project-name">{name}</div>
			</Link>
		</div>
	)
}

export default ProjectTile

