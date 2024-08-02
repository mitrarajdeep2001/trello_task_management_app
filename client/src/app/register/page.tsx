"use client";

import Link from "next/link";
import { useRouter } from "next/navigation"

import React, { useState } from "react";
import { VscEye, VscEyeClosed } from "react-icons/vsc";

const RegisterForm: React.FC = () => {
    const [togglePasswordView, setTogglePasswordView] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const router = useRouter();
    const signup = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/auth/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            password,
          }),
        });
        await response.json();
        router.push("/login");
      } catch (error) {
        console.log(error);
      }
    };

    const handleSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      signup();
    };
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-8 bg-white rounded shadow">
        <h1 className="text-2xl font-bold text-center">
          Welcome to <span className="text-purple-600">Workflow</span>!
        </h1>
        <form className="mt-8 space-y-6" onSubmit={handleSignUp}>
          <div>
            <label htmlFor="fullname" className="sr-only">
              Full name
            </label>
            <input
              id="fullname"
              name="fullname"
              type="fullname"
              autoComplete="fullname"
              required
              className="relative block w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-purple-500 focus:border-purple-500"
              placeholder="Your full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="email" className="sr-only">
              Email address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="relative block w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-purple-500 focus:border-purple-500"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex items-center justify-between px-3 py-2 border border-gray-300 rounded">
            <input
              id="password"
              name="password"
              type={togglePasswordView ? "text" : "password"}
              autoComplete="current-password"
              required
              className="relative block w-full  focus:outline-none focus:ring-purple-500 focus:border-purple-500"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {togglePasswordView ? (
              <VscEye
                color="gray"
                cursor={"pointer"}
                onClick={() => setTogglePasswordView(false)}
              />
            ) : (
              <VscEyeClosed
                color="gray"
                cursor={"pointer"}
                onClick={() => setTogglePasswordView(true)}
              />
            )}
          </div>
          <div>
            <button
              type="submit"
              className="relative flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-purple-600 border border-transparent rounded group hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
            >
              Sign up
            </button>
          </div>
          <div className="text-center">
            <p>
              Already have an account?{" "}
              <Link href="/login" className="text-purple-600">
                Log in.
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
