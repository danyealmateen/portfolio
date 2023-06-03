import "./Header.css"
import logo from "../Images/logo.png";

export function Header() {
    return (

        <div className="headerDiv">
            <div className="leftDiv">
                <img className="logo" src={logo} />
                <h2 className="headerTitle">DANYWEBDEV</h2>
            </div>
            <h3 className="socialLinks">LinkedIn</h3>
            <h3 className="socialLinks">Projects</h3>
        </div>
    )
}
