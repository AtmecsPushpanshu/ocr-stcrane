import { useMutation, UseMutationResult } from '@tanstack/react-query';
import axiosInstance from './axiosInstance';

type UseHttpDeleteResult<T> = UseMutationResult<T, Error, any>;

const useHttpDelete = <T>(url: string): UseHttpDeleteResult<T> => {
    return useMutation<T, Error, any>(
        async () => {
            const { data } = await axiosInstance.delete<T>(url);
            return data;
        },
        {
            onError: (error: Error) => {
                console.error('DELETE Error:', error);
            },
            onSuccess: () => {
                // Optionally, you can invalidate queries or perform other actions on success
            },
        }
    );
};

export default useHttpDelete;
