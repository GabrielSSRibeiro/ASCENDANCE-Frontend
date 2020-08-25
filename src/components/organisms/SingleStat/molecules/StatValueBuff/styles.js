import styled from "styled-components";

export const Container = styled.div`
  ${(props) => {
    return (
      props.isEnhancebled &&
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

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  > span {
    position: absolute;
    font-size: ${(props) => props.theme.fontSizes.extra};
    color: ${(props) => props.theme.colors.regularPurple};
  }
`;
