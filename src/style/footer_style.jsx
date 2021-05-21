import styled from "styled-components";
import fon from "../images/fon.jpg";

export const ContentFooter = styled.section`
  flex: 0 0 25%;
  display: flex;
  background: linear-gradient(to top, #ffa17f, #00223e);
  height: 100%;
`;

export const Add = styled.div`
  background: linear-gradient(to top, #ffa17f, #00223e);
  flex: 0 0 20%;
  display: flex;
  align-items: center;
  justify-content: center;
  button {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background-color: #c0c0c0;
    transition: 0.35s ease-in-out all;
    &:hover {
      background-color: #708090;
    }
  }
`;

export const Info = styled.div`
  background: linear-gradient(to left, #f2c94c, #f2994a);
  border-radius: 50px;
  flex: 0 0 80%;
`;

export const InfoItem = styled.ul`
  padding: 0 10px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;
