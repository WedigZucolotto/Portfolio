import ReactDOM from "react-dom";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./index.css";
import { Contact, Home, Projects, Team } from "./pages";
import { Header } from "./components/header/Header";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Team" element={<Team />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Projects" element={<Projects />} />
      </Routes>
    </BrowserRouter>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
