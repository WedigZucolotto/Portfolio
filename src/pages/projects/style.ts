import styled from "styled-components";

export const Projects = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;

  .title {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 40px;
  }

  .title > img {
    width: 40px;
  }

  .title > h1 {
    font-family: "Ubuntu", sans-serif;
    font-weight: 400;
    font-size: 64px;
    margin-top: 15px;
    color: #12f7d6;
  }

  .complete-apps {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
  }

  .complete-apps > h2 {
    font-family: "Fira Code", monospace;
    font-weight: 400;
    font-size: 32px;
    color: white;
  }

  .hashtag {
    color: #12f7d6;
  }
`;
