import React from "react";
import {
  FlexContainer,
  Logo,
  Circle,
  MenuContainer,
  MenuItem,
  MenuItemLink,
} from "../styles/Header";

function Header() {
  return (
    <div className="container">
      <FlexContainer>
        <Logo>
          <Circle />
          <span>Project</span>
        </Logo>
        <MenuContainer>
          <MenuItem>How can you benefit?</MenuItem>
          <MenuItem>Choose your option</MenuItem>
          <MenuItemLink href="https://avuteq.com" target="_blank" rel="noreferrer">Project by Avuteq</MenuItemLink>
        </MenuContainer>
      </FlexContainer>
    </div>
  );
}

export default Header;
