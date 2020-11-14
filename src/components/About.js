import React from "react";

import {
  Wrap,
  SVG,
  AboutContainer,
  CenteredText,
  SubText,
} from "../styles/About";

function About() {
  return (
    <>
      <SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#E8E9E8"
          fill-opacity="1"
          d="M0,224L80,234.7C160,245,320,267,480,272C640,277,800,267,960,245.3C1120,224,1280,192,1360,176L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
        ></path>
      </SVG>
      <Wrap>
        <div className="container">
          <AboutContainer>
            <CenteredText>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum.
            </CenteredText>
            <SubText>- AVUTEQ TEAM -</SubText>
          </AboutContainer>
        </div>
      </Wrap>
    </>
  );
}

export default About;
