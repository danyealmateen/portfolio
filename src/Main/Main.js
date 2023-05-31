import "./Main.css";
import mainlogo from "../Images/mainlogo.jpeg"
import html from "../Logos/html.png"
import css from "../Logos/css.png"
import js from "../Logos/js.png"
import react from "../Logos/react.png"
import git from "../Logos/git.png"
import firebase from "../Logos/firebase.png"
import jira from "../Logos/jira.png"
import scrum from "../Logos/scrum.png"
import ts from "../Logos/ts.png";
import { Header } from "../Header/Header";
import { AboutMe } from "../AboutMe/AboutMe";
import { Footer } from "../Footer/Footer";

export function Main() {
    return (
        <>
            <Header />
            <div className="contentContainer">
                <div className="textContent">
                    <h1>Hi there, I'm <span className="danySpan">Dany</span></h1>
                    <h3>A Front End developer in Malmö, Sweden.</h3>
                    <hr />
                </div>
                <div className="logoContainer">
                    <img className="mainlogo" src={mainlogo} />
                    <hr className="logoHr" />
                </div>
                <div className="skillsetContainer">
                    <img src={html} className="html" />
                    <hr className="hr" />
                    <img src={css} className="css" />
                    <hr className="hr" />
                    <img src={js} className="js" />
                    <hr className="hr" />
                    <img src={react} className="react" />
                    <hr className="hr" />
                    <img src={git} className="git" />
                    <hr className="hr" />
                    <img src={firebase} className="firebase" />
                    <hr className="hr" />
                    <img src={jira} className="jira" />
                    <hr className="hr" />
                    <img src={scrum} className="scrum" />
                    <hr className="hr" />
                    <img src={ts} className="ts" />
                </div>
            </div>
            <AboutMe />
            <Footer />
        </>
    )
}