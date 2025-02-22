"use client";
import { useGetAPI } from "@/hooks/useAPI";
import React from "react";

const TaxSetup = () => {
  const { data, isLoading, error } = useGetAPI(
    ["users"],
    "public/randomusers?page=1&limit=10"
  );
  console.log(data);
  console.log(isLoading);
  console.log(error);
  return <div></div>;
};

export default TaxSetup;
