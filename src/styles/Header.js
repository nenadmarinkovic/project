import styled from "styled-components";

export const FlexContainer = styled.div`
  padding-top: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: black;
  padding-bottom: 15px;
`;

export const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
  display: flex;
  align-items: center;
`;

export const Circle = styled.div`
  height: 20px;
  width: 20px;
  background-color: #e34949;
  border-radius: 50%;
  display: inline-block;
  margin-right: 10px;
`;

export const MenuContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const MenuItem = styled.div`
  margin-left: 30px;
  font-size: 16px;
  font-weight: bold;
  transition: .3s;
  :hover {
    color: #e34949;
    cursor: pointer;
  }
`;
