import * as S from "./style";
import Scroll from "../../img/scroll.svg";
import { Line } from "../../components/line/Line";

export const Team = () => {
  return (
    <S.Team>
      <section className="centered-section">
        <img src={Scroll} alt="Scroll" />
        <h1>Team</h1>
        <Line />

        <div className="about-us">
          <p>
            <span className="hashtag">#</span>about-us
          </p>
          <span className="lines"></span>
        </div>
        <div className="text-about-us">
          <p>Hello, we are Wedig & Zucolotto!</p>
          <p>
            We are a team of self-taught developers based in <br />
            Brazil. We specialize in developing responsive <br />
            websites from scratch and transforming them into <br />
            modern, user-friendly web experiences.{" "}
          </p>
          <p>
            As a team, we believe in collaboration and <br />
            innovation. We bring a unique and valuable <br />
            perspective, allowing us to approach challenges in <br />
            new and exciting ways. We are always ready to take on <br />
            the next challenge and look forward to helping the <br />
            clients achieve their online goals. Join us on our <br />
            journey!
          </p>
        </div>
      </section>
    </S.Team>
  );
};
