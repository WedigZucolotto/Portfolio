import * as S from "./style";
import Envelope from "../../img/envelope.svg";
import { Card } from "../../components/card/Card";

export const Home = () => {
  return (
    <S.Home>
      <section className="left-section">
        <span className="rendered-tag first-h1">&lt;h1&gt;</span>
        <h1>
          We <span className="blue-words">Program</span> Your
          <br />
          Feelings,
          <span className="blue-words"> Code</span>
          <br />
          Emotions
          <span className="rendered-tag second-h1">&lt;/h1&gt;</span>
        </h1>

        <span className="rendered-tag first-p">&lt;p&gt;</span>
        <p className="paragraph">
          We, a talented group with the latest technologies, can help you make{" "}
          <br />
          your dream come true.
        </p>
        <span className="rendered-tag second-p">&lt;/p&gt;</span>

        <a href="contact">
          <div className="lets-envolope">
            <h2 className="lets-talk">Let's Talk</h2>
            <img src={Envelope} alt="Envolope" className="envelope" />
          </div>
        </a>

        <p className="var">
          <span className="const">const</span>
          <span className="github"> githubLink</span>
          <span> =</span>
          <a href="https://github.com/WedigZucolotto" target="_blank" rel="noopener noreferrer">
            <span className="link"> “https://github.com/WedigZucolotto”</span>
          </a>
        </p>
      </section>

      <section className="right-section">
        <div>
          <h3 className="what-we-do">WHAT WE DO</h3>
          <h2 className="specialists-in">SPECIALISTS IN</h2>
        </div>

        <Card
          image="imageCardOne"
          title="Front-end Development"
          content="Through a blend of creativity and code, we strive to shape seamless interfaces that captivate and engage users."
        />
        <Card
          image="imageCardSecond"
          title="Back-end Development"
          content="With a meticulous focus on performance, security, and scalability, we architect and implement solutions that empower applications to thrive."
        />
      </section>
    </S.Home>
  );
};
