import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 75px;
  height: 75px;
  border-radius: 100%;
  cursor: pointer;
  transition: all 0.2s;
  background-color: ${(props) => props.theme.colors[props.background]};
  border: ${(props) =>
    props.isEnhancebled ? `2px solid ${props.theme.colors.lightGrey}` : "none"};
  box-shadow: ${(props) => props.shadow && props.theme.shadows[props.shadow]};
`;
