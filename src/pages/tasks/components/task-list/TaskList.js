import './TaskList.css'
import TaskCard from './../task-card/TaskCard'

const TaskList = (props) => {
	const { tasks, listTitle } = props

	return (
		<div className="task-list-container">
			<h3>{listTitle}</h3>
			<div className="tasks-list">
				{tasks.map((task) => (
					<div key={task.task_id}>
						<TaskCard task={task} />	
					</div>
				))}
			</div>
		</div>
	)
}

export default TaskList