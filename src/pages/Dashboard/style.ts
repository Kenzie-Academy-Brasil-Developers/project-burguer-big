import styled from "styled-components";

export const StyledHeader = styled.header`
  width: 100vw;
  background-color: var(--color-grey-0);
  box-shadow: 5px 3px 3px var(--color-grey-20);

  section {
    width: 90%;
    padding: 10px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: 10px;

    div {
      display: flex;
      gap: 10px;
    }

    form {
      padding: 10px 15px;
      border-radius: 8px;
      display: flex;
      align-items: center;
      gap: 10px;
      background-color: var(--color-grey-10);

      input {
        background-color: var(--color-grey-10);
        border: none;
      }
    }
  }

  @media (min-width: 600px) {
    section {
      width: 90%;
      flex-direction: row;
      gap: 50px;
    }
  }
`;
