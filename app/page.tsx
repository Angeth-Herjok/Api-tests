'use-client';
import { useEffect,useState } from 'react';
import { getMovies } from './utilities/utils';
import { IMAGE_BASE_URL } from 'next/image';

interface MovieData{
  id: number,
  poster_path: string,
  genre_ids: number[],
  title: String,
}

type MovieData ={
  results: Movie[];
}

export default function Home() {
  const [movies, setMovies] = useState([]);
  

  useEffect(()={
    poster_path: string,
    genre_ids: number[],
    title: String,
  }
  
  type MovieData ={
    results: Movie[];
  }
  
  export default function
    (async()={

      const movies = await getMovies();
      console.log({movies});
      
    })

  }, []);

  return (<main>
        
        <div className='grid grid-cols-4 gap-4'>
          {movies?.results.map((item)={
            return(
            
              <div className="next"><div>
            )
          })}
        </div>
            
        </main>
  )
}
