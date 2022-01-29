import styled from "styled-components";

export const StyledForm = styled.form`
  min-height: 12vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const formStyles: string = `
    font-size: 1rem;
    color: #111;
    border: 1px solid #ddd;
    background: #fff;
    &:focus {
        outline: none;
    }
`;

export const StyledInput = styled.input`
  ${formStyles}
  padding: 0.5rem 1rem;
`;

export const StyledButton = styled.button`
  ${formStyles}
  padding: 0.5rem 1rem;
  font-size: 0.9rem;
  background: #ddd;
  cursor: pointer;
`;
