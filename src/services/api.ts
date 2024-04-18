import axios from "axios";
import { Congress } from "../hooks/getSpeakers";

const API_BASEURL = "https://cssday.nl/data.json";

const api = axios.create({
  baseURL: API_BASEURL,
});

export const fetchData = async (year: string): Promise<Congress[]> => {
  try {
    const response = await api.get("");
    const allData: Congress[] = Object.values(response.data);

    // Filter data for the specified year
    const filteredData = allData.filter((item) => {
      const itemYear = new Date(item.date[0]).getFullYear().toString();
      return itemYear === year;
    });

    return filteredData;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw new Error("Error fetching data");
  }
};
