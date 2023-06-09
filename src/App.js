
import './App.css';

import Movie from './components/Movie/Movie';
import React, { useState, useEffect  } from 'react';

const API = "https://api.themoviedb.org/3/discover/movie?api_key=af32182a7fa62d9883bd2d0eb2d16edb";

function App() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetch(API).then((res) => res.json()).then((data) => {
      setMovies(data.results);
    })
  },[])
  const[drop, setDrop] = useState(false);
  const oldestToNew = (e) =>{
    const m = Array.from(movies);
    console.log(m);
    m.sort((a, b) => {
      let fa = a.release_date,
        fb = b.release_date;
        const date1 = new Date(fa);
        const date2 = new Date(fb);

    if (date1 < date2) {
        return -1;
    }
    if (date1 > date2) {
        return 1;
    }
    return 0;});
    console.log(m);
    setMovies(m);
  };
  const newToOldest = (e) =>{
    const m = Array.from(movies);
    console.log(m);
    m.sort((a, b) => {
      let fa = a.release_date,
        fb = b.release_date;
        const date1 = new Date(fa);
        const date2 = new Date(fb);

    if (date1 > date2) {
        return -1;
    }
    if (date1 < date2) {
        return 1;
    }
    return 0;});
    console.log(m);
    setMovies(m);
  };
  const aToZ = (e) =>{
    const m = Array.from(movies);
    console.log(m);
    m.sort((a, b) => {
      let fa = a.title.toLowerCase(),
        fb = b.title.toLowerCase();

    if (fa < fb) {
        return -1;
    }
    if (fa > fb) {
        return 1;
    }
    return 0;});
    console.log(m);
    setMovies(m);
  };
  const zToA = (e) =>{
    const m = Array.from(movies);
    console.log(m);
    m.sort((a, b) => {
      let fa = a.title.toLowerCase(),
        fb = b.title.toLowerCase();

    if (fa > fb) {
        return -1;
    }
    if (fa < fb) {
        return 1;
    }
    return 0;});
    console.log(m);
    setMovies(m);
  };
  const byRating = (e) =>{
    const m = Array.from(movies);
    console.log(m);
    m.sort((a, b) => {return b.vote_average - a.vote_average});
    console.log(m);
    setMovies(m);
  };
  return (
    <>
     <header>
      <div className="header">Movie Club</div>
     </header>
    <div className="App">
    <div className="menu">
        <div onClick={() => setDrop(!drop)} className="sort" data-testid = "sortDiv">Sort </div>
        <div className={`dropdown-menu ${drop? 'active' : 'inactive'}`}>
        <div onClick={aToZ} className="menuItem" data-testid = "sortAtoZ">By name A-Z</div>
        <div onClick={zToA} className="menuItem">By name Z-A</div>
        <div onClick={byRating}className="menuItem">By rating</div>
        <div onClick={oldestToNew} className="menuItem">Oldest to new</div>
        <div onClick={newToOldest} className="menuItem">New to oldest</div>
        </div>
    </div >
    {movies?.map((movie) => 
     <Movie key={movie.id} id={movie.id} title={movie.title} poster={movie.poster_path} vote={movie.vote_average} />
    )}
    </div>
    
    </>
  );
}

export default App;
