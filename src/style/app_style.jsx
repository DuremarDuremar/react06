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
`;

export const Content = styled.div`
  max-width: 1366px;
  height: 100vh;
  background-color: #8b4513;
  padding: 0 5px;
  display: flex;
  flex-direction: column;
`;

export const List = styled.section`
  flex: 0 0 75%;
  background-color: #deb887;
  overflow-y: scroll;
`;
export const Info = styled.section`
  flex: 0 0 25%;
  background-color: #d2b48c;
`;

export const Item = styled.ul`
  display: flex;
  padding: 5px;
  cursor: pointer;
  transition: 0.25s ease-in-out all;
  color: ${(props) => (props.active ? "#fff" : "black")};
  font-weight: ${(props) => (props.active ? "700" : "500")};
  &:not(:first-child) {
    border-top: 1px solid #8b4513;
  }
  &:first-child {
    border-top: 6px solid #8b4513;
  }

  li {
    &:nth-child(1) {
      flex: 0 0 10%;
    }
    &:nth-child(2) {
      flex: 0 0 20%;
    }
    &:nth-child(3) {
      flex: 0 0 20%;
    }
    &:nth-child(4) {
      flex: 0 0 32%;
    }
    &:nth-child(5) {
      flex: 0 0 18%;
    }
  }
  &:hover {
    background-color: #fff;
  }
`;

export const InfoItem = styled.div``;
