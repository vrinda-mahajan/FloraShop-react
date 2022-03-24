import "./auth.css"
import authImg from "../../assets/images/authentication.svg"
import { Link } from "react-router-dom"

const Signin = () => {
    return (
        <main className="auth-section">
        <section className="login-section">
        <form className="form form-auth">
            <div className="auth-heading">
                <h3>Login</h3>
                <img className="responsive-img auth-img" src={authImg} alt="authentication" />
            </div>
    
            <div className="input-auth input-container">
                <label className="input-label" htmlFor="email">Email</label>
                <input className="input-field auth-field" type="email" id="email" placeholder="Enter your email here" />
            </div>

            <div className="input-auth input-container">
                <label className="input-label" htmlFor="password">Password</label>
                <input className="input-field auth-field" type="password" id="password" placeholder="*******" />
            </div>

            <div className="auth-footer">
            <button className="btn-auth btn btn-secondary">Login</button>
            <button className="btn-auth btn btn-secondary-outline">Login as guest</button>
            <span className="auth-span">Not a user yet?</span> 
            <Link to="/signup">
                <button type="button" className="auth-link link-sign-up btn btn-link-underline">
                    Create Account
                </button>
            </Link>
            </div>
        </form>
    </section>
    </main>
    )
}

export {Signin}