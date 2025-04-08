export const getBaseUrl = (): string => {
  return process.env.NEXT_PUBLIC_API_BASE_URL || "http://192.168.0.223:3333/buygenix-ips-backend/api/v1";
  // return process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3332/nest-b-auth/api/v1";
};
