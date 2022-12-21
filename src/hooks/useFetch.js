import { useState, useEffect } from 'react'
import axios from './../api/axios'

const useFetch = (url) => {
	const [data, setData] = useState(null)
	const [loading, setLoading] = useState(null)
	const [error, setError] = useState(null)

	useEffect (() => {
		const fetchData = async () => {
			try {
				const response = await axios.get(url)
				setData(response.data)
			} catch (err) {
				if (err.response) {
					console.log(err.response.data)
					console.log(err.response.status)
					console.log(err.response.headers)
				} else {
					console.log(`Error: ${err.message}`)
				}
			}
		}
		fetchData()
	}, [url])

	return { data, loading, error };
}

export default useFetch