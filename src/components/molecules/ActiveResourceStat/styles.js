import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  cursor: pointer;
  transition: all 0.2s;
  &:hover span {
    color: ${(props) => props.theme.colors.regularPurple};
  }
  &:hover > div {
    background: ${(props) => props.theme.colors.white};
  }
  &:active > div {
    background: ${(props) => props.theme.colors.lightGrey};
  }

  .ActiveResourceStat-texts {
    position: absolute;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    > span {
      color: ${(props) => props.theme.colors.white};
    }
    > span:first-child {
      font-size: ${(props) => props.theme.fontSizes.extra};
      font-weight: ${(props) => props.theme.fontWeight.bold};
    }
    > span:last-child {
      margin-top: 5px;
      font-size: ${(props) => props.theme.fontSizes.small};
    }
  }
`;
