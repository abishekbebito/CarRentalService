import "./App.css";
import { React, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import { cars } from "./frontend/Cardata";
import { CarCards } from "./frontend/CarCards";
function App() {
  return (
    <Container>
      <h1>Cars Available</h1>
      <div className=" d-flex gap-5">
        {cars.map((car) => {
          return (
            <CarCards
              key={car.id}
              id={car.id}
              name={car.name}
              sourcefile={car.sourcefile}
              amount={car.amount}
            />
          );
        })}
      </div>
    </Container>
  );
}

export default App;
