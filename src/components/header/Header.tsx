import { useNavigate } from "react-router-dom";
import * as S from "./style";

export const Header = () => {
  const navigate = useNavigate();
  return (
    <S.Header>
      <nav>
        <button onClick={() => navigate("/")}>Home</button>
        <button onClick={() => navigate("/Team")}>Team</button>
        <button onClick={() => navigate("/Contact")}>Contact</button>
        <button onClick={() => navigate("/Projects")}>Projects</button>
      </nav>
    </S.Header>
  );
};
