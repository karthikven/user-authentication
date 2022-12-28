import './CreateTask.css'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import TaskAttributes from './components/task-attributes/TaskAttributes'
import LocationAndDesign from './components/location-and-design/LocationAndDesign'
import LaborMaterial from './components/labor-material/LaborMaterial'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons'


const CreateTask = () => {
	const [pageNumber, setPageNumber] = useState(0)
	const [closeForm, setCloseForm] = useState(0)
	const pageTitles = ["Define Basic Task Attributes", "Location & Drawings",  "Labor & Material"]
	const pageComponents = {0: <TaskAttributes />, 1: <LocationAndDesign />, 2: <LaborMaterial />}
	const navigate = useNavigate();
	const { userId, projectId } = useParams();

	const handleCloseForm = () => {
		setCloseForm(1)		
		navigate(-1)
	}
	
	return (

		<div className="create-card-modal-backdrop">
			<div className="create-task-page">
				{/* close button here */}
				<div className="create-card-close-button">
					<FontAwesomeIcon icon={faCircleXmark} onClick={() => handleCloseForm()} />	
				</div>
				<div className="create-card-progressbar">
					<div className="create-card-progressbar-fill" style={{ width: pageNumber === 0 ? "33.33333%" : pageNumber == 1 ? "66.666666%" : "100%" }}></div>
				</div>
				<div className="create-card-form-container">
					<div className="create-card-header">
						<h2>{pageTitles[pageNumber]}</h2>
					</div>
					<div className="create-card-body">
						{pageComponents[pageNumber]}
					</div>
					<div className="create-card-footer">
						<button onClick= {() => setPageNumber(pageNumber - 1)} disabled={pageNumber === 0}>Previous</button>
						<button onClick = {() => {setPageNumber(pageNumber + 1)}} disabled={pageNumber === pageTitles.length - 1}>Next</button>
					</div>

				</div>
			</div>
		</div>
		
	)
}

export default CreateTask