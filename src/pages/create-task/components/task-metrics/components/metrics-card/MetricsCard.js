import './MetricsCard.css'

const MetricsCard = (props) => {

	const { name, definition, range } = props

	return (
		<div className="metrics-card">
			<h4>{name}</h4>
      		<p>{definition}</p>
      		<p>Range: {range}</p>
		</div>
	)
}

export default MetricsCard