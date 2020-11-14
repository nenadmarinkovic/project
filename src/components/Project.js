import React from "react";
import { Centered, CenteredText } from "../styles/About";
import { Wrap, Text, SmallerText } from "../styles/Project";

function Project() {
  return (
    <Wrap>
      <Centered>Project by:</Centered>
      <Text>
        <CenteredText>Avuteq</CenteredText>
        <SmallerText>
          Senior and Leadership level talent acquisition for the world's leading
          technology platforms
        </SmallerText>
      </Text>
    </Wrap>
  );
}

export default Project;
