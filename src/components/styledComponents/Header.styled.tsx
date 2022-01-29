import styled from "styled-components";

export const StyledHeader = styled.header`
  min-height: 12vh;
  background: #191921;
  display: flex;
  justify-content: space-around;
  align-items: center;
  h2 {
    font-family: "Lobster", cursive;
    font-size: 2rem;
  }
`;

export const StyledDarkMode = styled.div`
  width: 40px;
  height: 20px;
  display: flex;
  align-items: center;
  border-radius: 30px;
  border: 1px solid #ddd;
  cursor: pointer;
  &.dark-active {
    justify-content: flex-end;
  }
`;

export const StyledBall = styled.span`
  width: 18px;
  height: 18px;
  display: inline-block;
  background: #fff;
  border-radius: 50%;
`;
