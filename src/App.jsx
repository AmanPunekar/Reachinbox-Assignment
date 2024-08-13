import React from "react";
import Reachinbox from "./assets/Reachinbox.svg";

function App() {
  const handleGoogleLogin = () => {
    // Redirecting the user to the Google login API URL
    window.location.href = 'https://hiring.reachinbox.xyz/api/v1/auth/google-login?redirect_to=https://frontend.com';
  };

  return (
    <>
      <div className="font-sans flex flex-col min-h-screen">
        <header className="bg-black border-b border-gray-800 w-full m-0 flex justify-center items-center h-16">
          <img src={Reachinbox} alt="logo" />
        </header>

        <main className="font-sans flex-grow flex justify-center items-center bg-black">
          <div className="flex-col bg-custom-bg border border-gray-700 h-auto pt-6 pb-8 w-log flex justify-center items-center rounded-2xl">
            <h2 className="text-xl font-semibold text-white mb-6 text-center">
              Create a new account
            </h2>
            <button
              onClick={handleGoogleLogin}
              className="h-12 w-5/6 font-normal flex justify-center items-center px-4 mb-12 border border-gray-500 rounded text-base text-gray-300 bg-bg-sign hover:bg-gray-950"
            >
              <img
                src="src/assets/google.png"
                alt="Google"
                className="mr-2 h-6"
              />
              Sign Up with Google
            </button>

            <div className="flex justify-center">
              <button className="text-gray-50 text-sm w-48 h-12 px-8 bg-custom-gradient rounded font-semibold mb-4">
                Create an Account
              </button>
            </div>
            <div className="mt-3 text-center">
              <p className="text-gray-400 font-normal text-base mb-1">
                Already have an account?
                <span className="text-gray-300 ml-1">Sign In</span>
              </p>
            </div>
          </div>
        </main>

        <footer className="bg-bottomfoot font-normal text-colorbtm w-full m-0 flex justify-center items-center h-8 text-xs">
          © 2023 Reachinbox. All rights reserved.
        </footer>
      </div>
    </>
  );
}

export default App;
