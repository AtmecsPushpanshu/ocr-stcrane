// hooks/useHttpPost.ts
import { useMutation, UseMutationResult } from '@tanstack/react-query';
import axiosInstance from './axiosInstance';

type UseHttpPostResult<T> = UseMutationResult<T, Error, any>;

const useHttpPost = <T>(
  url: string,
  mutationKey: string,
): UseHttpPostResult<T> => {
  return useMutation<T, Error, any>(
    [mutationKey],
    async (requestData) => {
      const { data } = await axiosInstance.post<T>(url, requestData);
      return data;
    },
    {
      onError: (error: Error) => {
        console.error('POST Error:', error);
      },
    },
  );
};

export default useHttpPost;
