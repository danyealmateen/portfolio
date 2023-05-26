import "./App.css"
import { Header } from "./Header/Header";
import { HamburgerMenu } from "./HamburgerMenu/HamburgerMenu";
import { Main } from "./Main/Main";
import { CVLinkBar } from "./CVLinkBar/CVLinkBar";

function App() {
  return (
    <>
      <div className="contentContainer">
        <Header />
        <HamburgerMenu />
        <Main />
        <CVLinkBar />
      </div>
    </>
  );
}

export default App;
