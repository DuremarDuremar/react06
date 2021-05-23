import React from "react";
import styled, { keyframes } from "styled-components";

const rotate = (rev) => keyframes`
 from {
    -webkit-transform: rotate(0);
    transform: rotate(0);
  }
  to {
    -webkit-transform: rotate( ${rev ? "-360deg" : "360deg"});
    transform: rotate(${rev ? "-360deg" : "360deg"});
  }
`;

export const IdsCss = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;
export const IdsDoubleRing = styled.div`
  position: relative;
  width: calc(77px + 10vw);
  height: calc(77px + 10vw);
  -webkit-transform: translate(-38.5px, -38.5px) scale(0.385)
    translate(38.5px, 38.5px);
  transform: translate(-38.5px, -38.5px) scale(0.385) translate(38.5px, 38.5px);
  div {
    position: absolute;
    width: calc(160px + 10vw);
    height: calc(160px + 10vw);
    top: 20px;
    left: 20px;
    border-radius: 50%;
    border: 8px solid #000;
    border-color: #00bc8c transparent #00bc8c transparent;
    -webkit-animation: ${rotate()} 1.5s linear infinite;
    animation: ${rotate()} 1.5s linear infinite;
    :nth-child(2) {
      width: calc(140px + 10vw);
      height: calc(140px + 10vw);
      top: 30px;
      left: 30px;
      border-color: transparent #fff transparent #fff;
      -webkit-animation: ${rotate("reverse")} 1.5s linear infinite;
      animation: ${rotate("reverse")} 1.5s linear infinite;
    }
  }
`;

const Spinner = () => {
  return (
    <IdsCss>
      <IdsDoubleRing>
        <div></div>
        <div></div>
      </IdsDoubleRing>
    </IdsCss>
  );
};

export default Spinner;
