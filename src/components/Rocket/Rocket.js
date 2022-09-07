import React from "react";
import { useParams } from "react-router-dom";
import { gql, useQuery } from "@apollo/client";
import RocketDetails from "../RocketDetails/RocketDetails";

const GET_ROCKET_INFO = gql`
  query GET_ROCKET_INFO($rocketId: ID!) {
    rocket(id: $rocketId) {
      name
      description
      diameter {
        meters
      }
      height {
        meters
      }
      mass {
        kg
      }
      stages
      cost_per_launch
      engines {
        type
        number
      }
      country
      first_flight
      wikipedia
    }
  }
`;

const Rocket = () => {
  const rocket = useParams();
  const rocketId = rocket.id;
  console.log(rocketId);

  const { data, loading, error } = useQuery(GET_ROCKET_INFO, {
    variables: { rocketId },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  console.log(data);

  return (
    <RocketDetails rocket={{ ...data.rocket, id: rocketId }}></RocketDetails>
  );
};

export default Rocket;
