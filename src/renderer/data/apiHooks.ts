import { useQuery, useMutation, useQueryClient, UseQueryOptions, UseMutationOptions, UseQueryResult } from '@tanstack/react-query';
import axiosInstance from './axiosInstance';

// Type definitions
interface Data {
  [key: string]: any;
}

interface Error {
  message: string;
}

// Hook for GET requests
export const useGetData = <T>(url: string): UseQueryResult<T, Error> => {
  return useQuery<T, Error>({
      queryKey: [url],
      queryFn: async () => {
          const { data } = await axiosInstance.get<T>(url);
          return data;
      },
  });
};

// Hook for POST requests
export const usePostData = <TData = Data, TVariables = void>(
  url: string,
  options?: UseMutationOptions<TData, Error, TVariables> & { mutationKey?: unknown }
) => {
  const queryClient = useQueryClient();
  return useMutation<TData, Error, TVariables>(
    {
      mutationKey: options?.mutationKey || ['postData'],
      mutationFn: async (variables: TVariables) => {
        const { data } = await axiosInstance.post<TData>(url, variables);
        return data;
      },
      ...options,
      onSuccess: () => {
        queryClient.invalidateQueries('fetchData'); // Adjust the query key as needed
        if (options?.onSuccess) options.onSuccess();
      },
    }
  );
};

// Hook for PUT requests
export const usePutData = <TData = Data, TVariables = void>(
  url: string,
  options?: UseMutationOptions<TData, Error, TVariables> & { mutationKey?: unknown }
) => {
  const queryClient = useQueryClient();
  return useMutation<TData, Error, TVariables>(
    {
      mutationKey: options?.mutationKey || ['putData'],
      mutationFn: async (variables: TVariables) => {
        const { data } = await axiosInstance.put<TData>(url, variables);
        return data;
      },
      ...options,
      onSuccess: () => {
        queryClient.invalidateQueries('fetchData'); // Adjust the query key as needed
        if (options?.onSuccess) options.onSuccess();
      },
    }
  );
};

// Hook for PATCH requests
export const usePatchData = <TData = Data, TVariables = void>(
  url: string,
  options?: UseMutationOptions<TData, Error, TVariables> & { mutationKey?: unknown }
) => {
  const queryClient = useQueryClient();
  return useMutation<TData, Error, TVariables>(
    {
      mutationKey: options?.mutationKey || ['patchData'],
      mutationFn: async (variables: TVariables) => {
        const { data } = await axiosInstance.patch<TData>(url, variables);
        return data;
      },
      ...options,
      onSuccess: () => {
        queryClient.invalidateQueries('fetchData'); // Adjust the query key as needed
        if (options?.onSuccess) options.onSuccess();
      },
    }
  );
};

// Hook for DELETE requests
export const useDeleteData = <TData = Data>(
  url: string,
  options?: UseMutationOptions<TData, Error, void> & { mutationKey?: unknown }
) => {
  const queryClient = useQueryClient();
  return useMutation<TData, Error, void>(
    {
      mutationKey: options?.mutationKey || ['deleteData'],
      mutationFn: async () => {
        const { data } = await axiosInstance.delete<TData>(url);
        return data;
      },
      ...options,
      onSuccess: () => {
        queryClient.invalidateQueries('fetchData'); // Adjust the query key as needed
        if (options?.onSuccess) options.onSuccess();
      },
    }
  );
};
