import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";


function NotFound(){

    return(
        <div className="space-y-4">
            <img src={Logo} alt="logo" className="h-20 w-40"/>
            <h1 className="text-9xl text-lime-500 font-bold">404</h1>
            <div className="">
                <h3 className="text-3xl">Page Not Found</h3>
                <Link to="/calobject"><p>Back to home Page</p></Link>
            </div>
        </div>
    )
}

export default NotFound