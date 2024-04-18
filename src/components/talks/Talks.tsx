import React, { useState, useEffect } from "react";
import { fetchData } from "../../services/api";
import { Congress, Talk } from "../../hooks/getSpeakers";
// import $ from "./Talks.module.scss";

const Talks: React.FC = () => {
  const [talk, setTalk] = useState<Talk[]>([]);

  useEffect(() => {
    const fetchSpeakersData = async () => {
      try {
        const data = await fetchData();

        const newCongresses = Object.entries(data)
          .map(([, value]) => value)
          .filter(isCongress)
          .map((congress) => congress as Congress);

        const newTalk = newCongresses.flatMap((congress) =>
          congress.talks.filter(isTalk)
        );

        setTalk(newTalk);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchSpeakersData();
  }, []);

  const isCongress = (value: unknown): value is Congress => {
    return (value as Congress).date !== undefined;
  };

  const isTalk = (value: unknown): value is Talk => {
    return (value as Talk).title !== undefined;
  };

  return (
    <div>
      <h1>Talks</h1>
      <ul>
        {talk.length > 0 &&
          talk.map((talk, index) => <p key={index}>{talk.title}</p>)}
      </ul>
    </div>
  );
};

export default Talks;
