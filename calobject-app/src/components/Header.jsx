import Logo from "../assets/logo.png";
import {Link} from 'react-router-dom';
import UserIcone from "../assets/user.png";


function Header({isLoggedIn, username, onLogout}){

    
    
    return(
        <header style={{border: "1px black solid"}}>
            {isLoggedIn ? (
                <div>
                    <img src={Logo} alt="calobject logo"/>
                    <p>{username}</p>
                    <img src={UserIcone} alt="icone" />
                    <button onClick={onLogout}>Log out</button>
                </div>
                ):(
                    <div>
                        <img src={Logo} alt="calobject logo" />
                        <Link to="/login"><button>Log in</button></Link>
                        <Link to="/signup"><button>Sign up</button></Link>
                        <Link to="/calobject"><button>Guest</button></Link>
                    </div>
                )
                
            }
        </header>
    )
}

export default Header