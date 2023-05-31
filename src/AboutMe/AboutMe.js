import "./AboutMe.css"

export function AboutMe() {
    return (
        <div className="contentContainer">
            <div className="textContainer">
                <h1 className="title">About <span className="me">me</span></h1>
                <br />
                <hr />
                <br />
                <p className="text">My name is Danyeal and I'm a junior front end developer. I have been working for the Swedish Armed Forces for about 4 years where I've developed a strong work ethic and a keen eye for details. In my spare time I teach BJJ, brazilian jiu jitsu kid classes when I'm not training myself. One of my favorite things to do is to code and work on my own projects with a good playlist from Spotify. I find it relaxing and that it helps inspire me in my work.
                </p>
                <p className="text">
                    The subject of coding appeared when I thought about retraining myself from the swedish armed forces. My professor in BJJ told me about the developers that he works with and what they do. Working with problem solving and constantly learning new ways to keep evolving sounded very appealing to me. Two years later I finished my exam in front end development and the only thing I regret is that I didn't start sooner.</p>
            </div>
        </div>
    )
}