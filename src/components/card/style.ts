import styled from "styled-components";

export const StyledCard = styled.div`
  width: 450px;
  height: 206px;
  background-color: #292c36;
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;

  .image-title-container {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    background-color: transparent;
  }

  img {
    border-radius: 5px;
    margin-right: 10px;
  }

  h4 {
    color: #ffffff;
    font-family: "Poppins", sans-serif;
    font-weight: 600;
    font-size: 24px;
    width: 180px;
    margin-left: 10px;
    background-color: transparent;
  }

  p {
    color: #b0adad;
    font-family: "Poppins", sans-serif;
    background-color: transparent;
  }
`;
