import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 0 200px;
  margin-top: 15px;

  img{
    cursor: pointer;
  }

  .logo-nav-container {
    display: flex;
    width: 100%;
    justify-content: space-between;
  }

  span {
    width: 100%;
    height: 0.5px;
    background-color: #43454d;
    margin-top: 20px;
  }

  nav {
    display: flex;
    width: 60%;
  }

  nav > button:last-child {
    margin-left: auto;
    padding-right: 0;
  }

  button {
    font-family: "IBM Plex Mono", monospace;
  }
`;
