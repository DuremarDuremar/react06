import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Modal, Form, Label } from "../style/inputs_style";

const Inputs = ({ modal, setModal, items, setItems }) => {
  const [dop, setDop] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  console.log(errors);

  const addItem = (newItem) => {
    const tel = (n) => {
      let newPhone = [...n];
      newPhone = [
        "(",
        ...newPhone.slice(0, 3),
        ")",
        ...newPhone.slice(3, 6),
        "-",
        ...newPhone.slice(6),
      ];
      return newPhone.join("");
    };

    const item = {
      address: {
        city: newItem.city || "_",
        state: newItem.state || "_",
        streetAddress: newItem.street || "_",
        zip: newItem.zip || "_",
      },
      description: newItem.description || " ",
      email: newItem.email,
      firstName: newItem.firstName,
      lastName: newItem.lastName,
      phone: tel(newItem.phone),
      id: newItem.id,
    };
    setItems([item, ...items]);
  };

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
          addItem(data);
          reset();
        })}
      >
        <Label htmlFor="id" alert={errors.id ? 1 : 0}>
          <input
            type="number"
            id="id"
            {...register("id", { required: true, minLength: 3 })}
          />
          <p>id</p>
        </Label>

        <Label htmlFor="firstName" alert={errors.firstName ? 1 : 0}>
          <input
            type="text"
            id="firstName"
            {...register("firstName", { required: true, minLength: 3 })}
          />
          <p>firstName</p>
        </Label>

        <Label htmlFor="lastName" alert={errors.lastName ? 1 : 0}>
          <input
            type="text"
            id="lastName"
            {...register("lastName", { required: true, minLength: 3 })}
          />
          <p>lastName</p>
        </Label>

        <Label htmlFor="email" alert={errors.email ? 1 : 0}>
          <input
            type="email"
            id="email"
            {...register("email", { required: true })}
          />
          <p>email</p>
        </Label>

        <Label htmlFor="phone" alert={errors.phone ? 1 : 0}>
          <input
            type="number"
            id="phone"
            {...register("phone", { required: true, minLength: 10 })}
          />
          <p>phone (minimum Length 10)</p>
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
