import styled from "styled-components";
import fon from "../images/fon.jpg";

export const ContentFooter = styled.section`
  flex: 0 0 25%;
  display: flex;
  background: linear-gradient(to top, #ffa17f, #00223e);
  height: 100%;
`;

export const Add = styled.div`
  /* background: linear-gradient(to top, #ffa17f, #00223e); */
  flex: 0 0 20%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(${fon});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 0;
  box-shadow: 0 0 16px 16px #00223e inset;
  border-top-left-radius: 30px;
  border-bottom-left-radius: 30px;

  button {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background-color: rgb(242, 153, 74, 0.5);
    color: #00223e;
    transition: 0.35s ease-in-out all;

    &:hover {
      background-color: rgb(242, 153, 74, 1);
    }
  }
`;

export const Info = styled.div`
  background: linear-gradient(to left, #f2c94c, #f2994a);
  border-top-right-radius: 50px;
  border-bottom-right-radius: 50px;
  flex: 0 0 80%;
  box-shadow: 78px 0 18px 10px #00223e inset;
`;

export const InfoItem = styled.ul`
  padding: 0 10px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;
