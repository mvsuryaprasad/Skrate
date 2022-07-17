import { useState, useEffect, createContext } from "react";
import Content from "../Components/Content";
import "../Components/components.css";

export const Appcontext = createContext();

export function Dasboard() {
  const [data, setdata] = useState([]);

  useEffect(() => {
    fetch("https://mocki.io/v1/bb11aecd-ba61-44b9-9e2c-beabc442d818")
      .then((response) => response.json())
      .then((d) => setdata(d));
  }, []);

  console.log(data);
  return (
    <div className="dasboard">
      <div>
        <center className="name">
          <h1>{data.full_name}</h1>
        </center>
      </div>
      <div className="dasboard-profile">
        <div className="profile">
          <div className="heading">Profile Views</div>
          <div className="heading-content">
            {data.dashboard_stats.profile_views}
          </div>
        </div>

        <div className="profile">
          <div className="heading">Mentorship Sessions</div>
          <div className="heading-content">
            {data.dashboard_stats.mentorship_sessions}
          </div>
        </div>

        <div className="profile">
          <div className="heading">Jobs Applied</div>
          <div className="heading-content">
            {data.dashboard_stats.jobs_applied}
          </div>
        </div>

        <div className="profile">
          <div className="heading">Skills Verified</div>
          <div className="heading-content">
            {data.dashboard_stats.skills_verified}
          </div>
        </div>
      </div>
      <Appcontext.Provider value={{ data, setdata }}>
        <Content></Content>
      </Appcontext.Provider>
    </div>
  );
}
