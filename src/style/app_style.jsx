import styled, { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`
* {
  padding: 0;
  margin: 0;
  border: 0;
  user-select: none;
}
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  
}
code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
}
a {
  text-decoration: none;
}
ul li {
  list-style: none;
}
button {
  outline: none;
  cursor: pointer;
}
input{
  outline: none;
}
    input[type="number"]::-webkit-outer-spin-button,
    input[type="number"]::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
`;

export const Content = styled.div`
  max-width: 1366px;
  height: 100vh;
  background-color: #8b4513;
  padding: 0 5px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  position: relative;
`;
