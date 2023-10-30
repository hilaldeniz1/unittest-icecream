import React, { useEffect, useState } from "react";
import Card from "../Card";
import axios from "axios";

const Scoops = () => {
  const [scoopData, setScoopData] = useState([]);
  const [basket, setBaket] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3010/scoops")
      .then((res) => setScoopData(res.data));
  }, []);

  return (
    <div className="container my-5">
      <h1>Dondurma Çeşitleri</h1>
      <p>
        Tanesi: <span className="text-success">20 ₺</span>
      </p>
      <h3>
        Çeşitler Ücreti:{" "}
        <span className="text-success">{basket.length * 20} ₺</span>
      </h3>

      <div className="row gap-5 p-3 justify-content-between mt-3">
        {scoopData.map((i) => (
          <Card key={i.name} data={i} basket={basket} setBasket={setBaket} />
        ))}
      </div>
    </div>
  );
};

export default Scoops;
