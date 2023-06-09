import { img_300, unavailable} from "../../config/config";
import Modal from "../Modal/Modal";
import './Movie.css';
import React, { useState } from 'react';
const Movie = ({id,title,poster,vote}) => {
    const[modal, setModal] = useState(false);
    return (
    <>
    <div onClick={() => setModal(true)} className="movie-card" data-testid = "movieCard">
        <img src={poster? `${img_300}${poster}` : unavailable} className="poster" alt={title}/>
        <p className="title">{title} </p>
        <p className="vote">⭐{vote} </p>
        
    </div>
    <Modal open={modal} close={() => setModal(false)} mId={id}/>
    </>
    )
   }
   export default Movie;