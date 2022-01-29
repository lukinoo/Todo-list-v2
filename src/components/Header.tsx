import React from "react";
import {
  StyledHeader,
  StyledDarkMode,
  StyledBall,
} from "./styledComponents/Header.styled";

interface Props {
  darkModeHandler(): void;
  darkMode: boolean;
}

const Header: React.FC<Props> = ({ darkMode, darkModeHandler }) => {
  const darkModeButtonActive = darkMode ? "dark-active" : "";

  return (
    <StyledHeader>
      <h2>Todo list</h2>
      <StyledDarkMode
        className={`${darkModeButtonActive}`}
        onClick={() => darkModeHandler()}
      >
        <StyledBall />
      </StyledDarkMode>
    </StyledHeader>
  );
};

export default Header;
