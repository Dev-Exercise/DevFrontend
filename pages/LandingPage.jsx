import React from "react";
import Link from "next/link";
import Vehicle from "../assets/vehicle.jpg";
import Image from "next/image";

const LandingPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex justify-center items-center">
      <main className="container mx-auto px-4 py-16 w-3/4">
        <div className="bg-white rounded-lg shadow p-16 text-center">
          <h1 className="text-4xl font-bold mb-4 leading-snug">
            Welcome to <br /> Helsinki City Bike Web Application
          </h1>
          <p className="text-gray-600 text-lg mb-6">
            Explore bike journey statistics and visualize the journeys on a map.
          </p>

          <Link
            href="/JourneyListView"
            className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-lg px-5 py-2.5 text-center mr-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
          >
            Get Started
          </Link>
        </div>
      </main>
    </div>
  );
};

export default LandingPage;
