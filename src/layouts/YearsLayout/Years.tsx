import { useEffect, useState } from "react";
import { Speaker, Talk } from "../../hooks/getSpeakers";
import { fetchData } from "../../services/api";
import { useParams } from "react-router-dom";
import $ from "./Years.module.scss";

const Years: React.FC = () => {
  const { year: yearParam } = useParams<{ year: string | undefined }>();
  const [speakers, setSpeakers] = useState<Speaker[]>([]);
  const [talks, setTalks] = useState<Talk[]>([]);

  const year = yearParam || "";

  useEffect(() => {
    const fetchSpeakersData = async () => {
      try {
        const data = await fetchData(year);
        const allSpeakers: Speaker[] = data.flatMap(
          (congress) => congress.speakers
        );
        console.log(data);
        const allTalks: Talk[] = data.flatMap((congress) => congress.talks);

        setSpeakers(allSpeakers);
        setTalks(allTalks);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchSpeakersData();
  }, [year]);

  const getTalksBySpeakerLink = (speakerLink: string): Talk[] => {
    if (!talks || talks.length === 0) return [];

    const talksBySpeaker = talks
      .filter((talk) =>
        talk.speaker.some((speaker) => speaker.link === speakerLink)
      )
      .flat();

    return talksBySpeaker;
  };

  return (
    <div className={$.wrapper}>
      {speakers.length > 0 &&
        speakers.map((speaker, index) => (
          <div key={index} className={$.speakerContainer}>
            <img className={$.img} src={speaker.avatar} alt={speaker.name} />
            <div className={$.speakerInfo}>
              <h2>{speaker.name}</h2>

              {getTalksBySpeakerLink(speaker.link).map((talk, talkIndex) => (
                <div key={talkIndex}>
                  <p>{talk.title}</p>
                  <p>{talk.video["youtube-link"]}</p>
                  {talk.video && (
                    <a
                      className={$.link}
                      href={talk.video["youtube-link"]}
                      target="_blank"
                    >
                      Video
                    </a>
                  )}
                  {talk.slides && (
                    <a className={$.link} href={talk.slides} target="_blank">
                      Slides
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
    </div>
  );
};

export default Years;
