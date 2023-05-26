import "./Main.css";
import placeholder from "../Images/placeholder.jpg"

export function Main() {
    return (
        <>
            <div className="imageContainer">
                <img className="placeholderIMG" src={placeholder} />
            </div>
            <div className="mainDivContainer">
                <h1>Building digital,</h1>
                <h1>products, brands &</h1>
                <h1>experience</h1>
            </div>
        </>
    )
}