import React from "react";
import {
  FlexContainer,
  Logo,
  Circle,
  MenuContainer,
  MenuItem,
  MenuItemLink,
} from "../styles/Header";
import ScrollIntoView from "react-scroll-into-view";

function Header() {
  return (
    <div className="container">
      <FlexContainer>
        <Logo>
          <Circle />
          <span>Project</span>
        </Logo>
        <MenuContainer>
          <MenuItem>
            <ScrollIntoView selector="#benefits" smooth={true}>
              How can you benefit?
            </ScrollIntoView>
          </MenuItem>
          <MenuItem>
            <ScrollIntoView selector="#options" smooth={true}>
              Choose your option
            </ScrollIntoView>
          </MenuItem>
          <MenuItemLink
            href="https://avuteq.com"
            target="_blank"
            rel="noreferrer"
          >
            Project by Avuteq
          </MenuItemLink>
        </MenuContainer>
      </FlexContainer>
    </div>
  );
}

export default Header;
