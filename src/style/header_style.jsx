import styled from "styled-components";

export const ContentHeader = styled.section`
  flex: 0 0 75%;
  background-color: #deb887;
  overflow-y: scroll;
`;

export const List = styled.div``;

export const Pagination = styled.ul`
  display: flex;
  justify-content: center;
`;

export const PagLi = styled.li`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background-color: ${(props) => (props.active ? "#fff" : "#f0e68c")};
  text-align: center;
  cursor: pointer;
  &:not(:last-child) {
    margin-right: 5px;
  }
`;

export const Item = styled.ul`
  display: flex;
  padding: 5px;
  transition: 0.25s ease-in-out all;
  text-align: center;
  overflow-x: auto;
  min-width: 300px;
  &:not(:first-child) {
    color: ${(props) => (props.active ? "#fff" : "black")};
    font-weight: ${(props) => (props.active ? "700" : "500")};
    border-top: 1px solid #8b4513;
    cursor: pointer;
    &:hover {
      background-color: #fff;
    }
  }
  &:first-child {
    border-top: 6px solid #8b4513;
    font-size: 20px;
    font-style: italic;
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
`;
