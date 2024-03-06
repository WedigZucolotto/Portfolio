import styled from "styled-components";

export const Team = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100vh;

  .centered-section {
    display: flex;
    align-items: center;
    flex-direction: column;
    margin: auto;
    margin-top: 40px;
    margin-left: 10px;
    width: 33%;
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
    left: 10px;
  }

  .text-about-us > p {
    color: #abb2bf;
    font-family: "Fira Code", monospace;
    font-weight: 200;
    font-size: 16px;
    margin: 15px;
    position: relative;
  }

  .left-section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
    width: 33%;
  }

  .left-section > h1 {
    position: relative;
    left: 23px;
  }

  .left-section > p {
    left: 20px;
  }

  .name {
    color: #12f7d6;
    font-size: 40px;
    font-family: "Ubuntu", sans-serif;
    font-weight: 600;
  }

  .description {
    font-family: "Fira Code", monospace;
    font-weight: 200;
    font-size: 16px;
    color: #abb2bf;
    position: relative;
    top: 20px;
  }

  .right-section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
    width: 33%;
  }

  .right-section > h1 {
    display: flex;
    width: 400px;
  }
`;
