import { useMutation, UseMutationResult } from '@tanstack/react-query';
import axiosInstance from './axiosInstance';

type UseHttpPutResult<T> = UseMutationResult<T, Error, any>;

const useHttpPut = <T>(url: string): UseHttpPutResult<T> => {
    return useMutation<T, Error, any>(
        async (requestData) => {
            const { data } = await axiosInstance.put<T>(url, requestData);
            return data;
        },
        {
            onError: (error: Error) => {
                console.error('PUT Error:', error);
            },
            onSuccess: () => {
                // Optionally, you can invalidate queries or perform other actions on success
            },
        }
    );
};

export default useHttpPut;
