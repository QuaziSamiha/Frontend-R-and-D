"use client";

import { getAPI, postAPI } from "@/api/api";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export const useGetAPI = (key: string[], endPoint: string, token?: string) => {
  return useQuery({
    queryKey: key,
    queryFn: () => getAPI(endPoint, token),
  });
};

export const usePostAPI = (key: string[], endPoint: string, token?: string) => {
  const queryclient = useQueryClient();
  return useMutation({
    mutationFn: (payload: unknown) => postAPI(endPoint, payload, token),
    onSuccess: () => {
      queryclient.invalidateQueries({ queryKey: key });
    },
  });
};
