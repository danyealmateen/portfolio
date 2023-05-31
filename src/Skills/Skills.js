import "./Skills.css"

export function Skills() {
    return (
        <div className="contentContainer">

            <div className="box">
                <h1 className="skillsTitle">Skills</h1>
                <hr />
                <p className="skills">HTML</p>
                <p className="skills">CSS</p>
                <p className="skills">JAVASCRIPT</p>
                <p className="skills">TYPESCRIPT</p>
                <p className="skills">REACT</p>
            </div>

            <div className="box">
                <h1 className="otherTitle">Other</h1>
                <hr />
                <p className="others">GIT</p>
                <p className="others">GITHUB</p>
                <p className="others">FIREBASE</p>
                <p className="others">JIRA</p>
                <p className="others">SCRUM</p>
            </div>
        </div>
    )
}