export interface Congress {
  days: number;
  date: string[];
  title: string;
  link: string;
  venue: string;
  price: number;
  color: Color;
  attendees: Attendees;
  mc: Mc[];
  talks: Talk[];
  speakers: Speaker[];
}

interface Attendees {
  count: number;
  countries: number[];
}

export interface Speaker {
  name: string;
  link: string;
  avatar: string;
  country: string;
  day: string;
  talks: Talk[];
  edition: Edition;
  title: string;
  speaker: Speaker[];
  slides: string;
  description: string;
  video: string;
}

export interface Mc {
  name: string;
  link: string;
  avatar: string;
  day: unknown[];
}

export interface Talk {
  title: string;
  slides: string;
  description: string;
  video: Video;
  speaker: Speaker[];
}

export interface Video {
  ["youtube-link"]: string;
  vimeo: {
    id: string;
    link: string;
  };
  thumbnail: string;
  views: number;
  likes: number;
}

export interface Edition {
  date: string;
  title: string;
  venue: string;
  link: string;
  year: number;
  color: Color;
}

export interface Color {
  name: string;
  hex: string;
}
