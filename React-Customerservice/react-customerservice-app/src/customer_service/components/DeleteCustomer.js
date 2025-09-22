import React, { useState, useEffect } from "react";
import { CustomerService } from "../CustomerService";
import { Panel } from "primereact/panel";

function DeleteCustomer() {
  const service = new CustomerService();
  const [customers, setCustomers] = useState([]);
  const [selectedId, setSelectedId] = useState("");
  const [msg, setMsg] = useState("");

  useEffect(() => {
    service.getAll().then((data) => setCustomers(data));
  }, []);

  const handleDelete = (e) => {
    e.preventDefault();
    if (!selectedId) {
      setMsg("Seleccione un cliente primero.");
      return;
    }
    service
      .deleteCustomer(selectedId)
      .then(() => {
        setMsg("✅ Cliente eliminado correctamente");
        setCustomers(customers.filter((c) => c.id !== parseInt(selectedId)));
        setSelectedId("");
      })
      .catch((err) => {
        console.error(err);
        setMsg("❌ Error al eliminar el cliente");
      });
  };

  return (
    <Panel
      header="Eliminar Cliente"
      style={{ width: "80%", margin: "20px auto" }}
      toggleable
    >
      <form onSubmit={handleDelete}>
        <label htmlFor="customer">Seleccione Cliente:</label>
        <select
          value={selectedId}
          onChange={(e) => setSelectedId(e.target.value)}
        >
          <option value="">-- Seleccionar --</option>
          {customers.map((c) => (
            <option key={c.id} value={c.id}>
              {c.firstName} {c.lastName} (ID: {c.id})
            </option>
          ))}
        </select>
        <p></p>
        <button type="submit">Eliminar</button>
      </form>
      {msg && <p>{msg}</p>}
    </Panel>
  );
}

export default DeleteCustomer;
