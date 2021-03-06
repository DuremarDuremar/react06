import styled from "styled-components";

export const Modal = styled.div`
  display: ${(props) => (props.modal ? "flex" : "none")};
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  overflow: hidden;
  background-color: rgb(192, 192, 192, 0.85);
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 7;
`;

export const Form = styled.form`
  width: 250px;
  min-height: 320px;
  border-radius: 12%;
  background-color: #deb887;
  cursor: default;
  padding: 30px 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  position: relative;
  z-index: 3;
  button {
    color: MintCream;
    background-color: #708090;
    width: 50px;
    height: 30px;
    border-radius: 15%;
  }
  i {
    cursor: pointer;
    margin-bottom: 20px;
  }
`;

export const Label = styled.label`
  background-color: #deb887;
  flex: 1 1 auto;

  &:not(:last-child) {
    padding-bottom: 8px;
  }
  p {
    /* color: #708090; */
    color: ${(props) => (props.alert ? "red" : "#708090")};
    text-align: center;
    font-size: 12px;
  }

  input {
    border: ${(props) => props.alert && "1px solid red"};
    font-size: 15px;
    height: 20px;
  }
`;
