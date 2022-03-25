import { useProduct } from "../../contexts/product-context"
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/auth-context";

const Profile = () => {
    const navigate = useNavigate()
    const {user,setUser} = useAuth()
    const {dispatch} = useProduct()
    const logoutHandler = () => {
        localStorage.removeItem("token")
        localStorage.removeItem("user")
        dispatch({type:"LOGOUT"})
        navigate("/")
        setUser("")
    }
    return (
        <div className="flex-c center profile-section">
            <h4 className="m2">Account</h4>
            <section className="profile-details flex-c">

                <div className="price-details">
                <h6>Profile Details:</h6>
                <div className="price-breakup">
                    <div>Full Name</div>
                    <div>{`${user.firstName} ${user.lastName}`}</div>
                </div>
                <div className="price-breakup">
                    <div>Email ID</div>
                    <div>{`${user.email}`}</div>
                </div>
                <div className="price-breakup">
                    <div>Address</div>
                    <div>Wno.8 Hno. 57 near Pandav Mandir </div>
                </div>
                <div className="price-breakup">
                    <div>Contact</div>
                    <div>9858412232</div>
                </div>
                </div>

                <button onClick={logoutHandler} className="btn-logout btn btn-primary">Log out</button>
            </section>
        </div>
        
    )
}

export {Profile}