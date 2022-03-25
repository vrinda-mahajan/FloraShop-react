import axios from "axios";
import { createContext, useContext } from "react";
import { useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const userInLocalStorage = JSON.parse(localStorage.getItem("user"))
    const tokenInLocalStorage = JSON.parse(localStorage.getItem("token"))
    const [user,setUser] = useState(userInLocalStorage?.user)
    const [token,setToken] = useState(tokenInLocalStorage?.token)

    const signInHandler = async(email,password) => {
        try {
            const response = await axios.post(
                "/api/auth/login",
                {
                    email:email,
                    password:password
                }
            )
            if (response.status===200){
                localStorage.setItem("token",JSON.stringify({token:response.data.encodedToken}))
                localStorage.setItem("user",JSON.stringify({user:response.data.foundUser}))
                setToken(response.data.encodedToken)
                setUser(response.data.foundUser)
            }
        }
        catch (error) {
            console.log(error)
    }}

    const signUpHandler = async(userDetails) => {
        const {firstName,lastName,email,password} = userDetails
        try {
            const response = await axios.post(
                "/api/auth/signup",
                {
                    email:email,
                    password:password,
                    firstName:firstName,
                    lastName:lastName,
                }
            )
            if (response.status===201){
                localStorage.setItem("token",JSON.stringify({token:response.data.encodedToken}))
                localStorage.setItem("user",JSON.stringify({user:response.data.createdUser}))
                setToken(response.data.encodedToken)
                setUser(response.data.createdUser)
            }
        } catch (error) {
            console.log(error)
        }
    }
    const value = {signInHandler,signUpHandler,user,setUser,token,setToken}
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext)