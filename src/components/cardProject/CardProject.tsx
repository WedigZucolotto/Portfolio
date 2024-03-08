import * as S from "./style";
import barberTechScreen from "../../img/projects/barberTechScreen.png";
import portfolioScreen from "../../img/projects/portfolioScreen.png";
import { ButtonProjects } from "../buttonprojects/ButtonProjects";

type ImageTypes = "barberTechScreen" | "portfolioScreen";

const types = {
  barberTechScreen: barberTechScreen,
  portfolioScreen: portfolioScreen,
};

interface ButtonTypes {
  buttonTitle: string;
  src: string;
}

interface CardProjecProps {
  image: ImageTypes;
  technologies: string;
  title: string;
  description: string;
  buttons: ButtonTypes[];
}

export const CardProject = ({
  image,
  technologies,
  title,
  description,
  buttons,
}: CardProjecProps) => {
  return (
    <S.CardProject>
      <img src={types[image]} alt="" />

      <div className="technologies">
        <p>{technologies}</p>
      </div>

      <div className="desc">
        <h2>{title}</h2>
        <p>{description}</p>

        <div className="button-projects">
          {buttons.map((button) => (
            <ButtonProjects buttonTitle={button.buttonTitle} src={button.src} />
          ))}
        </div>
      </div>
    </S.CardProject>
  );
};
