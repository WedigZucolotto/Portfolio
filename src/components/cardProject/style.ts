import styled from "styled-components";

export const CardProject = styled.div`
  display: flex;
  flex-direction: column;
  width: 357px;
  border: 1px solid #ffffff;
  font-family: "Fira Code", monospace;

  p {
    color: #abb2bf;
  }

  .technologies {
    display: flex;
    align-items: center;
    justify-content: center;
    border-top: 1px solid #ffffff;
    border-bottom: 1px solid #ffffff;
    padding-top: 8px;
    padding-bottom: 8px;
  }

  .technologies > p {
    display: flex;
    align-items: center;
    width: 335px;
    height: 30px;
  }

  .desc {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    gap: 15px;
    margin-left: 20px;
    height: 153px;
  }

  .desc > h2 {
    color: #ffffff;
    font-weight: 500;
  }

  .button-projects{
    display: flex;
    gap: 20px;
  }
`;
