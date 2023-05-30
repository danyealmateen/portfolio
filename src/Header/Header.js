import "./Header.css"
// import { Link } from "react-router-dom"
import logo from "../Images/logo.png";


export function Header() {
    return (

        <div className="headerDiv">

            <div className="leftDiv">
                <img className="logo" src={logo} />
                <h2 className="headerTitle">DANYWEBDEV</h2>
            </div>

            <div className="skillSet">
                <h3>About me</h3>
                <h3>Skills</h3>
                <h3>Projects</h3>

            </div>
            <button className="contactBtn">Contact</button>
        </div>

    )
}


{/* <Link className='link' to="/aboutme">About me</Link> */ }