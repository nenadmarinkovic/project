import styled from "styled-components";

export const BannerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const SVG = styled.svg`
  margin-top: 50px;
`;

export const Illustration = styled.div``;

export const Text = styled.div`
  width: 50%;
`;

export const Button = styled.button`
  background-color: #E34949;
  border: 2px solid #E34949;
  font-size: 14px;
  border-radius: 5px;
  font-weight: bold;
  color: white;
  margin-top: 25px;
  text-transform: uppercase;
  transition: .3s;
  padding: 15px;
  :hover {
    color: #e34949;
    background: white;
    cursor: pointer;
    border: 2px solid #E34949;
  }
`;

export const MainText = styled.div`
  font-size: 38px;
  font-weight: bold;
`;
export const SubText = styled.div`
  font-size: 18px;
  margin-top: 10px;
  line-height: 1.8;
  margin-top: 15px;
`;
