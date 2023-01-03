import './FileItem.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileAlt, faSpinner, faTrash } from '@fortawesome/free-solid-svg-icons'

const FileItem = (props) => {
	
	const { file, deleteFile } = props

	return (
		<div className="file-item">
			<li 
				className="list-item"
				key={file.name}
			>
				<FontAwesomeIcon icon={faFileAlt} />
				&nbsp;
				<p>{file.name}</p>
				<div className="actions">
					{
						file.isUploading && 
						<FontAwesomeIcon 
							icon={faSpinner}
							className="fa-spin"
						/>
					}
					{
						!file.isUploading && 
						<FontAwesomeIcon 
							icon={faTrash}
							onClick={() => deleteFile(file.name)}
						/>
					}
				</div>
			</li>
			
		</div>
		
	)
}

export default FileItem