import styled from "styled-components";

export const Wrap = styled.div`
  padding-top: 40px;
  padding-bottom: 20px;
`;

export const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const OptionWrap = styled.div`
  border-radius: 18px;
  border: 1px solid #eaeaea;
  margin: 20px;
  height: 410px;
  transition: 0.3s;
  text-align: center;

  :hover {
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
    cursor: pointer;
  }
`;

export const CenteredTitle = styled.div`
  text-align: center;
  padding: 30px 10px 10px;
  font-size: 33px;
  font-weight: bold;
`;

export const OptionItem = styled.div`
  width: 50%;
  transition: 0.5s;
`;

export const SVG = styled.svg`
  text-align: center;
  margin-right: 40px;
  margin-top: 15px;
  transition: 0.5s;
`;

export const SVGStartup = styled.svg`
  transition: 0.5s;
`;
