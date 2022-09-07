import React from "react";
import { gql, useQuery } from "@apollo/client";
import MissionsGridPage from "../MissionsGridPage/MissionsGridPage";
import Logo from "../../assets/logo.png";

const GET_MISSIONS = gql`
  {
    launchesPast {
      links {
        flickr_images
      }
      rocket {
        rocket {
          id
        }
      }
      id
      mission_name
      launch_success
    }
  }
`;

const Missions = () => {
  const { data, loading, error } = useQuery(GET_MISSIONS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const missions = data.launchesPast.filter(
    (mission) => mission.links.flickr_images.length > 0
  );

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <img src={Logo} width={300} />
      </div>

      <div style={{ marginTop: "5rem" }}>
        <MissionsGridPage missions={missions} />
      </div>
    </div>
  );
};

export default Missions;
