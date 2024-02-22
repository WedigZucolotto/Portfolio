import * as S from "./style";

interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  active?: boolean;
}

export const Button = ({ children, onClick, active }: ButtonProps) => {
  return (
    <S.StyledButton
      onClick={onClick}
      className={`${active ? "active" : ""}`}
    >
      {children}
    </S.StyledButton>
  );
};
