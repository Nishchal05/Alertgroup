"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react"; // Import signIn for Google

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const router = useRouter();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await res.json();
      
      // Check if the user was created successfully
      if (res.status === 201) {
        router.push("/");
        console.log(data.message)
      } else {
        setError(data.message);
      }
    } catch (error) {
      console.error("Error during signup:", error);
      setError("Failed to sign up.");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-5 border border-gray-200 shadow-md rounded-md">
      <h2 className="text-2xl font-bold mb-5">Sign Up</h2>
      {error && <p className="text-red-500">{error}</p>}
      <form onSubmit={handleSignup}>
        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md text-black"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md text-black"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md text-black"
            required
          />
        </div>
        <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded-md">
          Sign Up
        </button>
      </form>

      <div className="mt-5">
        <button
          className="w-full p-2 bg-red-500 text-white rounded-md"
          onClick={() => signIn("google", { callbackUrl: "/" })}
        >
          Sign Up with Google
        </button>
      </div>
    </div>
  );
};

export default Signup;
