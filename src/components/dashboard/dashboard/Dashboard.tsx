"use client";

// import { useState } from "react";
// import { getUsers } from "@/api/users";
import { getUserInfo } from "@/services/auth.service";
// import { toast } from "react-toastify";
export default function Dashboard() {
  const { email } = (getUserInfo() as { email?: string }) || {};
  console.log(email)
  // const [loading, setLoading] = useState(false);

  // const fetchUsers = async () => {
  //   setLoading(true);
  //   try {
  //     const users = await getUsers();
  //     toast.success("Users fetched successfully!");
  //     console.log(users);
  //   } catch (error) {
  //     toast.error("Failed to fetch users!");
  //     console.error(error);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  return (
    <div className="h-screen flex flex-col gap-6 justify-center items-center">
      <p className="underline text-5xl font-bold text-sky-900">
        Dashboard page
      </p>
    </div>
  );
}
