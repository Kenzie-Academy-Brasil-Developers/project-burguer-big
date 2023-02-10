import styled from "styled-components";

export const StyledLink = styled.div`
  width: 100%;
  height: 50px;
  background-color: var(--color-grey-0);
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 8px;
  padding: 5px 10px;

  h4 {
    color: var(--color-primary);
  }

  a {
    width: 40px;
    background-color: var(--color-grey-0);
    img {
      width: 35px;
    }
  }
`;
