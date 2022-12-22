import styled from "styled-components";

export const StyledSection = styled.section`
  width: 90%;
  padding: 10px;
  margin: 30px auto 0;
  display: flex;
  flex-direction: column;
  align-items: left;
  gap: 20px;


  form {
    border: 1px groove #ddd ;
    -webkit-box-shadow: 0px 0px 0px 0px #000;
    box-shadow: 0px 0px 0px 0px #000;
    border-radius: 4px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: left;
    gap: 20px;

    div {
      display: flex;
      justify-content: space-between;
    }
  }

  fieldset {
    padding: 5px;
    height: 60px;
    margin: 0 0 1.5em 0 ;
    border: 1px groove #ddd ;
    -webkit-box-shadow: 0px 0px 0px 0px #000;
    box-shadow: 0px 0px 0px 0px #000;
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
  
  input {
    border: none;
    outline: none;
  }

  span {
    color: var(--color-grey-50);
    text-align: center;
  }
  
  @media (min-width: 700px) {
    max-width: 500px;
  }
`;
