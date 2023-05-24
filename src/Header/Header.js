import "./Header.css"

export function Header() {
    return (
        <div className="headerDiv">
            <a className="emailLink" href="/">danyeal.mateen@hotmail.com</a>
            <div className="socialLinks">
                <a className="linkedinLink" href="/">LinkedIn</a>
                <a className="githubLink" href="/">Github</a>
            </div>
        </div>
    )
}