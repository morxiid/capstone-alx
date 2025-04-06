import Logo from "../assets/logo.png";
import {Link} from 'react-router-dom';
import UserIcone from "../assets/user.png";
import arrow from "../assets/arrow.png"


function Header({isLoggedIn, username, onLogout}){

    
    
    return(
        <header className=" w-full z-40  backdrop-blur-lg border-b border-white/10 h-15  ">
            <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
                {isLoggedIn ? (
                    <div className="flex justify-between items-center h-16">
                        <img src={Logo} alt="calobject logo" className="md:w-20 w-10"/>
                        <div className="md:flex m-5 gap-7 sm:gap-5">
                            <div className="flex gap-2 items-center px-3 text-sm">
                                <p className="">{username}</p>
                                <img src={UserIcone} alt="icone" className="w-5 h-5 m-1 "/>
                            </div>
                            <div className="flex gap-3 items-center">
                                <button onClick={onLogout} className="btn">Log out</button>
                                <Link to="/calobject"><button><img src={arrow} className="w-6 h-6 mt-2 center"/></button></Link>
                            </div>
                        </div>
                    </div>
                ):(
                    <div className="flex justify-between items-center h-16 ">
                        <img src={Logo} alt="calobject logo" className="w-20 h-13"/>
                        <div className="flex m-5 gap-7">
                            <Link to="/login"><button className="btn">Log in</button></Link>
                            <Link to="/signup"><button className="btn">Sign up</button></Link>
                            <Link to="/calobject"><button className="btn">Guest</button></Link>
                        </div>
                    </div>
                    )
                }
            </div>
        </header>
    )
}

export default Header