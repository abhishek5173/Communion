import React from "react";
import {Link} from "react-router-dom";
const Home = () => {
  return (
    <div className="sm:h-[calc(100vh-56px)] h-screen flex flex-col bg-gray-700/25">

      <main className="flex-grow flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 text-green-600">
          Connecting People Across Faiths & Interests
        </h1>
        <p className="text-xl max-w-2xl mb-8">
          Connecting people of all faiths through events and community support.
        </p>
        <Link
          to="/events"
          className="px-8 py-4 bg-white text-green-600 font-semibold text-lg rounded-full shadow-lg hover:scale-105 transition-transform duration-300"
        >
          Explore Events
        </Link>
      </main>

      <footer className="text-sm opacity-70 p-4 text-center">
        Empowering communities, one click at a time.
      </footer>
    </div>
  );
};

export default Home;
