import { useState, useEffect } from "react";
import React from 'react';
import axios from "axios";

function Home() {
  const [advice, setAdvice] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAdvice = async () => {
      try {
        const response = await axios.get("https://api.adviceslip.com/advice");
        setAdvice(response.data.slip.advice);
      } catch (error) {
        console.error(error);
        setAdvice("Failed to load advice.");
      } finally {
        setLoading(false);
      }
    };

    fetchAdvice();
  }, []);

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md text-center w-[400px]">
        <h1 className="text-2xl font-bold mb-4">Random Advice</h1>

        {loading ? (
          <p>Loading advice...</p>
        ) : (
          <p className="text-lg text-gray-700">{advice}</p>
        )}
      </div>
    </div>
  );
}

export default Home;