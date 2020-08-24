import styled from "styled-components";

export const Container = styled.div`
  width: 25px;
  height: 25px;
  transform: rotate(45deg);
  border-radius: 3px;
  background-color: ${(props) => props.background && props.theme.colors[props.background]};
  background: ${(props) => props.gradient && props.theme.colors[props.gradient]};
  box-shadow: ${(props) => props.shadow && props.theme.shadows[props.shadow]};
  cursor: pointer;
`;
