import styled from "styled-components";

export const StyledSection = styled.section`
  width: 90%;
  padding: 10px;
  margin:  50px auto 0;
  display: flex;
  flex-direction: column;
  align-items: left;
  gap: 20px;

  form {
    border: 1px solid var(--color-grey-50);
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: left;
    gap: 20px;
  }

  fieldset {
    margin-top: 15px;
    padding: 10px 5px;
    display: flex;
    flex-direction: column;
    gap: 5px;
    border: 1px solid var(--color-grey-50);
    border-radius: 4px;
  }

  input {
    border: none;
  }

  button {
    width: 100%;
    border: 1px solid var(--color-grey-50);
    border-radius: 4px;
  }
`;
