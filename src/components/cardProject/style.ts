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
    padding-top: 8px;
    padding-bottom: 8px;
  }

  .technologies > p {
    width: 335px;
  }

  .desc {
    display: flex;
    flex-direction: column;
    border-top: 1px solid #ffffff;
    height: 153px;
  }

  .desc > h2 {
    color: #ffffff;
    font-weight: 400;
  }
`;
