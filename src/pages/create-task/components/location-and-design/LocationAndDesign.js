import { useState, useRef } from 'react'
import { useLocalStorage } from "./../../../../hooks/useLocalStorage";
import './LocationAndDesign.css'
import FloorplanUpload from './drawings-components/FloorplanUpload'
import FileList from './drawings-components/FileList'


const LocationAndDesign = () => {
	
	const fileInputRef = useRef(null);
	const [locationBlock, setLocationBlock] = useLocalStorage("locationBlock", '')
	const [locationFloor, setLocationFloor] = useLocalStorage("locationFloor", '')
	const [locationUnit, setLocationUnit] = useLocalStorage("locationUnit", '')
	const [locationRoom, setLocationRoom] = useLocalStorage("locationRoom", '')
	const [previewImages, setPreviewImages] = useState([]);

	const [files, setFiles] = useState([])

	const removeFile = (filename) => {
		setFiles(files.filter(file => file.name !== filename))
	}


	return (
		<div className="create-card-location-and-design-container">
			<div className="create-card-location-and-design">
				<label htmlFor="location_block">Block: </label>
				<input
					type="text"
					id="location_block"
					value={locationBlock}
					onChange={(e) => setLocationBlock(e.target.value)}
				/>

				<label htmlFor="location_floor">Floor: </label>
				<input
					type="text"
					id="location_floor"
					value={locationFloor}
					onChange={(e) => setLocationFloor(e.target.value)}
				/>

				<label htmlFor="location_unit">Unit: </label>
				<input
					type="text"
					id="location_unit"
					value={locationUnit}
					onChange={(e) => setLocationUnit(e.target.value)}
				/> 

				<label htmlFor="location_room">Room: </label>
				<input 
					type="text"
					id="location_room"
					value={locationRoom}
					onChange={(e) => setLocationRoom(e.target.value)}
				/>
				{/* <label htmlFor="create-card-upload-design">Upload Floor Plan for Task:</label> */}
			</div>
			<FloorplanUpload files={files} setFiles={setFiles} removeFile={removeFile} />
			<FileList files={files} removeFile={removeFile} />
		</div>
		
	)
}

export default LocationAndDesign