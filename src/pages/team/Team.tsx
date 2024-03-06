import * as S from "./style";
import Scroll from "../../img/scroll.svg";
import { Line } from "../../components/line/Line";
import { ProfileCard } from "../../components/profilecard/ProfileCard";

export const Team = () => {
  const douglasTechnologies = ["HTML", "CSS", "TS", "REACT"];
  const gabrielTechnologies = ["REACT", "C#", ".NET", "SQL"];
  return (
    <S.Team>
      <section className="left-section">
        <h1 className="name">Douglas Zucolotto Gonçalves</h1>
        <p className="description">
          👨‍💻 For 1 and a half years, developing and programming <br />
          interfaces with JavaScript, React JS, and TypeScript. <br />
          🎓 Graduated in Systems Analysis and Development and <br />
          currently studying Computer Science.
        </p>

        <ProfileCard
          image="profilePhoto"
          title="Front-End Developer Web Designer"
          email="douglaszuco2@gmail.com"
          location="Brazil"
          job="Freelancer"
          technologies={douglasTechnologies}
        />
      </section>

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

      <section className="right-section">
        <h1 className="name">Gabriel Garcia Wedig</h1>
        <p className="description">
          👨‍💻 For 3 years, developing and programming Full-Stack <br />
          applications with React.JS, C#, .NET and PostgreSQL. <br />
          🎓 Currently studying Systems Analysis and Development.
        </p>
        <ProfileCard
          image="profilePhoto"
          title="Full-Stack Developer"
          email="gabrielwedig2@gmail.com"
          location="Brazil"
          job="Freelancer"
          technologies={gabrielTechnologies}
        />
      </section>
    </S.Team>
  );
};
