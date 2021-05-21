import styled from "styled-components";

export const ContentHeader = styled.section`
  flex: 0 0 75%;
  background-color: #00223e;
  overflow-y: hidden;
  display: flex;
  flex-direction: column;
  padding: 5px 0;
  height: 100%;
`;

export const Search = styled.div`
  flex: 0 0 15%;
  background: linear-gradient(to right, #f2c94c, #f2994a);
  position: relative;
`;

export const Form = styled.form`
  input {
    position: absolute;
    top: 20px;
    left: 150px;
    height: 30px;
    font-size: 15px;
    font-style: italic;
    padding-left: 5px;
    border-radius: 5px;
    &::placeholder {
      color: rgb(112, 128, 144, 0.5);
    }
  }
`;

export const Options = styled.div`
  width: 40px;
  height: 35px;
  text-align: center;
  cursor: pointer;
  position: relative;

  i {
    position: relative;
    z-index: 3;
    background-color: #f2c94c;
    border-radius: 50%;
  }
  ul {
    transition: 0.75s ease-in-out all;
    background-color: rgb(0, 34, 62, 0.7);
    transform: ${(props) =>
      props.menu ? "translateY(-10px)" : "translateY(-110px)"};
    z-index: 1;
    left: 4px;
    width: 130px;
    height: 70px;
    position: absolute;
    border-radius: 10px;
    li {
      opacity: ${(props) => (props.menu ? "1" : "0")};
      color: #fff;
      font-style: italic;
      :hover {
        color: #708090;
        background-color: #fff;
      }
    }
  }
`;

export const Logo = styled.div`
  width: 100px;
  height: 35px;
  position: relative;
  bottom: 11px;
  opacity: 0.7;
  img {
    width: 100%;
  }
`;

export const List = styled.div`
  flex: 0 0 75%;
  background: linear-gradient(to bottom, #ffa17f, #00223e);
`;

export const Pagination = styled.ul`
  flex: 0 0 10%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  background: #00223e;
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
    height: 50px;
    z-index: 2;
    position: relative;
    li {
      text-transform: capitalize;
    }
  }
`;

export const ItemLi = styled.li`
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
  p {
    color: ${(props) => (props.change ? "#fff" : "black")};
    cursor: pointer;
    :hover i {
      opacity: 1;
    }
    i {
      transition: 0.55s ease-in-out all;
      opacity: 0;
    }
  }
`;
