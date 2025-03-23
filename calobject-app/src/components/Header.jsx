import Logo from "../assets/logo.png";
import {Link} from 'react-router-dom'

// function Header(){

//     return(
//         <div className="header">
//             <Link to="/">
//                 <img src={Logo} alt="Calobject Logo" />
//             </Link>
//             <Link to = "/calobject">
//                 <button>Guest</button>
//             </Link>
//             <Link to="/login" >
//                 <button>Log in</button>
//             </Link>
//             <Link to="/signup">
//                 <button>Sign up</button>
//             </Link>
            
//         </div>
//     )
// }

// export default Header

const header = ({isLoggedIn,username, onLogout, onLogin}) =>{
    return(
        <header>
            {isLoggedIn ? (
                <div>
                    <img src={Logo} alt="calobject logo" />
                    <p>{username}</p>
                    <button onClick={onLogout}>Log out</button>
                </div>
                ):(
                    <div>
                        <img src={Logo} alt="calobject logo" />
                        <button>Log in</button>
                        <button>Log in</button>
                        <button>Guest</button>
                    </div>
                )
                
            }
        </header>
    )
}