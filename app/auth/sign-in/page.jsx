"use client"; // Mark this as a client component
import { toast } from "sonner";
import { signIn } from "next-auth/react";
import React, { useState } from "react";
import { Loader } from "lucide-react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function SignIn() {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [loading, setloading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    setloading(true);
    const result = await signIn("credentials", {
      redirect: false,
      email: data.email,
      password: data.password,
    });

    if (result.error) {
      toast(result.error);
      setloading(false);
    } else {
      toast("Login successful!");
      setloading(false);
      router.push("/");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-black via-gray-900 to-gray-800 px-4">
      <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg p-8 shadow-xl rounded-lg max-w-md w-full border border-gray-700">
        <h1 className="text-3xl font-extrabold text-center text-white mb-6">
          Welcome Back
        </h1>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <input
              name="email"
              type="email"
              placeholder="Email"
              value={data.email}
              onChange={(e) => setData({ ...data, email: e.target.value })}
              className="w-full px-4 py-2 bg-gray-900 text-white border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <div className="mb-6">
            <input
              name="password"
              type="password"
              placeholder="Password"
              value={data.password}
              onChange={(e) => setData({ ...data, password: e.target.value })}
              className="w-full px-4 py-2 bg-gray-900 text-white border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 px-4 rounded-md hover:scale-105 transition-transform shadow-lg flex justify-center items-center"
          >
            {loading && <Loader className="animate-spin mr-2" />} Login
          </button>
        </form>
        <p className="text-center text-gray-400 mt-4">
          Don't have an account?{" "}
          <Link href="/auth/sign-up" className="text-blue-500 hover:underline">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}
