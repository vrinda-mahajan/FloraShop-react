import "./auth.css"
import authImg from "../../assets/images/authentication.svg"
import { Link } from "react-router-dom"

const Signup = () => {
    return (
        <main className="auth-section">

    <section className="sign-up-section">
        <form className="form form-auth">
            <div className="auth-heading">
                <h3>Sign-up</h3>
                <img className="responsive-img auth-img" src={authImg} alt="authentication" />
            </div>

            <div className="input-auth input-container">
                <label className="input-label" htmlFor="username">Username</label>
                <input className="input-field auth-field" type="text" id="username" placeholder="Username" />
            </div>

            <div className="input-auth input-container">
                <label className="input-label" htmlFor="signup-email">Email</label>
                <input className="input-field auth-field" type="email" id="signup-email" placeholder="Enter your email here" />
            </div>

            <div className="input-auth input-container">
                <label className="input-label" htmlFor="signup-password">Password</label>
                <input className="input-field auth-field" type="password" id="signup-password" placeholder="*******" />
            </div>

            <div className="checkbox align-center">
                <input className="checkbox-input" type="checkbox" /> 
                <label className="checkbox-label">I accept all terms and conditions.</label>
            </div>

            <div>
            <button className="btn-auth btn btn-secondary">Create an Account</button>
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
