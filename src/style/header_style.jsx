import styled from "styled-components";

export const ContentHeader = styled.section`
  flex: 0 0 75%;
  background-color: #deb887;
  overflow-y: hidden;
  display: flex;
  flex-direction: column;
  padding: 5px 0;
  height: 100%;
`;

export const Search = styled.div`
  flex: 0 0 15%;
`;

export const Options = styled.div`
  width: 40px;
  min-height: 40px;
  background-color: #708090;
  text-align: center;
  cursor: pointer;
  position: relative;

  i {
    position: relative;
    z-index: 1;
  }
  ul {
    transition: 0.75s ease-in-out all;
    background-color: #708090;
    transform: ${(props) =>
      props.menu ? "translateY(-110px)" : "translateY(0)"};
    z-index: 0;
    width: 130px;
    height: 70px;
    position: absolute;
    li {
      opacity: ${(props) => (props.menu ? "0" : "1")};
      color: #fff;
      :hover {
        color: #708090;
        background-color: #fff;
      }
    }
  }
`;

export const List = styled.div`
  flex: 0 0 75%;
`;

export const Pagination = styled.ul`
  flex: 0 0 10%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

export const PagLi = styled.li`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background-color: ${(props) => (props.active ? "#fff" : "#f0e68c")};
  text-align: center;
  cursor: pointer;
  transition: 0.15s ease-in-out all;
  font-style: italic;
  &:not(:last-child) {
    margin-right: 5px;
  }
  :hover {
    border: 1px solid #fff;
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
