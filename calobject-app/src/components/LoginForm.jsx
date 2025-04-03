import { useState } from "react"
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";
import CalorieCalculator from "./CalorieCalculator";
import { useNavigate } from "react-router-dom";


function LogInForm({isLoggedIn, setIsLoggedIn, }){

    //Storing Logged in Data on state object
    const[loginForm, setLoginForm] = useState({
        email: "",
        password: "",
    });

    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault(); // to not reload when user click submit
        const storedData = JSON.parse(localStorage.getItem("user")); // convert stored data to js object

        //checking if user is already signed up 
        if (!storedData) {
            alert("No account found! Please sign up.");
            return;
        }

        //compare login data with stored data
        if( loginForm.email === storedData.email && loginForm.password === storedData.password){
            alert("logged in successfuly");
            setIsLoggedIn(true); // updating Log in state
            navigate("/calobject");
        }else{
            alert("incorecct informations")
        };
    };

    
    return(
        <div>
            {isLoggedIn ? (
                <CalorieCalculator />
            ):(
                <div>
                    <img src="{Logo}" alt="Logo" />
                    <form onSubmit={handleLogin}>
                        <label>Email:</label>
                        <input type="email" value={loginForm.email} onChange={(e) => setLoginForm({...loginForm, email: e.target.value})} required={true}/><br />
                        <label>Password:</label>
                        <input type="password" value={loginForm.password} onChange={(e) => setLoginForm({...loginForm, password: e.target.value})} required={true}/><br />
                        <button >Log in</button>
                    </form>
                    <p>i don't have an account - <Link to="/signup">Sign up</Link></p>
                    <p>Use Calobject as -<Link to="/calobject">Guest</Link></p>
                </div>)}
        </div> 
            
            
    );
}

export default LogInForm