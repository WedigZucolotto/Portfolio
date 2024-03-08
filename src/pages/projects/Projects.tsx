import * as S from "./style";
import Scroll from "../../img/scroll.svg";
import { Line } from "../../components/line/Line";
import { CardProject } from "../../components/cardProject/CardProject";

export const Projects = () => {
  const barberTechBtn = [
    { buttonTitle: "Live <~>", src: "#" },
    { buttonTitle: "Github", src: "https://github.com/WedigZucolotto" },
    { buttonTitle: "Video", src: "#" },
  ];

  const portfolioBtn = [
    {buttonTitle: "Github", src: "https://github.com/WedigZucolotto/Portfolio"}
  ]
  return (
    <S.Projects>
      <div className="title">
        <img src={Scroll} alt="" />
        <h1>Projects</h1>
        <Line />
      </div>

      <section className="complete-apps">
        <h2>
          <span className="hashtag">#</span>complete-apps
        </h2>
        <div className="cards">
          <CardProject
            image={"barberTechScreen"}
            technologies={"HTML SCSS REACT TYPESCRIPT C# .NET POSTGRESQL"}
            title={"BarberTech"}
            description={"Complete web app for a barbershop"}
            buttons={barberTechBtn}
          />
          <CardProject
            image={"portfolioScreen"}
            technologies={"HTML SCSS REACT.JS TYPESCRIPT"}
            title={"Portfolio"}
            description={"You're using it right now"}
            buttons={portfolioBtn}
          />
        </div>
      </section>
    </S.Projects>
  );
};
