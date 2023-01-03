import './FileList.css'
import FileItem from './file-item/FileItem'

const FileList = (props) => {
	
	const { files, removeFile } = props

	const deleteFileHandler = (_name) => {
		// delete api backend call over here
		removeFile(_name)
	}

	return (
		<ul className="file-list">
			{
				files && files.map(file => 
					<FileItem 
						key={file.name}
						file={file}
						deleteFile={deleteFileHandler}
					/>)
			}		
		</ul>
	)
}

export default FileList