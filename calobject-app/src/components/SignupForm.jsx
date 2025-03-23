import { useState } from "react";
import { Link } from "react-router-dom";

function SignUpForm(){

    //Declaring a object state that handle the inputs
    const[signupForm, setSignupForm] = useState({
        username: "", 
        email: "",
        password: "",
    });
    //is the user signed up or not
    const[isSignedUp, setIsSignedUp] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault(); // to not reload when user click submit
        localStorage.setItem("user", JSON.stringify(signupForm)); // convert stored data to string
        setIsSignedUp(true); //updating Sign up state
    };

    

    return(
        <div>
            <img src="" alt="Logo" />
            <form onSubmit={handleSubmit}>
                <label>username:</label>
                <input type="text" value={signupForm.username} onChange={(e) => setSignupForm({...signupForm, username: e.target.value})} required={true}/><br />
                <label>Email:</label>
                <input type="email" value={signupForm.email} onChange={(e) => setSignupForm({...signupForm, email: e.target.value})} required={true}/><br />
                <label>Password:</label>
                <input type="password" value={signupForm.password} onChange={(e) => setSignupForm({...signupForm, password: e.target.value})} required={true}/><br />
                <button type="submit">Sign up</button>
            </form>
            
            <p>I already have an account - <Link to="/login">Log in</Link></p>
            <p>Use Calobject as -<Link to="/calobject">Guest</Link></p>
        </div>
    )
}

export default SignUpForm