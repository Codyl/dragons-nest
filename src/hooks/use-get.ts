import { useQuery } from '@tanstack/react-query';
import axios from '../api/config';

export const useGet = (endpoint: string) => {
  return useQuery({
    queryFn: async () => {
      const { data } = await axios.get(endpoint);
      return data;
    },
    onSuccess(data) {
      console.log('succeeded');
    },
    onError(error) {
      console.error(error);
    },
  });
};
