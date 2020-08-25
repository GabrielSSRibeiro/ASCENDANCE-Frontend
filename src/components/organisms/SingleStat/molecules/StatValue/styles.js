import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  > div:last-child {
    height: 50px;
    margin-top: -14px;
    position: absolute;
    pointer-events: none;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    > span {
      color: ${(props) => props.theme.colors.white};
    }
    > span:first-child {
      font-size: ${(props) => props.theme.fontSizes.extra};
    }
    > span:last-child {
      margin-top: 5px;
      font-size: ${(props) => props.theme.fontSizes.small};
    }
  }
`;
