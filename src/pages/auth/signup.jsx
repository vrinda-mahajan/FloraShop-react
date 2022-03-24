import "./auth.css"
import authImg from "../../assets/images/authentication.svg"
import { Link } from "react-router-dom"
import { useDocumentTitle } from "../../custom-hooks/useDocumentTitle"
import { useAuth } from "../../contexts/auth-context"
import { useState } from "react"
import { useNavigate } from "react-router-dom";

const Signup = () => {
    const navigate = useNavigate()
    useDocumentTitle("SignUp");
    const {signUpHandler} = useAuth()
    const [userDetails,setUserDetails] = useState(
        {
            firstName:"",
            lastName:"",
            email:"",
            password:"",
            confirmPassword:"",
        })

    const [showPassword,setShowPassword] = useState(false)
    const handleSubmit = (e) => {
        e.preventDefault()
        if(userDetails.password===userDetails.confirmPassword){
            signUpHandler(userDetails)
            navigate("/")
        }
    }

    return (
        <main className="auth-section">

        <section className="sign-up-section">
            <form onSubmit={handleSubmit} className="form form-auth">
                <div className="auth-heading">
                    <h3>Sign-up</h3>
                    <img className="responsive-img auth-img" src={authImg} alt="authentication" />
                </div>

                <div className="input-auth input-container">
                    <label className="input-label" htmlFor="username">Firstname</label>
                    <input onChange={
                        (e)=>{setUserDetails((prev)=>(
                            {...prev,firstName:e.target.value}
                        ))}} className="input-field auth-field" required type="text" id="Firstname" placeholder="Firstname" />
                </div>

                <div className="input-auth input-container">
                    <label className="input-label" htmlFor="username">Lastname</label>
                    <input onChange={
                        (e)=>{setUserDetails((prev)=>(
                            {...prev,lastName:e.target.value}
                        ))}} className="input-field auth-field" type="text" id="Lastname" placeholder="Lastname" />
                </div>

                <div className="input-auth input-container">
                    <label className="input-label" htmlFor="signup-email">Email</label>
                    <input onChange={
                        (e)=>{setUserDetails((prev)=>(
                            {...prev,email:e.target.value}
                        ))}} className="input-field auth-field" required type="email" id="signup-email" placeholder="Enter your email here" />
                </div>

                <div className="input-auth input-container">
                    <label className="input-label" htmlFor="signup-password">Password</label>
                    <input onChange={
                        (e)=>{setUserDetails((prev)=>(
                            {...prev,password:e.target.value}
                        ))}} className="input-field auth-field" required type={showPassword?"text":"password"} id="signup-password" placeholder="*******" />
                </div>

                <div className="input-auth input-container">
                    <label className="input-label" htmlFor="signup-password">Confirm Password</label>
                    <input onChange={
                        (e)=>{setUserDetails((prev)=>(
                            {...prev,confirmPassword:e.target.value}
                        ))}} className="input-field auth-field" required type={showPassword?"text":"password"} id="signup-password" placeholder="*******" />
                </div>

                <input onChange={()=>setShowPassword((prev)=>!prev)} className="checkbox-input" type="checkbox" /> 
                <label className="checkbox-label">Show Password</label>

                <div className="checkbox align-center">
                    <input required className="checkbox-input" type="checkbox" /> 
                    <label className="checkbox-label">I accept all terms and conditions.</label>
                </div>

                <div>
                <button type="submit" className="btn-auth btn btn-secondary">Create an Account</button>
                <span className="auth-span">Already registered? </span>
                <Link to="/signin">
                    <button type="button" className="auth-link link-login btn btn-link-underline">
                        Login here
                    </button>
                </Link>
                </div>
            </form>
        </section>
        </main>
    )
}

export {Signup}
