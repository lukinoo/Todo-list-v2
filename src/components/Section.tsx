import React from "react";
import { StyledSection, StyledUl } from "./styledComponents/Section.styled";
import { TodoConfig } from "../App";
import Todo from "./Todo";

interface Props {
  todos: TodoConfig[];
  deleteHandler(index: number): void;
  doneHandler(index: number): void;
}

const Section: React.FC<Props> = ({ todos, deleteHandler, doneHandler }) => {
  return (
    <StyledSection>
      <StyledUl>
        {todos.map((todo) => {
          return (
            <Todo
              key={todo.id}
              todo={todo}
              deleteHandler={deleteHandler}
              doneHandler={doneHandler}
            />
          );
        })}
      </StyledUl>
    </StyledSection>
  );
};

export default Section;
