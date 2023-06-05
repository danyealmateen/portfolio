import "./Header.css"
import logo from "../Images/logo.png";
import linkedin from "../Images/linkedin.png";

export function Header() {
    return (

        <div className="headerDiv">
            <div className="leftDiv">
                <img className="logo" src={logo} />
                <h2 className="headerTitle">DANYWEBDEV</h2>
            </div>
            <a className="socialLinks" href=""><img className="linkedin" src={linkedin} /></a>
            <h3 className="socialLinks">Projects</h3>
        </div>
    )
}
