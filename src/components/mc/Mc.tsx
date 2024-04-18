import React, { useState, useEffect } from "react";
import { fetchData } from "../../services/api";
import { Congress, Mc } from "../../hooks/getSpeakers";
// import $ from "./Mc.module.scss";

const Mcs: React.FC = () => {
  const [mc, setMc] = useState<Mc[]>([]);

  useEffect(() => {
    const fetchSpeakersData = async () => {
      try {
        const data = await fetchData();

        const newCongresses = Object.entries(data)
          .map(([, value]) => value)
          .filter(isCongress)
          .map((congress) => congress as Congress);

        const newMc = newCongresses.flatMap((congress) =>
          congress.mc.filter(isMc)
        );

        setMc(newMc);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchSpeakersData();
  }, []);

  const isCongress = (value: unknown): value is Congress => {
    return (value as Congress).date !== undefined;
  };

  const isMc = (value: unknown): value is Mc => {
    return (value as Mc).name !== undefined;
  };

  return (
    <div>
      <h1>MC</h1>
      <ul>
        {mc.length > 0 && mc.map((mc, index) => <p key={index}>{mc.name}</p>)}
      </ul>
    </div>
  );
};

export default Mcs;
