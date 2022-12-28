import { useState } from 'react'
import './LocationAndDesign.css'

const LocationAndDesign = () => {
	
	const [locationBlock, setLocationBlock] = useState('')
	const [locationFloor, setLocationFloor] = useState('')
	const [locationUnit, setLocationUnit] = useState('')
	const [locationRoom, setLocationRoom] = useState('')
	const [floorPlan, setFloorPlan] = useState('')


	return (
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

			<label htmlFor="create-card-upload-design">Upload Floor Plan for Task:</label>
			<input
				className="create-card-drawings-upload"
				type="file"
				id="create-card-upload-design"
				value={floorPlan}
				onChange={(e) => setFloorPlan(e.target.files[0])}
			/>
			
		</div>
	)
}

export default LocationAndDesign