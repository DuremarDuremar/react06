import React, { useState } from "react";
import { Modal, Form, Label } from "../style/inputs_style";

const Inputs = ({ modal, setModal }) => {
  const [dop, setDop] = useState(false);

  console.log(dop);

  return (
    <Modal onClick={() => setModal(false)} modal={modal}>
      <Form onClick={(e) => e.stopPropagation()}>
        <Label htmlFor="id">
          <input type="number" id="id" />
          <p>id</p>
        </Label>

        <Label htmlFor="firstName">
          <input type="text" id="firstName" />
          <p>firstName</p>
        </Label>

        <Label htmlFor="lastName">
          <input type="text" id="lastName" />
          <p>lastName</p>
        </Label>

        <Label htmlFor="email">
          <input type="email" id="email" />
          <p>email</p>
        </Label>

        <Label htmlFor="phone">
          <input type="tel" id="phone" />
          <p>phone</p>
        </Label>

        {dop && (
          <>
            <Label htmlFor="streetAddress">
              <input type="text" id="streetAddress" />
              <p>street</p>
            </Label>

            <Label htmlFor="city">
              <input type="text" id="city" />
              <p>city</p>
            </Label>

            <Label htmlFor="state">
              <input type="text" id="state" />
              <p>state</p>
            </Label>

            <Label htmlFor="zip">
              <input type="number" id="zip" />
              <p>zip</p>
            </Label>

            <Label htmlFor="description">
              <input type="text" id="description" />
              <p>description</p>
            </Label>
          </>
        )}

        <i
          className={dop ? "fas fa-caret-up fa-2x" : "fas fa-caret-down fa-2x"}
          onClick={() => setDop(!dop)}
        ></i>
        <button>add</button>
      </Form>
    </Modal>
  );
};

export default Inputs;
