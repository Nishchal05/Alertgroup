"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { motion } from "framer-motion";
import Link from "next/link"; 
import { Loader } from "lucide-react"; 
import { toast } from "sonner";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const router = useRouter();

  const handleSignup = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await res.json();
      
      if (res.status === 201) {
        toast("Check Your Mail to Verify")
        router.push("/");
      } else {
        setError(data.message);
      }
    } catch (error) {
      setError("Failed to sign up.");
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-black via-gray-900 to-gray-800 px-4">
      <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg p-8 shadow-xl rounded-lg max-w-md w-full border border-gray-700">
        <h1 className="text-3xl font-extrabold text-center text-white mb-6">
          Join Us
        </h1>
        <button
          onClick={() => signIn("google")}
          className="w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white py-2 px-4 rounded-md hover:scale-105 transition-transform shadow-lg mb-4"
        >
          Sign Up with Google
        </button>

        <p className="text-center text-gray-400 mb-4">Or use your credentials</p>

        {error && (
          <p className="bg-red-500 text-white p-3 rounded-lg mb-5 text-center">
            {error}
          </p>
        )}

        <form onSubmit={handleSignup}>
          <div className="mb-4">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              required
              className="w-full px-4 py-2 bg-gray-900 text-white border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="w-full px-4 py-2 bg-gray-900 text-white border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <div className="mb-6">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
              className="w-full px-4 py-2 bg-gray-900 text-white border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 px-4 rounded-md hover:scale-105 transition-transform shadow-lg flex justify-center items-center"
          >
            {loading && <Loader className="animate-spin mr-2" />} Create Account
          </button>
        </form>

        <p className="text-center text-gray-400 mt-4">
          Already have an account?{" "}
          <Link href="/auth/sign-in" className="text-blue-500 hover:underline">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
