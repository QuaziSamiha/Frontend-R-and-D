"use client";
import { postAPI } from "@/api/api";
import { useEffect, useState } from "react";

// const AUTH_URL = "http://192.168.0.169:8800/auth-ws/oauth2/token";

export const useAuth = () => {
  const [authData, setAuthData] = useState(null);
  const [loading, setIsLoading] = useState<boolean>(true);
  //   const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAuthData = async () => {
      try {
        const formData = new FormData();
        formData.append("username", "samiha");
        formData.append("password", "ati123");
        formData.append("grant_type", "password");
        formData.append("scope", "profile");
        console.log("FormData Entries:");
        for (const pair of formData.entries()) {
          console.log(pair[0], pair[1]);
        }
        const response = await postAPI("auth-ws/oauth2/token", formData);
        console.log(response);
        setAuthData(response);
      } catch (error) {
        // setError('Failed to auth token')
        console.log("failed to auth token");
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchAuthData();
  }, []);

  return { authData, loading };
};

// http://192.168.0.29:8800/auth-ws/oauth2/token
