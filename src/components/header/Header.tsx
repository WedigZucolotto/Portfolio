import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./style";
import { Button } from "../button/Button";
import Logo from "../../img/logo.svg";

export const Header = () => {
  const navigate = useNavigate();
  const [activeButton, setActiveButton] = useState("Home");

  const handleClick = (path: string, name: string) => {
    navigate(path);
    setActiveButton(name);
  };

  return (
    <S.Header>
      <div className="logo-nav-container">
        <img
          src={Logo}
          alt="Logo"
          className="logo"
          onClick={() => handleClick("/", "Home")}
        />
        <nav>
          <Button
            onClick={() => handleClick("/", "Home")}
            active={activeButton === "Home"}
          >
            Home
          </Button>
          <Button
            onClick={() => handleClick("/Projects", "Projects")}
            active={activeButton === "Projects"}
          >
            Projects
          </Button>
          <Button
            onClick={() => handleClick("/Team", "Team")}
            active={activeButton === "Team"}
          >
            Team
          </Button>
          <Button
            onClick={() => handleClick("/Contact", "Contact")}
            active={activeButton === "Contact"}
          >
            Contact
          </Button>
        </nav>
      </div>
      <span></span>
    </S.Header>
  );
};
