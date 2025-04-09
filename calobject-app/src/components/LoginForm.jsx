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
                <div className="flex justify-center my-10">
                    <div className="py-5 w-1/3 flex justify-center shadow-xl rounded-xl mt-5">
                        <div className="w-[70%] md:space-y-20">
                            <div className="flex justify-center">
                                <img src={Logo} alt="Logo" className="h-20 w-40 "/>
                            </div>
                            <form className="space-y-4" onSubmit={handleLogin}>
                                <label>Email:</label>
                                <input className="inpt" type="email" value={loginForm.email} onChange={(e) => setLoginForm({...loginForm, email: e.target.value})} required={true}/>
                                <label>Password:</label>
                                <input className="inpt" type="password" value={loginForm.password} onChange={(e) => setLoginForm({...loginForm, password: e.target.value})} required={true}/>
                                <div className="flex justify-center">
                                    <button className="btn">Log in</button>
                                </div>
                            </form>
                            <div className="mt-10">
                                <p className="justify-center flex">I already have an account - <Link className="font-bold" to="/sign up">Sign up</Link></p>
                                <p className="justify-center flex">Use Calobject as -<Link className="font-bold" to="/calobject">Guest</Link></p>
                            </div>
                            
                        </div>
                    </div> 
                </div>)}
        </div> 
            
            
    );
}

export default LogInForm