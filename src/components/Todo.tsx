import {
  StyledTodo,
  StyledLi,
  StyledDoneButton,
  StyledDeleteButton,
} from "./styledComponents/Todo.styled";
import { MdOutlineDownloadDone } from "react-icons/md";
import { BiTrashAlt } from "react-icons/bi";
import { TodoConfig } from "../App";

interface Props {
  todo: TodoConfig;
  deleteHandler(index: number): void;
  doneHandler(index: number): void;
}

const Todo: React.FC<Props> = ({ todo, deleteHandler, doneHandler }) => {
  const todoDoneCheck = todo.done ? "todo-active" : "";

  return (
    <StyledTodo
      style={{ borderLeft: `4px solid ${todo.color}` }}
      className={`todo ${todoDoneCheck}`}
    >
      <StyledLi>{todo.text}</StyledLi>
      <StyledDoneButton
        className="done-button"
        onClick={() => doneHandler(todo.id)}
      >
        <MdOutlineDownloadDone />
      </StyledDoneButton>
      <StyledDeleteButton
        className="delete-button"
        onClick={() => deleteHandler(todo.id)}
      >
        <BiTrashAlt />
      </StyledDeleteButton>
    </StyledTodo>
  );
};

export default Todo;
