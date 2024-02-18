import { Link } from "react-router-dom";
import * as S from "./style";

export const Header = () => {
  return (
    <S.Header>
      <nav>
          <Link to="/">Home</Link>
          <Link to="/Team">Team</Link>
          <Link to="/Contact">Contact</Link>
          <Link to="/Projects">Projects</Link>
      </nav>
    </S.Header>
  );
};
