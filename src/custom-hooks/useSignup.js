import axios from "axios"

export const signupHandler = async () => {
    try {
      const response = await axios.post('/api/auth/signup', {
        firstName: "Adarsh",
        lastName: "Balika",
        email: "adarshbalika@neog.camp",
        password: "adarshBalika",
      });
      // saving the encodedToken in the localStorage
      localStorage.setItem("token", response.data.encodedToken);
    } catch (error) {
      console.log(error);
    }
  };