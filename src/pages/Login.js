import React from "react";
import { Link } from "react-router-dom";
import horse2 from "../assets/images/horse2.jpg";
import Lottie from "lottie-react";
import horse1 from "../assets/horse1.json";

const Login = () => {
  return (
    <div className="w-full h-full lg:flex">
      <div
        style={{
          background: `url(${horse2})`,
        }}
        class=" mt-10 mb-10 w-full max-w-sm p-6 m-auto mx-auto bg-white rounded-lg shadow-md dark:bg-gray-800"
      >
        <div class="flex justify-center mx-auto">
          <h1 className="text-white font-bold text-3xl">Log In</h1>
        </div>

        <form class="mt-6">
          <div>
            <label
              for="email"
              class="block text-sm font-bold text-gray-800 dark:text-gray-200"
            >
              Email
            </label>
            <input
              type="text"
              class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>

          <div class="mt-4">
            <div class="flex items-center justify-between">
              <label
                for="password"
                class="block text-sm font-bold text-gray-800 dark:text-gray-100"
              >
                Password
              </label>
              <Link
                to="/"
                class="text-xs text-gray-600 font-bold dark:text-gray-100 hover:underline"
              >
                Forget Password?
              </Link>
            </div>

            <input
              type="password"
              class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>

          <div class="mt-6 z-[-10]">
            <button class="w-full px-6 py-2.5 text-sm font-medium tracking-wide font-bold text-white capitalize transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50">
              Log In
            </button>
          </div>
        </form>

        <div class="flex items-center justify-between mt-4">
          <span class="w-1/5 border-b dark:border-gray-300 lg:w-1/5"></span>

          <Link
            to="/"
            class="text-xs text-center text-gray-500 uppercase dark:text-gray-100 hover:underline"
          >
            Continue as Guest
          </Link>

          <span class="w-1/5 border-b dark:border-gray-300 lg:w-1/5"></span>
        </div>

        <div class="flex items-center mt-6 -mx-2">
          <button
            type="button"
            class="flex items-center justify-center w-full px-6 py-2 mx-2 text-sm font-medium text-white transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:bg-blue-400 focus:outline-none"
          >
            <svg class="w-4 h-4 mx-2 fill-current" viewBox="0 0 24 24">
              <path d="M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.345-7.574 7.439-7.574c2.33 0 3.891.989 4.785 1.849l3.254-3.138C18.189 1.186 15.479 0 12.24 0c-6.635 0-12 5.365-12 12s5.365 12 12 12c6.926 0 11.52-4.869 11.52-11.726 0-.788-.085-1.39-.189-1.989H12.24z"></path>
            </svg>

            <span class="hidden mx-2 sm:inline">Log in with Google</span>
          </button>

          <Link
            to="/"
            class="p-2 mx-2 text-sm font-medium text-gray-500 transition-colors duration-300 transform bg-gray-300 rounded-lg hover:bg-gray-200"
          >
            <svg
              style={{ color: "blue" }}
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-facebook"
              viewBox="0 0 16 16"
            >
              {" "}
              <path
                d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"
                fill="blue"
              ></path>{" "}
            </svg>
          </Link>
        </div>

        <p class="mt-8 text-xs font-light text-center text-gray-200">
          {" "}
          Don't have an account?{" "}
          <Link
            to="/register"
            class="font-medium text-gray-700 dark:text-gray-200 font-bold hover:underline"
          >
            Create One
          </Link>
        </p>
      </div>
      <div className="flex items-center mt-0 justify-center h-70 w-80 ">
        <Lottie  animationData={horse1} loop={true}></Lottie>
      </div>
    </div>
  );
};

export default Login;
