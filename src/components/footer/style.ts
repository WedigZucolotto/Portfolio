import styled from "styled-components";

export const Footer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Ubuntu", sans-serif;
  font-style: light;
  color: #cbcbcb;

  span {
    width: 100%;
    height: 0.5px;
    background-color: #43454d;
    position: relative;
    bottom: 50px;
  }

  .container {
    display: flex;
  }

  .company-name {
    width: 500px;
    position: relative;
    left: -350px;
    bottom: 25px;
  }

  p {
    font-size: 18px;
  }

  .social-medias {
    display: flex;
    gap: 30px;
    position: relative;
    right: -350px;
    bottom: 25px;
  }

  a {
    text-decoration: none;
    font-family: "Inter", sans-serif;
    font-size: 18px;
    color: #ffffff;
  }
`;
