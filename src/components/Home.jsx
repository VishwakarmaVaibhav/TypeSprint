import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "./ui/button";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white p-8">
      {/* Logo Animation */}
      <motion.h1
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-6xl font-bold text-blue-400 mb-8"
      >
        TypeSprint
      </motion.h1>

      {/* Get Started Button */}
      <Link to="/round1">
        <Button className="bg-blue-500 text-white px-6 py-3 text-lg rounded-lg shadow-lg hover:bg-blue-600 transition-all">
          GET STARTED 🚀
        </Button>
      </Link>

      {/* Project Description & Guide */}
      <div className="mt-16 max-w-2xl text-center">
        <h2 className="text-2xl font-semibold mb-4">About the Project</h2>
        <p className="text-gray-300">
          The TypeSprint is an interactive typing speed evaluator that progresses through multiple rounds to determine the ultimate winner.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-4">How It Works?</h2>
        <ul className="text-gray-300 text-left">
          <li>✅ **Round 1** - All participants compete in a typing test.</li>
          <li>✅ **Round 2** - Top performers proceed to a more difficult test.</li>
          <li>✅ **Final Round** - The top 3 participants are selected, and the winner is highlighted with an animated pop-up.</li>
        </ul>

        {/* GitHub Link */}
        <div className="mt-8">
          <a
            href="https://github.com/VishwakarmaVaibhav/TypeSprint"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 underline hover:text-blue-500 transition-all"
          >
            🌟 View the Project on GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
