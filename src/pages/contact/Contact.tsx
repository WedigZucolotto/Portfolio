import * as S from "./style";
import Scroll from "../../img/scroll.svg";
import { Line } from "../../components/line/Line";

export const Contact = () => {
  return (
    <S.Contact>
      <img src={Scroll} alt="Scroll" />
      <h1>Contact</h1>
      <Line />
      <p className="first-p">We're currently available for freelance work</p>
      <button className="contact-btn">Send Us An Email</button>

      <div className="container-cnt">
        <div className="phone">
          <h3>Phone</h3>
          <p>+55 11 951412190</p>
          <p>+55 51 984652315</p>
        </div>
        <div className="social">
          <h3>Social/Websites</h3>
          <div>
            <p>Whatsapp</p>
            <p>Discord</p>
          </div>
          <div>
            <p>Instagram</p>
            <p>Github</p>
          </div>
        </div>
      </div>

      <div className="order">
        <p>order a service</p>
        <span></span>
      </div>
    </S.Contact>
  );
};
