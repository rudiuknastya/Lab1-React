import { img_500, unavailableLandscape } from "../../config/config";
import "./Modal.css"
import React, { useState, useEffect  } from 'react';


const Modal = ({open, close, mId}) => {
  const api = `https://api.themoviedb.org/3/movie/${mId}?api_key=af32182a7fa62d9883bd2d0eb2d16edb`;
  const vApi = `https://api.themoviedb.org/3/movie/${mId}/videos?api_key=af32182a7fa62d9883bd2d0eb2d16edb`;
  const crApi = `https://api.themoviedb.org/3/movie/${mId}/credits?api_key=af32182a7fa62d9883bd2d0eb2d16edb`;
  const [inform, setInform] = useState([]);
  const[video, setVideo] = useState();
  const[credits, setCredits] = useState();
  useEffect(() => {
    fetch(api).then((res) => res.json()).then((data) => {
      //console.log(data);
      setInform(data);
    })
  },[])
  useEffect(() => {
    fetch(vApi).then((res) => res.json()).then((data) => {
      console.log(data.results);
      setVideo(data.results[0]?.key);
    })
  },[])
  useEffect(() => {
    fetch(crApi).then((res) => res.json()).then((data) => {
      setCredits(data.crew);
    })
  },[])
  
    if(!open) return null
    return (
        
          <div className="modal" data-testid = "modal">
            <p className="modaltitle"> {inform.title}</p>
            <div className="imageoverview">
            <img src={inform.backdrop_path? `${img_500}${inform.backdrop_path}` : unavailableLandscape} className="modalImg" alt={inform.title}/>
            <div className="about">
            <p className="overview">{inform.overview}</p>
            <span>Release date: {inform.release_date}</span>
            <span>Director: {credits?.filter(credit => credit.job ==='Director').map(credit => credit.name +" ")}</span>
            </div>
            </div>
            <p onClick={close} className="exit" data-testid = "exit">X</p>
            <a href={`https://www.youtube.com/watch?v=${video}`} target="_blank" className="trailer">Watch Trailer</a>
          </div>
          
    )
   }
export default Modal;