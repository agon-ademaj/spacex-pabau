import React from "react";
import Logo from "../../assets/logo.png";

const RocketDetails = ({ rocket }) => {
  const {
    id,
    name,
    description,
    height,
    diameter,
    stages,
    const_per_launch,
    engines,
    country,
    first_flight,
    wikipedia,
  } = rocket;

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <img src={Logo} width={300} />
      </div>

      <div style={{ marginTop: "5rem" }}>
        <h1 style={{ color: "white", fontSize: "6rem" }}>{name}</h1>
        <h3>
          {country} | {first_flight}
        </h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default RocketDetails;
