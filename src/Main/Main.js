import "./Main.css";
import mainlogo from "../Images/mainlogo.jpeg"
import { Header } from "../Header/Header";
import { AboutMe } from "../AboutMe/AboutMe";
import { Footer } from "../Footer/Footer";
import { Skills } from "../Skills/Skills";

export function Main() {
    return (
        <>
            <Header />
            <div className="contentContainer">
                <div className="textContent">
                    <img className="mainlogo" src={mainlogo} />
                    <h1>Hi there, I'm <span className="danySpan">Dany</span></h1>
                    <h3>A Front End developer in Malmö, Sweden.</h3>
                </div>

            </div>
            <AboutMe />
            <Skills />
            <Footer />
        </>
    )
}