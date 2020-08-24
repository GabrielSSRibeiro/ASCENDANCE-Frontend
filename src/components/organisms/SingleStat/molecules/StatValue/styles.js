import styled from "styled-components";

export const Container = styled.div`
  cursor: pointer;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  > div:last-child {
    height: 50px;
    margin-top: -14px;
    position: absolute;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    > div:last-child {
      margin-top: 5px;
    }
  }
`;
