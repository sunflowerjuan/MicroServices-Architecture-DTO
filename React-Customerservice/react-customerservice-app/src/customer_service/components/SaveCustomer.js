import React, { useState, useRef } from "react";
import { CustomerService } from "../CustomerService";
import { Panel } from "primereact/panel";
import { Toast } from "primereact/toast";

function SaveCustomer() {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    address: "",
  });

  const toast = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const RegisterCustomer = (e) => {
    e.preventDefault();
    console.log("Enviando cliente:", values);

    new CustomerService()
      .saveCustomer(values)
      .then(() => {
        toast.current.show({
          severity: "success",
          summary: "Registro exitoso",
          detail: "El cliente fue guardado correctamente ✅",
          life: 3000,
        });

        // resetear formulario
        setValues({
          firstName: "",
          lastName: "",
          address: "",
        });
      })
      .catch((error) => {
        console.error(error);
        toast.current.show({
          severity: "error",
          summary: "Error",
          detail: "No se pudo guardar el cliente ❌",
          life: 3000,
        });
      });
  };

  return (
    <Panel
      header="React Customer App - Save customers"
      style={{ width: "80%", marginTop: "100px", margin: "0 auto" }}
      className="Panel1"
      toggleable
    >
      <Toast ref={toast} />

      <form onSubmit={RegisterCustomer}>
        <label htmlFor="firstName">First Name</label>
        <input
          name="firstName"
          type="text"
          onChange={handleChange}
          value={values.firstName}
          required
        />
        <p></p>

        <label htmlFor="lastName">Last Name</label>
        <input
          name="lastName"
          type="text"
          onChange={handleChange}
          value={values.lastName}
          required
        />
        <p></p>

        <label htmlFor="address">Address</label>
        <input
          name="address"
          type="text"
          onChange={handleChange}
          value={values.address}
          required
        />
        <p></p>

        <button type="submit">Registrar</button>
      </form>
    </Panel>
  );
}

export default SaveCustomer;
