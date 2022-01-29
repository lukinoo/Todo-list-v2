import styled from "styled-components";

export const StyledIntro = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background: #080808;
  z-index: 10;
  .intro-text {
    .text {
      font-size: 3rem;
      background: #080808;
      overflow: hidden;
      span {
        display: inline-block;
        color: #ffffff;
        transform: translateY(100%);
      }
    }
  }
  .intro-start-button {
    padding: 1rem 2rem;
    border: 1px solid #292935;
    background: none;
    font-size: 1.5rem;
    border-radius: 10px;
    color: #a6c0fe;
    font-weight: bold;
    cursor: pointer;
    &:active {
      transform: scale(0.98);
    }
  }
`;
