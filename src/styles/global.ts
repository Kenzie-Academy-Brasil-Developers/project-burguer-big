import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
  --color-primary: #27ae60;
  --color-primary-50: #93d7af;
  --color-secundary: #eb5757;
  --color-grey-100: #333333;
  --color-grey-50: #828282;
  --color-grey-20: #E0E0E0;
  --color-grey-10: #F5F5F5;
  --color-grey-0: #ffff;

  --color-alert-negative:#E60000;
  --color-alert-warning:#FFCD07;
  --color-alert-sucess:#168821;
  --color-alert-information:#155BCB;
}

button {
    cursor: pointer;
    border: 0;
    background: transparent;
  }
  
  ul,
  ol,
  li {
    list-style: none;
  }
`;

