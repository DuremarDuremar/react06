import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Modal, Form, Label } from "../style/inputs_style";

const Inputs = ({ modal, setModal }) => {
  const [dop, setDop] = useState(false);
  const [newItem, setNewItem] = useState({});
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  console.log(newItem);

  return (
    <Modal
      onClick={() => {
        setModal(false);
        reset();
      }}
      modal={modal}
    >
      <Form
        onClick={(e) => e.stopPropagation()}
        onSubmit={handleSubmit((data) => {
          setNewItem(data);
          reset();
        })}
      >
        <Label htmlFor="id">
          <input
            type="number"
            id="id"
            {...register("id", { required: true })}
          />
          <p>id</p>
        </Label>

        <Label htmlFor="firstName">
          <input
            type="text"
            id="firstName"
            {...register("firstName", { required: true })}
          />
          <p>firstName</p>
        </Label>

        <Label htmlFor="lastName">
          <input
            type="text"
            id="lastName"
            {...register("lastName", { required: true })}
          />
          <p>lastName</p>
        </Label>

        <Label htmlFor="email">
          <input
            type="email"
            id="email"
            {...register("email", { required: true })}
          />
          <p>email</p>
        </Label>

        <Label htmlFor="phone">
          <input
            type="tel"
            id="phone"
            {...register("phone", { required: true })}
          />
          <p>phone</p>
        </Label>

        {dop && (
          <>
            <Label htmlFor="streetAddress">
              <input
                type="text"
                id="streetAddress"
                {...register("streetAddress")}
              />
              <p>street</p>
            </Label>

            <Label htmlFor="city">
              <input type="text" id="city" {...register("city")} />
              <p>city</p>
            </Label>

            <Label htmlFor="state">
              <input type="text" id="state" {...register("state")} />
              <p>state</p>
            </Label>

            <Label htmlFor="zip">
              <input type="number" id="zip" {...register("zip")} />
              <p>zip</p>
            </Label>

            <Label htmlFor="description">
              <input
                type="text"
                id="description"
                {...register("description")}
              />
              <p>description</p>
            </Label>
          </>
        )}

        <i
          className={dop ? "fas fa-caret-up fa-2x" : "fas fa-caret-down fa-2x"}
          onClick={() => setDop(!dop)}
        ></i>
        <button type="submit">add</button>
      </Form>
    </Modal>
  );
};

export default Inputs;
