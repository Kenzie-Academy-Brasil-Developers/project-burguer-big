import styled from "styled-components";

export const StyledCart = styled.section`
  width: 100vw;
  height: 100vh;
  position: absolute;
  background-color: var(--color-grey-10);
`;

export const StyledDiv = styled.div`
  width: 90%;
  padding: 10px;
  max-width: 500px;
  max-height: 371px;
  margin: 50px auto;
  background-color: var(--color-grey-0);

  div {
    padding: 10px;
    display: flex;
    justify-content: space-between;
    color: var(--color-grey-0);
    background-color: var(--color-primary);
  }

  button {
    color: var(--color-grey-0);
  }

  ul {
    width: 90%;
    height: 260px;
    overflow: auto;
    scrollbar-width: initial;
  }

  li {
    width: 100%;
    height: 80px;
    border-radius: 4px;
    display: flex;
    justify-content: space-between;

    div {
      width: 100%;
      color: black;
      background-color: var(--color-grey-0);
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 20px;

      img {
        width: 75px;
        height: 75px;
        border-radius: 4px 4px 0 0;
        display: flex;
        align-items: center;
        background-color: var(--color-grey-10);
        margin: 0 auto;
        object-fit: cover;
      }
    }

    /* div {
      width: 100%;
      color: black;
      background-color: var(--color-grey-0);
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 20px;

      img {
        width: 75px;
        height: 75px;
        border-radius: 4px 4px 0 0;
        display: flex;
        align-items: center;
        background-color: var(--color-grey-10);
        margin: 0 auto;
        object-fit: cover;
      }

      button {
        img {
          width: 20px;
          height: 20px;
        }
      }
    } */
  }
`;
