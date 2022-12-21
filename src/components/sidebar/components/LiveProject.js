import { useParams, Link } from 'react-router-dom';

const LiveProject = (props) => {

	const routeParams = useParams()
	const projectId = routeParams.projectId
	const { avatar, project_name } = props

	return (
		<div className="sidebar-live-project">
			<p className="sidebar-sub-header">MY LIVE PROJECT</p>
          	<div className="sidebar-project-name">
          		<ul>
            		<li>
              			<Link to="/">
              				{avatar && <div><img src={avatar.avatar} width="50" height="50"></img> <span>&nbsp;{project_name}</span></div>}
              			</Link>    
            		</li>
          		</ul>
          	</div>
        </div>
	)
}

export default LiveProject