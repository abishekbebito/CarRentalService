import React, { useState } from "react";
import { cars } from "./Cardata";
export default function BookingDetails({ id, name, sourcefile, amount }) {
  let [cartItems, setCartItems] = useState([]);
  const onAdd = (products) => {};
  return (
    <div>
      <h1>hello this is the booking place</h1>
    </div>
  );
}
