import { relative } from 'path';
import React from 'react';

interface Movie {
  Title: string;
  Year: string;
  Poster: string;
}

interface ResultsProps {
  movies: Movie[];
}

export default function Results({ movies }: ResultsProps) {
  return (
    <div className="text-white">
      <div className='flex overflow-x-scroll whitespace-nowrap' style={{ 'scrollbarWidth': 'none' }} space-x-4>
        {movies.map((movie) => (
          <div key={movie.Title} className="group">
            <img className="max-w-xs transform transition-transform hover:scale-110" src={movie.Poster} alt="Poster" height={800} width={800} />
            <h3 className='text-[30px] w-40'>{movie.Title}</h3>
            <p>{movie.Year}</p>
          </div>
      ))}
      </div>
    </div>
  );
}


