import Logo from "../assets/logo.png";
import Ggithub from "../assets/github-icon.png";
import Lindin from "../assets/linkdin-icon.png";
import Twitter from "../assets/twitter-icon.png";

function Footer(){

    return(
        <div id="Footer" className="mt-40">
                <div className="md:flex justify-between items-center px-4 py-4 border bg-slate-100">
                    <img src={Logo} alt="Calobject logo" className="w-30 h-20"/>
                    <div className="items-center">
                        <p className="font-bold">Developer Contact</p>
                        <div className="md:flex gap-4 mt-3">
                            <a href="https://github.com/morxiid"><img src={Ggithub} className="w-10 "/></a>
                            <a href="https://www.linkedin.com/in/morchiid"><img src={Lindin} className="w-10"/></a>
                            <a href="https://x.com/morxiid"><img src={Twitter} className="w-10"/></a>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default Footer