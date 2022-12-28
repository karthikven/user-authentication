import './TasksBoard.css'
import { Link } from 'react-router-dom'
import TaskCard from './../task-card/TaskCard'
import TaskList from './../task-list/TaskList'
import CompletedButton from './../completed-tasks/CompletedButton'


const TasksBoard = (props) => {
	const { tasks } = props
	return (
		<div className="tasks-board-container">
			<h1>Your tasks board</h1>
			<div className="task-board-stacks">
				<TaskList tasks={tasks} listTitle="In progress"/>
				<TaskList tasks={tasks} listTitle="Overdue"/>
				<TaskList tasks={tasks} listTitle="To do"/>
				{/* <TaskList tasks={tasks} listTitle="Completed"/> */}
			</div>
			<div className="completed-tasks">
				<CompletedButton completedTasks={tasks}/>
			</div>

		</div>
	)
}

export default TasksBoard