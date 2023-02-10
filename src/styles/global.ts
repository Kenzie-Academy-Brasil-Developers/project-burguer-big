import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    outline: 0;
  }

  :root {
  --color-primary: #db1020;
  --color-primary-50: #fd727d;
  --color-secundary: #ffd700;
  --color-grey-100: #333333;
  --color-grey-50: #828282;
  --color-grey-20: #E0E0E0;
  --color-grey-10: #f5f5f5b5;
  --color-grey-0: #ffffff;

  --color-alert-negative:#db1020;
  --color-alert-warning:#ffd700;
  --color-alert-sucess:#27742d;
  --color-alert-information:#155BCB;
}

body{
  position: relative;
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
