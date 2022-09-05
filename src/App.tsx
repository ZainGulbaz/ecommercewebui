import MenuBar from "./components/MenuBar/MenuBar";
import Footer from "./components/Footer/Footer";
import Welcome from "./pages/Welcome/Welcome";
import Home from "./pages/Home/Home";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Routes } from "react-router";

import { HOME } from "./routes";

const App = () => {
  return (
    <>
      <MenuBar />
      <Router>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path={HOME} element={<Home />} />
        </Routes>
      </Router>

      <Footer />
    </>
  );
};

export default App;
