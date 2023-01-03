import './TaskMetrics.css'
import MetricsList from './components/metrics-list/MetricsList'

const TaskMetrics = () => {

	const metrics = [
	  {
	    label: 'Labor Productivity',
	    value: 'labor_productivity',
	    definition: 'Output per Laborer',
	    range: '0-100'
	  },
	  {
	    label: 'Material Utilization',
	    value: 'Material_utilization',
	    definition: 'Material Utilized per square feet',
	    range: '0-100'
	  },
	  {
	    label: 'Labor Downtime',
	    value: 'labor_downtime',
	    definition: 'Time lost due to Labor Inactivity',
	    range: '0-100'
	  }
	];

	return (
		<div className="create-card-task-metrics">
			<h4>Assign metrics for your task. Optimize task performance.</h4>
			<div className="create-card-task-metrics-container">
				<div className="task-metrics-general">
					<h4>Assign General Metrics:</h4>
					{/* Insert definition here */}
					<MetricsList metrics={metrics} />	
				</div>
				<div className="task-metrics-category-specific">
					<h4>Assign Category Specific Metrics:</h4>
					{/* Insert definition here */}
					<MetricsList metrics={metrics} />	
				</div>
			</div>	
		</div>
	)
}

export default TaskMetrics