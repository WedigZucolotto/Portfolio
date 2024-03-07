import * as S from "./style";
import barberTechScreen from "../../img/projects/barbertechscreen.svg";
import { ButtonProjects } from "../buttonprojects/ButtonProjects";

type ImageTypes = "barberTechScreen";

const types = {
  barberTechScreen: barberTechScreen,
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

        <div className="ButtonProjects">
          {buttons.map((button) => (
            <ButtonProjects buttonTitle={button.buttonTitle} src={button.src} />
          ))}
        </div>
      </div>
    </S.CardProject>
  );
};
