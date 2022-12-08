import { useRef, useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import axios from './../../api/axios'
import './Register.css'

// font-awesome icons
import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const USER_REGEX = /^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%*_]).{8,24}$/
const FULLNAME_REGEX = /^[a-zA-Z ]*$/

const REGISTER_URL = "/register"

const Register = () => {
	const userRef = useRef()
	const errRef = useRef()
	const fullNameRef = useRef()

	const [fullName, setFullName] = useState('')
	const [validFullName, setValidFullName] = useState(false)
	const [fullNameFocus, setFullNameFocus] = useState(false)

	const [user, setUser] = useState('')
	const [validName, setValidName] = useState(false)
	const [userFocus, setUserFocus] = useState(false)

	const [pwd, setPwd] = useState('');
    const [validPwd, setValidPwd] = useState(false);
    const [pwdFocus, setPwdFocus] = useState(false);

    const [matchPwd, setMatchPwd] = useState('');
    const [validMatch, setValidMatch] = useState(false);
    const [matchFocus, setMatchFocus] = useState(false);

    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false)

    useEffect(() => {
    	fullNameRef.current.focus()
    }, [])

    useEffect(()=>{
    	const result = FULLNAME_REGEX.test(fullName)
    	setValidFullName(result)
    }, [fullName])

    
    useEffect(() => {
    	const result = USER_REGEX.test(user)
    	setValidName(result)
    }, [user])

    useEffect(() => {
    	const result = PWD_REGEX.test(pwd)
    	setValidPwd(result)
    	const match = pwd === matchPwd
    	setValidMatch(match)
    }, [pwd, matchPwd])

    useEffect(() => {
    	setErrMsg('')
    }, [user, pwd, matchPwd])

    const handleSubmit = async (e) => {
    	e.preventDefault()

    	// if button enabled with JS hack
    	const v1 = USER_REGEX.test(user)
    	const v2 = PWD_REGEX.test(pwd)  

    	try {
    		const response = await axios.post(REGISTER_URL, 
    			{'user_full_name': fullName, 'user_email': user, 'user_password': pwd}    			
    		)
    		console.log(response.data)
    		console.log('checkpoint 1')
    		setSuccess(true)
    	// clear input fields
    	} catch (err) {

    		if (!err?.response) {
    			setErrMsg('No server response')
    		} else if (err.response?.status === 409) {
    			setErrMsg("Email already registered")
    		} else {
    			console.log('checkpoint 2')
    			setErrMsg('Registration Failed')
    		}
    		errRef.current.focus()
    	}
    }

	return (
		<>

		{success ? (
			<section>
				<h1>Success!</h1>
				<p>
					<a href="#">Sign In</a>
				</p>
			</section>
			) : (

		<section className="register-container">
			<p
			ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive"
			>{errMsg}</p>
			<h1>Become a Superbuilder today</h1>


			<form onSubmit={handleSubmit}>

				{/* full name */}

				<label htmlFor="fullname">
					Full Name:
					{/* if empty, display a cross, else check */}
					<FontAwesomeIcon icon={faCheck} className={validFullName && fullName ? "valid" : "hide"} />
					<FontAwesomeIcon icon={faTimes} className={!fullName || validFullName ? "hide" : "invalid"} />
				</label>
				<input 
					type="text"
					id="fullname"
					ref={fullNameRef}
					required
					onChange={ (e) => setFullName(e.target.value) }
					onFocus = { () => setFullNameFocus(true) }
					onBlur = { () => setFullNameFocus(false) }
				/>

				{/* email  */}
				<label htmlFor="username">
					E-mail: 
					{/* if it is valid, display a check, if username is invalid, point this out with a cross */}
					<span className={validName ? "valid" : "hide"}>
						<FontAwesomeIcon icon={faCheck}/>
					</span>
					<span className={validName || !user ? "hide" : "invalid"}>
						<FontAwesomeIcon icon={faTimes}/>
					</span>
				</label>
				<input 
					type="text"
					id="username"
					ref={userRef}
					autoComplete="off"
					onChange={(e) => setUser(e.target.value) }
					required
					aria-invalid = {validName ? "false" : "true"}
					aria-describedby = "uidnote"
					onFocus = { () => setUserFocus(true)}
					onBlur = { () => setUserFocus(false) }
				/>

				<p id="uidnote" className={userFocus && user && !validName ? "instructions" : "offscreen"}>
					<FontAwesomeIcon icon={faInfoCircle}/>
					4 to 24 characters <br />
					Must begin with a letter <br />
					Letters, numbers, underscores, hyphens allowed. <br />	
				</p>

				{/* password: */}

				<label htmlFor="password">
					Password:
					{/* if it is valid, display a check, if password is invalid, point this out with a cross */}
					
					<FontAwesomeIcon icon={faCheck} className={validPwd ? "valid" : "hide"} />
					<FontAwesomeIcon icon={faTimes} className={validPwd || !pwd ? "hide" : "invalid"} />
					
				</label>
				<input 
					type="password"
					id="password"
					required
					onChange={(e) => setPwd(e.target.value) }
					value={pwd}
					aria-invalid={validPwd ? "false" : "true"}
					aria-describedby= "pwdnote"
					onFocus = {() => setPwdFocus(true) }
					onBlur = { () => setPwdFocus(false) }
				/>

				<p id="pwdnote" className={pwdFocus && !validPwd ? "instructions" : "offscreen" }>
					<FontAwesomeIcon icon={faInfoCircle} />
					8 to 24 characters.<br />
					Must include uppercase and lowercase letters, a number and a special character.<br />
					Allowed special characters: <span aria-label="exclamation mark">!</span> <span aria-label="at symbol">@</span> <span aria-label="hashtag">#</span> <span aria-label="dollar sign">$</span> <span aria-label="percent">%</span> <span aria-label="underscore">_</span>
				</p>

				{/* Match password */}

				<label htmlFor="confirm_pwd">
					Confirm Password:
					{/* if it is valid, display a check, if password is invalid, point this out with a cross */}
					<span className={validMatch && matchPwd ? "valid" : "hide"}>
						<FontAwesomeIcon icon={faCheck}/>
					</span>
					<span className={!matchPwd || validMatch ? "hide" : "invalid"}>
						<FontAwesomeIcon icon={faTimes} />
					</span>
				</label>
				<input 
					type="password"
					id="confirm_pwd"
					required
					onChange={(e) => setMatchPwd(e.target.value) }
					aria-invalid={validMatch ? "false" : "true"}
					aria-describedby= "confirmnote"
					onFocus = {() => setMatchFocus(true) }
					onBlur = { () => setMatchFocus(false) }
				/>

				<p id="confirmnote" className={matchFocus && !validMatch ? "instructions" : "offscreen"}>
					<FontAwesomeIcon icon={faInfoCircle}/>
					Passwords do not match.
				</p>

				{/* Sign up button */}
				<button disabled={!validName || !validPwd || !validMatch ? true : false}>Sign Up</button>

				{/* already signed up? line */}
				<p>
					Have an account already? <br />
					<span className="line">
						<Link to="/login">Sign In</Link>
						
					</span>
				</p>
			</form>
		</section>
		)}
		</>
	)
}

export default Register