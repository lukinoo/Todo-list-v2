import styled from "styled-components";

export const StyledTodo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 0.3rem;
  margin: 0.6rem 0rem;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  background: #fff;
  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  &.todo-active {
    text-decoration: line-through;
    opacity: 0.4;
    transform: scale(0.98);
  }
  &:hover {
    .done-button {
      background: #2eb82e;
    }
    .delete-button {
      background: #e60000;
    }
  }
`;

export const StyledLi = styled.li`
  flex: 1;
  color: #222;
`;

const globalButtonStyles: string = `
  padding: 0.5rem 1rem;
  border: none;
  background: #fff;
  font-size: 1rem;
  background: none;
  color: #fff;
  cursor: pointer;
`;

export const StyledDoneButton = styled.button`
  ${globalButtonStyles}
`;

export const StyledDeleteButton = styled.button`
  ${globalButtonStyles}
`;
