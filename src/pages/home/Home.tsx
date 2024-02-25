import * as S from "./style";
import Envelope from "../../img/envelope.svg";

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

        <div className="lets-envolope">
          <h2 className="lets-talk">Let's Talk</h2>
          <img src={Envelope} alt="Envolope" className="envelope" />
        </div>

        <p className="var">
          <span className="const">const</span>{" "}
          <span className="github">githubLink</span> =
          <span className="link"> “https://github.com/WedigZucolotto”</span>
        </p>
      </section>
    </S.Home>
  );
};
