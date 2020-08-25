import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 75px;
  height: 75px;
  border-radius: 100%;
  transition: all 0.2s;
  background-color: ${(props) => props.background && props.theme.colors[props.background]};
  background: ${(props) => props.gradient && props.theme.colors[props.gradient]};
  border: ${(props) =>
    props.isEnhancebled ? `2px solid ${props.theme.colors.lightGrey}` : "none"};
  box-shadow: ${(props) => props.shadow && props.theme.shadows[props.shadow]};

  ${(props) => {
    return (
      props.clickable &&
      `
  cursor: pointer;
  transition: all 0.2s;
  &:hover {
    transform: scale(1.1);
  }
  &:active {
    transform: scale(0.9);
  }
  `
    );
  }}
`;
