import axios from 'axios';
import { ApiResponse } from '../types';

const accessKey = 'OHOPDgBQRMppZE8e88nrsRsTmHMjI6JjkrLEVmWJX8E';

export const fetchQuery = async (
  query: string,
  page: number
): Promise<ApiResponse> => {
  const { data } = await axios.get<ApiResponse>(
    `https://api.unsplash.com/search/photos/?client_id=${accessKey}&query=${query}&page=${page}&per_page=24`
  );
  return data;
};
