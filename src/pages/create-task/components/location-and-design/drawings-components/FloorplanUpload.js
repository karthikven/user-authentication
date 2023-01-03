import './FloorplanUpload.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

const FloorplanUpload = (props) => {

	const { files, setFiles } = props

	const uploadHandler = (event) => {
		const file = event.target.files[0]
		file.isUploading = true;
		setFiles([...files, file])

		// upload file here

		file.isUploading = false
	}

	console.log("UPLOADED FILES: ", files)

	return (
		<div className="file-card">
			<h4>Attach Floorplans to this task</h4>
			<div className="file-inputs">
				<input type="file" onChange={uploadHandler}/>
				<button className="file-upload-button">
					<i>
						<FontAwesomeIcon icon={faPlus} />
					</i>
					Upload
				</button>
			</div>
			<p className="main">Supported file types</p>
			<p className="info">PDF, JPG, PNG</p>
		</div>
	)
}

export default FloorplanUpload