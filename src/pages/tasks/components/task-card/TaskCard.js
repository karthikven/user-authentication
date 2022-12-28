import './TaskCard.css'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faCircle } from '@fortawesome/free-solid-svg-icons'
import { faClock } from '@fortawesome/free-solid-svg-icons'
import { faTag } from '@fortawesome/free-solid-svg-icons'
import { faBarsProgress } from '@fortawesome/free-solid-svg-icons'


const TaskCard = (props) => {
	const { task } = props

	return (

		<div className="task-card">
			<Link to="/">
				<div className="task-card-row1">
					<h2>{ task.task_name }</h2>
					<div className="task-card-users">
						{task.users.map(user => (
							<div key={user.user_id}>
								<FontAwesomeIcon icon={faUser} />&nbsp;
								{/* <FontAwesomeIcon icon={faUser} />&nbsp;{user.user_first_name}&nbsp;{user.user_last_name} */}
							</div>
						))}
					</div>
				</div>
				<div className="task-card-row2">
					<div className="task-card-row2-priority">{task.priority==="High" ? (<div><FontAwesomeIcon icon={faCircle} color="red"/>&nbsp;High Priority</div>) : task.priority === "Medium" ? (<div><FontAwesomeIcon icon={faCircle} color="orange"/>&nbsp;Medium Priority</div>) : (<div><FontAwesomeIcon icon={faCircle} color="yellow"/>&nbsp;Low Priority</div>)}</div>
					<div className="task-card-row2-category"><FontAwesomeIcon icon={faTag} />&nbsp;Category:&nbsp; {task.category}</div>
				</div>
				<div className="task-card-row3">
					<div className="task-card-row3-deadline"><FontAwesomeIcon icon={faClock} />&nbsp;Deadline:&nbsp;{task.deadline.slice(0,10)}</div>
					<div className="task-card-row3-progress"><FontAwesomeIcon icon={faBarsProgress}/>&nbsp;{task.percentage_completed * 100}%</div>
				</div>
			</Link>
		</div>
	)
}

export default TaskCard