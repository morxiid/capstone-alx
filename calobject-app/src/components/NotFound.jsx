import { Link } from "react-router-dom"

function NotFound(){

    return(
        <div>
            <h1>404</h1>
            <h3>Page Not Found</h3>
            <Link to="/calobject"><p>Back to home Page</p></Link>
        </div>
    )
}

export default NotFound