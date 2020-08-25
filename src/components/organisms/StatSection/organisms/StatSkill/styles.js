import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 225px;
  height: 450px;

  > div:first-child {
    width: 100%;
    height: 100%;
    position: absolute;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }

  > div:last-child {
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;

    > div {
      margin: 0 20px;
    }
  }
`;
