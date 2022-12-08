import { useRef, useState, useEffect, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import AuthContext from './../../context/AuthProvider'
import './Login.css'

import axios from './../../api/axios'
const LOGIN_URL = '/login'

const Login = () => {

	const { setAuth } = useContext(AuthContext)


	const emailRef = useRef()
	const errRef = useRef()

	const navigate = useNavigate();

	// define states for email, password, error and success check

	const [email, setEmail] = useState('')
	const [pwd, setPwd] = useState('')
	const [errMsg, setErrMsg] = useState('')
	const [success, setSuccess] = useState(false)
	const [userId, setUserId] = useState('')

	// when page renders, set the focus on email which is the first element of the form
	useEffect(() => {
		emailRef.current.focus()
	}, [])

	// clear error message when the user types into the email or password fields
	useEffect(() => {
		setErrMsg('')
	}, [email, pwd])

	const handleSubmit = async (e) => {
		e.preventDefault()
		
		try {
			const response = await axios.post(LOGIN_URL, {
				'user_email': email,
				'user_password': pwd
			})
			// console.log(JSON.stringify(response?.data))
			console.log('RESPONSE FROM BE ON LOGIN: ', response.data.user_id)
			console.log(`User id from response is: ${response.data.user_id} correct?`)
			// figure out fields for backend
			
			setEmail('')
			setPwd('')
			setSuccess(true)
			setUserId(response.data.user_id)
			console.log("USER ID:   ", userId)
			navigate(`/users/${response.data.user_id}/projects`)

			// navigate('/projects');
			
		} catch (err) {
			if (!err?.response) {
				setErrMsg('No Server Response')
			} else if (err.response?.status === 400) {
				setErrMsg('Missing Email or Password')
			} else if (err.response?.status === 401) {
				setErrMsg('Unauthorized')
			} else {
				setErrMsg('Login Failed')
			}
			errRef.current.focus()
		}
	}

	return (
		<>
			{ success ? (
				<section>
					<h1>You are logged in!</h1>	
					<br />
					<p>
						<a href="#">Go to Home</a>
					</p>
				</section>
				) : (

			<section className="login">
				<p className={errMsg ? "errmsg" : "offscreen"} ref={errRef} aria-live="assertive">{errMsg}</p>
				<h1>Sign in to Superbuilder</h1>
				<form onSubmit={handleSubmit}>
					<label htmlFor="email">
						E-mail id:
						<input 
							ref={emailRef}
							id="email"
							type="text"
							required
							autoComplete="off"
							onChange={(e) => setEmail(e.target.value) }
							value={email}
						/>
					</label>
					<label htmlFor="password">
						Password:
						<input 
							type="password"
							id="password"
							required
							autoComplete="off"
							onChange={(e) => setPwd(e.target.value)}
							value={pwd}
						/>
					</label>
					<button>Sign In</button>

					{/* forgot password */}
					<p>
						<span className="line"><a href="/">Forgot password?</a></span>
					</p>
					<br />

					{/* Don't have an account? */}
					<p>
					Don't have an account? &nbsp;
					<span className="line">
						<Link to="/register"> Sign Up</Link>
						{/* <a href="/">Sign Up</a> */}
					</span>
				</p>
				</form>
			</section>
			)}
		</>
	)
}

export default Login