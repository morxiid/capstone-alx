import Logo from "../assets/logo.png";
import Ggithub from "../assets/github-icon.png";
import Lindin from "../assets/linkdin-icon.png";
import Twitter from "../assets/twitter-icon.png";

function Footer(){

    return(
        <div style={{border:"solid 1px black"}}>
            <img src={Logo} alt="Calobject logo" />
            
            <div>
                <p>Developer Contact</p>
                <a href="https://github.com/morxiid"><img src={Ggithub}/></a>
                <a href="https://www.linkedin.com/in/morchiid"><img src={Lindin}/></a>
                <a href="https://x.com/morxiid"><img src={Twitter}/></a>
            </div>
            <p>all right deserved ©2025 Calobject </p>
        </div>
    )
}

export default Footer