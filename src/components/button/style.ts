import styled from "styled-components";

export const StyledButton = styled.button`
  background-color: transparent;
  border: none;
  color: white;
  padding: 15px 25px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 24px;
  margin: 30px 2px;
  cursor: pointer;
  transition: color 0.4s ease;

  &:hover,
  &.active,
  &:focus {
    color: #12f7d6;
  }
`;
