import axios from "axios"

const accessKey = 'OHOPDgBQRMppZE8e88nrsRsTmHMjI6JjkrLEVmWJX8E';

export const fetchQuery = async (query, page) => {
  const {data} = await axios.get(`https://api.unsplash.com/search/photos/?client_id=${accessKey}&query=${query}&page=${page}&per_page=24`);
  return data;
}
