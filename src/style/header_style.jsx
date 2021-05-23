import styled from "styled-components";

export const ContentHeader = styled.section`
  flex: 0 0 75%;
  background-color: #00223e;
  /* overflow-x: hidden; */
  display: flex;
  flex-direction: column;
  padding: 5px 0;
  height: 100%;
`;

export const Search = styled.div`
  flex: 0 0 15%;
  background: linear-gradient(to right, #f2c94c, #f2994a);
  /* position: relative; */
  display: flex;
  justify-content: space-between;
`;

export const Left = styled.div`
  position: relative;
  flex: 0 0 38%;
  width: 100%;
`;

export const Form = styled.form`
  input {
    position: absolute;
    top: 20px;
    left: ${(props) => (props.res700 ? "150px" : "100px")};
    height: 30px;
    font-size: 15px;
    font-style: italic;
    padding-left: 5px;
    border-radius: 5px;
    z-index: ${(props) => !props.res700 && "4"};
    background-color: rgb(201, 214, 255);
    opacity: ${(props) => (!props.res700 ? "0.7" : "0.9")};

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
    z-index: 5;
    background-color: #f2c94c;
    border-radius: 50%;
  }
  ul {
    transition: 0.75s ease-in-out all;
    background-color: rgb(0, 34, 62, 0.7);
    transform: ${(props) =>
      props.menu ? "translateY(-10px)" : "translateY(-110px)"};
    z-index: 4;
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
  /* bottom: 11px; */
  opacity: 0.7;
  img {
    width: 100%;
  }
`;

export const Title = styled.div`
  flex: ${(props) => (props.res1000 ? "0 0 32%" : "1 1 auto")};

  ${(props) =>
    !props.res700 &&
    `
      margin-right: auto;
      margin-left: 0;
      max-width: 220px;
      overflow: hidden;
      `}
  div {
    font-family: "Open Sans";
    z-index: 3;
    transform: rotate(-10deg) skew(-20deg);
    position: relative;
    text-align: center;
    margin: 0px auto;
    h1 {
      -webkit-text-stroke: 2px #f4c6f4;
      color: #00223e;
      font-size: ${(props) =>
        !props.error ? "calc(70px + 1vw)" : "calc(50px + 1vw)"};
    }
    span {
      top: ${(props) =>
        !props.error ? "calc(20px + 1vw)" : "calc(55px + 1.5vw)"};
      /* left: calc(10px + 1.6vw); */
      right: ${(props) => props.error && "calc(20px + 1vw)"};
      position: absolute;
      -webkit-text-stroke: 2px #00223e;
      color: #f4c6f4;
      font-size: ${(props) =>
        !props.error ? "calc(75px + 1vw)" : "calc(25px + 1vw)"};
    }
  }
`;

export const Range = styled.div`
  flex: 1 1 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 120px;
  height: 100%;
  position: relative;
  left: ${(props) => props.res700 && "75px"};
  bottom: ${(props) => !props.res1000 && "32px"};
  z-index: ${(props) => props.res700 && "3"};
  /* z-index: 3; */
  input {
    outline: 0;
    border: 0;
    position: absolute;
    transform: ${(props) =>
      props.res1000 ? "translateX(-50%)" : "translateX(0)"};
    left: 50%;
    width: 80px;
    max-width: 100%;
    cursor: pointer;
    font-style: italic;
    font-size: 12px;
    :after {
      content: "min";
      width: 10px;
      height: 10px;
      position: absolute;
      left: 3px;
      top: 3px;
    }
    :before {
      content: "max";
      width: 10px;
      height: 10px;
      position: absolute;
      right: 18px;
      top: 3px;
    }

    &::-webkit-slider-runnable-track {
      height: 20px;
      -webkit-appearance: none;
      background-color: #f2b14b;
      box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
    }
    &::-webkit-slider-thumb {
      -webkit-appearance: none;
      cursor: pointer;
      transform: scale(3);
      position: relative;
      z-index: 1;
    }
  }
`;

export const Pagination = styled.ul`
  flex: 0 0 10%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  background: #00223e;
  i {
    color: #f2b14b;
    padding-bottom: 15px;
    cursor: pointer;
  }
  .fa-angle-left {
    padding-right: 15px;
  }
  .fa-angle-right {
    padding-left: 15px;
  }
  .fa-angle-double-left {
    padding-right: 10px;
  }
  .fa-angle-double-right {
    padding-left: 10px;
  }
`;

export const PagLi = styled.li`
  display: ${(props) => props.none && "none"};
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background-color: ${(props) => (props.active ? "#fff" : "#f0e68c")};
  text-align: center;
  cursor: pointer;
  transition: 0.15s ease-in-out all;
  font-style: italic;
  margin-bottom: 20px;
  &:not(:last-child) {
    margin-right: 5px;
  }
  :hover {
    border: 1px solid #fff;
  }
`;

export const List = styled.div`
  flex: 0 0 75%;
  background: linear-gradient(to bottom, #ffa17f, #00223e);
  overflow-y: ${(props) => (props.res700 ? "hidden" : "scroll")};
  display: ${(props) => (props.res700 ? "block" : "grid")};
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px;
`;

export const Item = styled.ul`
  padding: 5px;
  transition: 0.25s ease-in-out all;
  text-align: center;
  overflow-x: auto;

  &:not(:first-child) {
    color: ${(props) => (props.active ? "#fff" : "black")};
    font-weight: ${(props) => (props.active ? "700" : "500")};
    border-top: 1px solid #8b4513;
    cursor: pointer;
    min-height: ${(props) => !props.res700 && "125px"};
    display: ${(props) => (props.res700 ? "flex" : "block")};
    &:hover {
      background-color: #c9d6ff;
    }
  }
  &:first-child {
    border-top: 6px solid #8b4513;
    font-size: 20px;
    font-style: italic;
    height: 50px;
    z-index: 2;
    position: relative;
    grid-column: span 2 / auto;
    display: flex;
    justify-content: ${(props) => !props.res700 && "space-around"};
    li {
      text-transform: capitalize;
      span {
      }
    }
  }
  li {
    ${(props) =>
      props.res700 &&
      `
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
  `}
  }
`;

export const ItemLi = styled.li`
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
