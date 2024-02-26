import * as S from "./style";
import imageCardOne from "../../img/imageCardOne.svg";
import imageCardSecond from "../../img/imageCardSecond.svg";

type ImageTypes = "imageCardOne" | "imageCardSecond";

const types = {
  imageCardOne: imageCardOne,
  imageCardSecond: imageCardSecond,
};

interface CardProps {
  title: string;
  content: string;
  image: ImageTypes;
}

export const Card = ({ title, content, image }: CardProps) => {
  return (
    <S.StyledCard>
      <div className="image-title-container">
        <img src={types[image]} alt="" />
        <h4>{title}</h4>
      </div>
      <p>{content}</p>
    </S.StyledCard>
  );
};
