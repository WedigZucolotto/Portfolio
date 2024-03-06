import styled from "styled-components";

export const ProfileCard = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  padding: 80px;
  border: 2px solid #ffffff;
  border-radius: 150px 0 150px 0;
  box-shadow: -3px -3px 0px 1px #12f7d6;
  width: 320px;
  height: 540px;

  p {
    color: #ffffff;
    font-family: "Ubuntu", sans-serif;
    font-weight: 400;
    font-size: 16px;
  }

  .image-title-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    top: -40px;
  }

  .image-title-container > img {
    width: 110px;
    border: 3px solid #12f7d6;
    border-radius: 100%;
  }

  .image-title-container > p {
    position: relative;
    top: 20px;
    text-align: center;
  }

  .info-container {
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-right: 40px;
    position: relative;
    top: 15px;
  }

  .email {
    display: flex;
  }

  .email > p {
    position: relative;
    left: 10px;
  }

  .location {
    display: flex;
    position: relative;
    right: 75px;
    top: 20px;
  }

  .location > p {
    position: relative;
    left: 10px;
  }

  .job {
    display: flex;
    position: relative;
    right: 57px;
    top: 40px;
  }

  .job > p {
    position: relative;
    left: 10px;
  }

  .technologies {
    display: flex;
    justify-content: center;
    position: relative;
    top: 75px;
  }

  .DownloadButton {
    position: relative;
    top: 100px;
    right: 45px;
  }
`;
