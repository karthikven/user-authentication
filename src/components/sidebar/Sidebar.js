import "./Sidebar.css"
import Logo from './../../pages/projects/components/Logo'
import LiveProject from './components/LiveProject'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrowelBricks } from '@fortawesome/free-solid-svg-icons'
import { faChartSimple } from '@fortawesome/free-solid-svg-icons'
import { faCompassDrafting } from '@fortawesome/free-solid-svg-icons'
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import { faPlus } from '@fortawesome/free-solid-svg-icons'


import plus from './../../img/plus.png'

const Sidebar = (props) => {

	const { avatar, project_name, userId, projectId } = props

	return (
		<div className="sidebar">
			<div className="sidebar-content">
				<Logo />
				<LiveProject avatar={avatar} project_name={project_name}/>
				
				<div className="link-to-create-new-task">
              		<button>
            			<Link to={`/users/${userId}/projects/${projectId}/createtask`}>
            				{/* /users/:userId/projects/:projectId/createtask */}
              				<FontAwesomeIcon icon={faPlus} /><span>&nbsp;&nbsp;Create New Task</span>
            			</Link>
          			</button>
          		</div>
				<Link to="/">
                	<div  className="sideitem"><FontAwesomeIcon icon={faTrowelBricks} />&nbsp;&nbsp; Tasks</div>
              	</Link>
              	<Link to="/">
                	<div  className="sideitem"><FontAwesomeIcon icon={faChartSimple} />&nbsp;&nbsp;Analytics</div>
              	</Link>
              	<Link to="/">
                	<div className="sideitem"><FontAwesomeIcon icon={faCompassDrafting} />&nbsp;&nbsp;Drawings</div>
              	</Link>
              	<Link to="/" >
                	<div className="sideitem"><FontAwesomeIcon icon={faRightFromBracket} />&nbsp;&nbsp;Log out</div>
              	</Link>
              	
			</div>
		</div>
	)
}

export default Sidebar