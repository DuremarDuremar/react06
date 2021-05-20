import styled from "styled-components";

export const ContentFooter = styled.section`
  flex: 0 0 25%;
  display: flex;
  background-color: #d2b48c;
  height: 100%;
`;

export const Add = styled.div`
  background-color: #f0e68c;
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
  background-color: #d2b48c;
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
