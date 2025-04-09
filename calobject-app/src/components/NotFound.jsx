import { Link } from "react-router-dom";
import notFound from "../assets/notfound.png";


function NotFound(){

    return(
        <div className="flex justify-center mt-20">
            <div className="space-y-4">
                <img src={notFound} alt="logo" className="h-80 shadow-xl rounded-xl"/>
                <h1 className="text-9xl text-lime-500 font-bold"></h1>
                <div className=" flex justify-center">
                    <Link to="/"><button className="btn shadow-xl">Back Home</button></Link>
                </div>
            </div>
        </div>
    )
}

export default NotFound