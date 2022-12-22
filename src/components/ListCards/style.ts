import styled from "styled-components";

export const StyledUl = styled.ul`
  width: 90%;
  overflow: auto;
  scrollbar-width: initial;
  margin: 30px auto;
  display: flex;
  justify-content: left;
  gap: 10px;

  li {
    min-width: 300px;
    height: 346px;
    border: 3px solid var(--color-grey-20);
    border-radius: 8px;
    display: flex;
    flex-direction: column;
  }

  @media (min-width: 700px) {
    max-width: 940px;
    max-height: 735px;
    flex-wrap: wrap;

    ::-webkit-scrollbar {
      width: 6px;
      height: 6px;
    }
  }
`;

export const StyledDivDescription = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 20px;

`;

export const StyledDivImg = styled.div`
  height: 150px;
  background-color: var(--color-grey-20);
  display: flex;
  align-items: center;

  img {
    width: 50%;
    margin: 0 auto;
    object-fit: cover;
  }
`;
