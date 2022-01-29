import {
  StyledForm,
  StyledInput,
  StyledButton,
} from "./styledComponents/Form.styled";
import { AiOutlinePlus } from "react-icons/ai";
import React from "react";

interface Props {
  input: string;
  inputHandler(input: string): void;
  todoHandler(e: React.FormEvent): void;
}

const Form: React.FC<Props> = ({ input, inputHandler, todoHandler }) => {
  return (
    <StyledForm
      onSubmit={(e: React.FormEvent<HTMLFormElement>) => todoHandler(e)}
    >
      <StyledInput
        type="text"
        value={input}
        onChange={(e: React.FormEvent<HTMLInputElement>) =>
          inputHandler(e.currentTarget.value)
        }
      />
      <StyledButton disabled={!input.trim()}>
        <AiOutlinePlus />
      </StyledButton>
    </StyledForm>
  );
};

export default Form;
