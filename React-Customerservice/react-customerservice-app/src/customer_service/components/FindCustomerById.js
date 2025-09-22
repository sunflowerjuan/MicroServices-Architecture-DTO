import React, { useState } from "react";
import { CustomerService } from "../CustomerService";
import { Panel } from "primereact/panel";

function FindCustomerById() {
  const service = new CustomerService();
  const [id, setId] = useState("");
  const [customer, setCustomer] = useState(null);
  const [msg, setMsg] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    if (!id) {
      setMsg("⚠️ Ingrese un ID válido.");
      return;
    }
    service
      .getById(id)
      .then((data) => {
        setCustomer(data);
        setMsg("");
      })
      .catch(() => {
        setCustomer(null);
        setMsg("❌ Cliente no encontrado.");
      });
  };

  return (
    <Panel
      header="Buscar Cliente por ID"
      style={{ width: "80%", margin: "20px auto" }}
      toggleable
    >
      <form onSubmit={handleSearch}>
        <label htmlFor="id">Ingrese ID del Cliente:</label>
        <input
          type="number"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
        <p></p>
        <button type="submit">Buscar</button>
      </form>

      {msg && <p>{msg}</p>}

      {customer && (
        <div style={{ marginTop: "20px" }}>
          <h3>Datos del Cliente</h3>
          <p><b>ID:</b> {customer.id}</p>
          <p><b>Nombre:</b> {customer.firstName} {customer.lastName}</p>
          <p><b>Dirección:</b> {customer.address}</p>
        </div>
      )}
    </Panel>
  );
}

export default FindCustomerById;
