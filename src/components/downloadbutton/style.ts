import styled from "styled-components";

export const StyledDownloadButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  padding: 10px;
  height: 65px;
  width: 230px;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: #a4a4a4;
  }

  p {
    background-color: transparent;
    color: #000000;
    font-family: "Ubuntu", sans-serif;
    font-size: 20px;
    margin-right: 20px;
  }

  img {
    background-color: transparent;
    position: relative;
    bottom: 3px;
  }
`;
