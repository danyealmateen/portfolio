import "./App.css"
import { Main } from "./Main/Main";
import { BrowserRouter as Router, Route, Routes, Switch } from "react-router-dom";
import { AboutMe } from "./AboutMe/AboutMe";

function App() {
  return (

    <Router>
      <Routes>
        <Route path="/aboutme" element={<AboutMe />} />
        <Route path="/" element={<Main />} />
      </Routes>
    </Router>
  );
}

export default App;
