import React, { useState } from "react";
import ArrowIcon from "../../Icons/ArrowIcon";

export default function GiftGenerator() {
  const [searchQuery, setSearchQuery] = useState('');
  const [responseData, setResponseData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true); // Set loading to true when submitting the form
    try {
      const response = await fetch(`https://thonk-fragrant-snowflake-9296.fly.dev/generate_content?${searchQuery}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setResponseData(data);
    } catch (error) {
      console.error('Error fetching data:', error);
      setError(error.message);
    } finally {
      setLoading(false); // Reset loading regardless of success or failure
    }
  };

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div id="GiftGeneratorSection" data-aos="fade-up" className="flex flex-col space-y-4 w-full h-96 items-center mb-16 bg-AAprimary">
      <div className="flex flex-row items-center ">
        <ArrowIcon className="flex-none h-5 md:h-6 w-5 md:w-5 text-AAsecondary" />
        <div className="flex flex-row space-x-2 items-center">
          <span className="text-AAsecondary font-sans text-sm  sm:text-base">04.</span>
          <span className="font-sans text-AAsecondary text-base">AI !</span>
        </div>
      </div>
      <span className="text-gray-200 text-3xl sm:text-4xl font-bold tracking-wider opacity-85">Gift Suggestion</span>
      <form className="flex flex-col items-center" onSubmit={handleSubmit}>   
        <div className="relative">
          <input type="search" id="search" size={60} className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Try listing hobbies of the person you want to gift :)" value={searchQuery} onChange={handleInputChange} required />
        </div>
        <div className="pt-4">
          <button type="submit" className="font-mono text-sm text-AAsecondary border-AAsecondary px-8 py-4 border-[1.5px] rounded">
            {loading ? 'Loading...' : 'Get Ideas!'}
          </button>
        </div>
      </form> 
      {responseData && (
        <div className="font-Header tracking-wide flex flex-row space-x-16 mb-8">
          <div className="flex flex-row space-x-2 items-center">
            <div className="flex flex-col space-y-4 sm:text-base text-sm">
              <span className="text-gray-200 text-xl sm:text-xl font-bold tracking-wider opacity-85">Here are some suggestions:</span>
              {responseData.contents.slice(0, 3).map((item, index) => (
                <div key={index} className="flex flex-row items-center space-x-2">
                  <ArrowIcon className={"h-3 w-3 text-AAsecondary"} />
                  <span className="text-gray-400 sm:text-sm text-xs">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
      {error && (
        <span className="text-gray-200 text-xl sm:text-xl font-bold tracking-wider opacity-85">I got nothing!</span>
      )}
    </div>
  );
}
