import React, {useCallback, useEffect} from 'react';

import MoviesList from './components/MoviesList';
import './App.css';
import {useState} from "react";
import AddMovie from "./components/AddMovie";

const FIREBASE_DOMAIN = 'https://react-reduxtoolkit-28cbd-default-rtdb.firebaseio.com/movies.json';

function App() {
    // const dummyMovies = [
    //   {
    //     id: 1,
    //     title: 'Some Dummy Movie',
    //     openingText: 'This is the opening text of the movie',
    //     releaseDate: '2021-05-18',
    //   },
    //   {
    //     id: 2,
    //     title: 'Some Dummy Movie 2',
    //     openingText: 'This is the second opening text of the movie',
    //     releaseDate: '2021-05-19',
    //   },
    // ];
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState();

    //useEffect에서 이 함수를 호출하기 때문에, useCallback으로 재생성을 막음
    const fetchMovieHandler = useCallback(async () => {

        //186. Basic GET method
        // fetch('https://swapi.dev/api/films/', {
        //     method: 'GET'
        // }).then(
        //     response => {
        //         return response.json();
        //     }
        // ).then(data => {
        //     const transformedMovies = data.results.map(movieData =>{
        //         return {
        //             id: movieData.episode_id,
        //             title: movieData.title,
        //             openingText: movieData.opening_crawl,
        //             releaseData: movieData.release_date
        //         }
        //     })
        //     setMovies(transformedMovies)
        // });

        // 187. async & await
        setIsLoading(true);
        setError(null);
        // 188. Handling Error: async&await을 사용하면 try&catch로 에러 잡기
        try {
            const response = await fetch(FIREBASE_DOMAIN, {
                method: 'GET'
            });

            if (!response.ok) {
                throw new Error('Something went wrong!');
            }
            const data = await response.json();

            const loadedMovies = [];

            for (const key in data){
                loadedMovies.push({
                    id:key,
                    title:data[key].title,
                    openingText:data[key].openingText,
                    releaseDate: data[key].releaseDate
                })
            }

            setMovies(loadedMovies);

        } catch (error) {
            setError(error.message);
        }
        setIsLoading(false);
    }, [])

    const addMovieHandler = async (movie) => {
        const response = await fetch(FIREBASE_DOMAIN, {
            method: 'POST',
            body: JSON.stringify(movie),
            headers:{
                'Content-Type': 'application/json'
            }
        });

    }

    useEffect(() => {
        fetchMovieHandler();
    }, [fetchMovieHandler])

    //Refactoring: return 안에 조건문으로 주저리하는것보다 이게 더 명확
    let content = <p>Found no movies.</p>;

    if (movies.length > 0) {
        content = <MoviesList movies={movies}/>
    }

    if (error) {
        content = <p>Errors: {error}</p>
    }

    if (isLoading) {
        content = <p>Loading...</p>;
    }

    return (
        <React.Fragment>
            <section>
                <AddMovie onAddMovie={addMovieHandler}/>
            </section>
            <section>
                <button onClick={fetchMovieHandler}>Fetch Movies</button>
            </section>
            <section>
                {content}
            </section>
        </React.Fragment>
    );
}

export default App;
