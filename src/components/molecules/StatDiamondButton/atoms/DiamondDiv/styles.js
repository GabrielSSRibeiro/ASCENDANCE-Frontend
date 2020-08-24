import styled from "styled-components";

export const Container = styled.div`
  width: 75px;
  height: 75px;
  transform: rotate(45deg);
  border-radius: 5px;
  background-color: ${(props) => props.theme.colors.regularPurple};

  box-shadow: ${(props) => props.theme.shadows.dark};
  cursor: pointer;
`;
