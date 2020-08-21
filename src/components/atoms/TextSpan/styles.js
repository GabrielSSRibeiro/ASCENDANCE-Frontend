import styled from "styled-components";

export const Container = styled.div`
  font-size: ${(props) => props.theme.textSizes[props.size]};
  color: ${(props) => props.theme.colors[props.color]};
`;
