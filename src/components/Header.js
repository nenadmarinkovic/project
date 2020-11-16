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
          <span>Diversify</span>
        </Logo>
        <MenuContainer>
          <MenuItem>
            <ScrollIntoView selector="#benefits" smooth={true}>
            Explore the benefits
            </ScrollIntoView>
          </MenuItem>
          <MenuItem>
            <ScrollIntoView selector="#options" smooth={true}>
            Get connected
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
