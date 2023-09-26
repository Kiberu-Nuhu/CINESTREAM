import React, { useState } from 'react';
import axios from 'axios';
import Results from '../Details/Results';


export default function Section3() {
  const [searchTerm, setSearchTerm] = useState('');
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searched, setSearched] = useState(false);

  async function fetchMovieData() {
    try {
      setLoading(true);
      const apiKey = process.env.REACT_APP_API_KEY;

      const response = await axios.get(
        `http://www.omdbapi.com/?s=${searchTerm}&apikey=${apiKey}`
      );
      console.log(response.data.Search)
      setMovies(response.data.Search || []);
      setLoading(false);
      setSearched(true);
    } catch (error) {
      console.error('Error fetching movie data:', error);
      setLoading(false);
    }
  }

  return (
    <div className="bg-slate-700 pb-[30px] ">
      <div className="flex items-center justify-center gap-3">
        <input
          className="w-[25%] h-9 rounded-md text-center outline-none"
          type="text"
          placeholder="Type a movie name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded-md h-9 "
          onClick={fetchMovieData}
        >
          {loading ? 'Searching...' : 'Search'}
        </button>
        <button className="bg-black hover:bg-slate-900 text-white font-bold py-2 px-2 rounded-full p-3">
          Browse Genres
        </button>
      </div>
      {searched && <Results movies={movies} />}
    </div>
  );
}
