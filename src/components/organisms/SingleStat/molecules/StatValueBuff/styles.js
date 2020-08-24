import styled from "styled-components";

export const Container = styled.div`
  cursor: pointer;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  > div:nth-child(2) {
    position: absolute;
  }
`;
