"use client";
import { signIn } from "next-auth/react";
import Image from "next/image";
function Login() {
  return (
    <div
      className="bg-[#11A37F] h-screen flex flex-col items-center justify-center
   text-center"
    >
      <Image
        src="https://links.papareact.com/2i6"
        width={300}
        height={300}
        alt="logo"
      />

      <button
        onClick={() => signIn("google")}
        className="relative px-5 py-3 overflow-hidden font-medium text-gray-600 bg-gray-100 border border-gray-100 rounded-lg shadow-inner group"
      >
        <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:w-full ease"></span>
        <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-600 group-hover:w-full ease"></span>
        <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
        <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
        <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-gray-900 opacity-0 group-hover:opacity-100"></span>
        <span className="relative transition-colors duration-300 delay-200 group-hover:text-white ease">
          Sign In to use ChatpGPT
        </span>
      </button>
    </div>
  );
}

export default Login;
