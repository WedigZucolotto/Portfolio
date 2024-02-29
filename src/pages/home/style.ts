import styled from "styled-components";

export const Home = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80.5vh;

  .left-section {
    color: white;
    margin-left: 300px;
    margin-bottom: 130px;
    font-size: 60px;
  }

  .left-section > h1 {
    font-family: "Ubuntu", sans-serif;
    font-weight: 300;
  }

  .blue-words {
    color: #12f7d6;
  }

  .rendered-tag {
    color: #98faec;
    font-size: 14px;
    font-family: "IBM Plex Mono", monospace;
  }

  .first-h1 {
    margin-left: -18px;
    position: relative;
    top: 10px;
  }

  .second-h1 {
    position: relative;
    left: 14px;
  }

  .first-p {
    position: relative;
    top: -35px;
    left: -15px;
  }

  .second-p {
    position: relative;
    top: -60px;
    left: -15px;
  }

  .paragraph {
    font-family: "IBM Plex Mono", monospace;
    font-size: 14px;
    position: relative;
    top: -33px;
    left: 7px;
  }

  .lets-envolope {
    display: flex;
    align-items: center;
    margin-top: -50px;
    margin-left: 10px;
  }

  .lets-talk {
    font-family: "IBM Plex Mono", monospace;
    font-size: 32px;
    font-weight: 500;
    color: #12f7d6;
  }

  .envelope {
    position: relative;
    left: 25px;
  }

  .var {
    font-size: 16px;
    font-family: "Fira Code", monospace;
    margin-top: 20px;
  }

  .const {
    color: #4d5bce;
  }

  .github {
    color: #43d9ad;
  }

  .link {
    color: #e99287;
  }

  a {
    text-decoration: none;
  }

  .right-section {
    margin-right: 240px;
    margin-bottom: 80px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .what-we-do {
    color: #12f7d6;
    font-family: "Poppins", sans-serif;
    font-weight: 500;
    font-size: 24px;
    position: relative;
    left: 45px;
  }

  .specialists-in {
    color: white;
    font-family: "Poppins", sans-serif;
    font-weight: 500;
    font-size: 36px;
  }
`;
