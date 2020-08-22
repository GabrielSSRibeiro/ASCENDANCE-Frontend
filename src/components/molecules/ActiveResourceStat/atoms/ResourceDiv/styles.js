import styled from "styled-components";

export const Container = styled.div`
  width: 176px;
  height: 48px;
  border-radius: ${(props) => props.border};
  border: none;
  background: ${(props) =>
    props.isEmpty ? props.theme.colors.darkGrey : props.theme.colors[props.background]};
  cursor: pointer;
`;
