import * as S from "./style";

interface TechnologiesProps{
    text: string
}

export const Technologies = ({text}: TechnologiesProps) => {
  return (
    <S.StyledTechnologies>{text}</S.StyledTechnologies>
  )
}

