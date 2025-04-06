import { useState } from "react";
import { Link } from "react-router-dom";
import LogInForm from "./LoginForm";
import Logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";


function SignUpForm(){
    //Declaring a object state that handle the inputs
    const[signupForm, setSignupForm] = useState({
        username: "", 
        email: "",
        password: "",
    });

    const navigate = useNavigate();

    //is the user signed up or not
    const[isSignedUp, setIsSignedUp] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault(); // to not reload when user click submit
        localStorage.setItem("user", JSON.stringify(signupForm)); // convert stored data to string
        setIsSignedUp(true); //updating Sign up state
        alert("sign up successfuly");
        navigate("/login");
    };

    

    return(
        <div>
            {isSignedUp ? (
                <LogInForm isSignedUp={isSignedUp}/>
            ):(
                <div className="border justify-center items-center space-y-4 w-full">
                    <div className="w-[50%] justify-center items-center ">
                        <img src={Logo} alt="Logo" className="h-20 w-40"/>
                        <form className="space-y-3" onSubmit={handleSubmit}>
                            <label>username:</label>
                            <input className="inpt" type="text" value={signupForm.username} onChange={(e) => setSignupForm({...signupForm, username: e.target.value})} required={true}/><br />
                            <label>Email:</label>
                            <input className="inpt" type="email" value={signupForm.email} onChange={(e) => setSignupForm({...signupForm, email: e.target.value})} required={true}/><br />
                            <label>Password:</label>
                            <input className="inpt" type="password" value={signupForm.password} onChange={(e) => setSignupForm({...signupForm, password: e.target.value})} required={true}/><br />
                            <button className="btn" type="submit">Sign up</button>
                        </form>
                        <div className="mt-10">
                            <p>I already have an account - <Link className="font-bold" to="/login">Log in</Link></p>
                            <p>Use Calobject as -<Link className="font-bold" to="/calobject">Guest</Link></p>
                        </div>
                    </div>
                </div>
            )}
        </div>          
    );
}

export default SignUpForm