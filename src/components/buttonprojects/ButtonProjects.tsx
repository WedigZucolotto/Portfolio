import * as S from "./style";

interface ButtonProjects {
  buttonTitle: string;
  src: string;
}

export const ButtonProjects = ({ buttonTitle, src }: ButtonProjects) => {
  return (
    <S.ButtonProjects>
      <a href={src} target="_blank" rel="noopener noreferrer">
        {buttonTitle}
      </a>
    </S.ButtonProjects>
  );
};
