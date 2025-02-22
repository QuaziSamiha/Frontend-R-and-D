"use client";

import axios from "axios";

const api = axios.create({
  baseURL: "https://api.freeapi.app/api/v1/",
});

export const getAPI = async (endPoint: string, token?: string) => {
  console.log(token);
  const { data } = await api.get(endPoint);
  return data?.data;
};
