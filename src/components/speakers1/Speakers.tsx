import React, { useState, useEffect } from "react";
import { fetchData } from "../../services/api";
import { Congress, Speaker } from "../../hooks/getSpeakers";
// import $ from "./Speakers.module.scss";

const Speakers: React.FC = () => {
  const [speakers, setSpeakers] = useState<Speaker[]>([]);

  useEffect(() => {
    const fetchSpeakersData = async () => {
      try {
        const data = await fetchData();

        const newCongresses = Object.entries(data)
          .map(([, value]) => value)
          .filter(isCongress)
          .map((congress) => congress as Congress);

        const newSpeakers = newCongresses.flatMap((congress) =>
          congress.speakers.filter(isSpeaker)
        );

        setSpeakers(newSpeakers);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchSpeakersData();
  }, []);

  const isCongress = (value: unknown): value is Congress => {
    return (value as Congress).date !== undefined;
  };

  const isSpeaker = (value: unknown): value is Speaker => {
    return (value as Speaker).name !== undefined;
  };

  return (
    <div>
      <h1>Speakers</h1>
      <ul>
        {speakers.length > 0 &&
          speakers.map((speaker, index) => <p key={index}>{speaker.name}</p>)}
      </ul>
    </div>
  );
};

export default Speakers;
