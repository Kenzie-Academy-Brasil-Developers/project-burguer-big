import styled from "styled-components";

export const Button = styled.button`
  border-radius: 8px;
  border: none;
`;

export const GreenButton = styled(Button)`
  width: 106px;
  height: 40px;
  color: var(--color-grey-0);
  background-color: var(--color-primary);
`;

export const BigGreenButton = styled(Button)`
  width: 100%;
  height: 60px;
  color: var(--color-grey-0);
  background-color: var(--color-primary);
`;

export const GreyButton = styled(Button)`
  width: 100%;
  height: 60px;
  color: var(--color-grey-50);
  background-color: var(--color-grey-20);
`;
