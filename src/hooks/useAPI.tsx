"use client";
// import { postAPI } from "@/api/api";
// import { useMutation, useQueryClient } from "@tanstack/react-query";

import { getAPI } from "@/api/api";
import { useQuery } from "@tanstack/react-query";

// export const usePostAPI = (key: string[], endPoint: string, token?: string) => {
//   const queryclient = useQueryClient();
//   return useMutation({
//     mutationFn: (payload: unknown) => postAPI(endPoint, payload, token),
//     onSuccess: () => {
//       queryclient.invalidateQueries({ queryKey: key });
//     },
//   });
// };

export const useGetAPI = (key: string[], endPoint: string, token?: string) => {
  return useQuery({
    queryKey: key,
    queryFn: () => getAPI(endPoint, token),
  });
};
