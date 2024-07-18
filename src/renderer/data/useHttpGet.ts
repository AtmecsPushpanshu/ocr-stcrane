import { useQuery, UseQueryResult } from '@tanstack/react-query';

import axiosInstance from './axiosInstance';

const useHttpGet = <T>(url: string): UseQueryResult<T, Error> => {
  return useQuery<T, Error>({
    queryKey: [url],
    queryFn: async () => {
      const { data } = await axiosInstance.get<T>(url);
      return data;
    },
  });
};

export default useHttpGet;
