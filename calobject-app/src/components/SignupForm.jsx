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
                <div className="flex justify-center my-10">
                    <div className=" py-5 w-1/3 flex justify-center shadow-xl rounded-xl mt-5">
                        <div className="w-[70%] md:space-y-20 ">
                            <div className="flex justify-center">
                                <img src={Logo} alt="Logo" className="h-20 w-40 "/>
                            </div>
                            <form className="space-y-4" onSubmit={handleSubmit}>
                                <label>username:</label>
                                <input className="inpt" type="text" value={signupForm.username} onChange={(e) => setSignupForm({...signupForm, username: e.target.value})} required={true}/>
                                <label>Email:</label>
                                <input className="inpt" type="email" value={signupForm.email} onChange={(e) => setSignupForm({...signupForm, email: e.target.value})} required={true}/>
                                <label>Password:</label>
                                <input className="inpt" type="password" value={signupForm.password} onChange={(e) => setSignupForm({...signupForm, password: e.target.value})} required={true}/>
                                <div className="flex justify-center">
                                    <button className="btn" type="submit">Sign up</button>
                                </div>
                            </form>
                            <div className="mt-10">
                                <p className="justify-center flex">I already have an account - <Link className="font-bold" to="/login">Log in</Link></p>
                                <p className="justify-center flex">Use Calobject as -<Link className="font-bold" to="/calobject">Guest</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>          
    );
}

export default SignUpForm