import styled from "styled-components";

export const Team = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100vh;

  .centered-section {
    display: flex;
    align-items: center;
    flex-direction: column;
    margin: auto;
    position: relative;
    top: -38px;
  }

  .centered-section > img {
    width: 40px;
  }

  .centered-section > h1 {
    font-family: "Ubuntu", sans-serif;
    font-weight: 400;
    font-size: 64px;
    margin-top: 15px;
    color: #12f7d6;
  }

  .about-us {
    display: flex;
    margin-top: 80px;
  }

  .about-us > p {
    color: #ffffff;
    font-family: "Fira Code", monospace;
    font-size: 32px;
    font-weight: 500;
  }

  .hashtag {
    color: #12f7d6;
  }

  .line {
    width: 150px;
  }

  .lines {
    width: 350px;
    height: 0.5px;
    background-color: #12f7d6;
    position: relative;
    top: 23px;
    left: 12px;
  }

  .text-about-us {
    display: flex;
    flex-direction: column;
    position: relative;
    top: 15px;
    left: -5px;
  }

  .text-about-us > p {
    color: #abb2bf;
    font-family: "Fira Code", monospace;
    font-weight: 200;
    font-size: 16px;
    margin: 15px;
    position: relative;
  }
`;
