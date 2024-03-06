import styled from "styled-components";

export const Contact = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 90vh;
  margin-top: 40px;

  img {
    width: 40px;
  }

  h1 {
    font-family: "Ubuntu", sans-serif;
    font-weight: 400;
    font-size: 64px;
    margin-top: 15px;
    color: #12f7d6;
  }

  .first-p {
    font-family: "IBM Plex Mono", monospace;
    font-size: 16px;
    font-weight: 400;
    color: #ffffff;
    margin-top: 25px;
  }

  .contact-btn {
    font-family: "IBM Plex Mono", monospace;
    font-weight: 400;
    font-size: 32px;
    font-weight: 450;
    color: #12f7d6;
    margin-top: 40px;
    padding: 15px 30px 15px 30px;
    cursor: pointer;
    border: 2px solid #12f7d6;
    border-radius: 30px 0 30px 0;
    transition: all 0.3s ease-in-out;
  }

  .contact-btn:hover {
    background-color: #12f7d6;
    color: #000;
  }

  .container-cnt {
    display: flex;
    justify-content: space-between;
    width: 25%;
    margin-top: 50px;
  }

  .social,
  .phone {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    color: #43d9ad;
  }

  .social h3,
  .phone h3 {
    font-family: "Poppins", sans-serif;
    font-size: 24px;
    margin-bottom: 10px;
  }

  .social div {
    display: flex;
    justify-content: space-between;
    width: 100%;
    cursor: pointer;
  }

  .phone p,
  .social p {
    font-family: "Poppins", sans-serif;
    margin: 5px 0;
    color: #fbe8d3;
    font-size: 18px;
  }

  .order {
    position: relative;
    top: 60px;
  }

  .order p {
    color: #ffffff;
    font-family: "Manrope", sans-serif;
  }

  .order span {
    display: flex;
    height: 1.5px;
    width: 18px;
    background-color: #ffffff;
  }
`;
