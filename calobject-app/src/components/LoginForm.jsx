import { useState } from "react"
import { Link } from "react-router-dom"

function LogInForm(){

    //Storing Logged in Data on state object
    const[loginForm, setLoginForm] = useState({
        email: "",
        password: "",
    });
    //is the user logged in or not
    const[isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogin = (e) => {
        e.preventDefault(); // to not reload when user click submit
        const storedData = JSON.parse(localStorage.getItem("user")); // convert stored data to js object

        //compare login data with stored data
        if(loginForm.email === storedData.email && loginForm.password === storedData.password){
            console.log("logged in successfuly")
            setIsLoggedIn(true); // updating Log in state
        }else{
            console.log(console.error("incorecct informations")
            )
        };
};

    
    return(
        <div>
            <img src="" alt="Logo" />
            <form action="submit" onSubmit={handleLogin}>
                <label>Email:</label>
                <input type="email" value={loginForm.email} onChange={(e) => setLoginForm({...loginForm, email: e.target.value})} required={true}/><br />
                <label>Password:</label>
                <input type="password" value={loginForm.password} onChange={(e) => setLoginForm({...loginForm, password: e.target.value})} required={true}/><br />
                <button>Log in</button>
            </form>
            
            <p>i don't have an account - <Link to="/signup">Sign up</Link></p>
            <p>Use Calobject as -<Link to="/calobject">Guest</Link></p>
        </div>
    )

}

export default LogInForm