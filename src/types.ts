export type Image = {
  id: string;
  urls: {
    small: string;
    regular: string;
  };
  user: {
    first_name: string;
    last_name: string;
  };
  description: string;
  likes: number;
};
export type ApiResponse = {
  results: Image[];
  total: number;
};

export type ModalData = {
  url: string;
  first_name: string;
  last_name: string;
  likes: number;
};
