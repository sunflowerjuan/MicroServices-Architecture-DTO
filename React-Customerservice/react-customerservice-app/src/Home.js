import React from "react";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import "primeflex/primeflex.css";

function Home() {
  const header = (
    <img
      alt="customers"
      src="https://www.primefaces.org/cdn/primereact/images/usercard.png"
      style={{ width: "100%", borderTopLeftRadius: "12px", borderTopRightRadius: "12px" }}
    />
  );

  return (
    <div className="flex align-items-center justify-content-center h-screen bg-gray-100">
      <Card
        title="React Customer Service"
        subTitle="Bienvenido 👋"
        header={header}
        className="shadow-3"
        style={{ width: "400px", borderRadius: "12px" }}
      >
        <p className="m-0 text-center">
          Esta es una aplicación para gestionar clientes con React + Spring Boot.
          Explora el menú para ver y registrar clientes .
        </p>
      </Card>
    </div>
  );
}

export default Home;
