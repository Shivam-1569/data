import React, { useEffect } from 'react'
import "./Home.scss"
import { useState } from 'react';
import axios from 'axios';
import { FaPlay } from "react-icons/fa";
import { MdChecklistRtl } from "react-icons/md";

const apiKey = "ee5e8b243acf2cc4c3d3396406422dcb";
const url = "https://api.themoviedb.org/3"
const imgUrl = "https://image.tmdb.org/t/p/original";
const upcoming = "upcoming"
const nowPlaying = "now_playing";
const popular = "popular";
const topRated = "top_rated";



const Card = ({img}) => (
    <img className='card' src={img} alt="hsrtf" />
)

const Row = ({title, arr=[]}) => {
  
  
  return (
    <div className='Row'>
      <h2>{title}</h2>
      <div className='row'>
      
      
      {
          arr.map((item, index) => (
            <Card key={index} img={`${imgUrl}/${item.poster_path}`} />
          ))
      }

    </div>
    </div>
    
  )
}
const Home = () => {

  const [upcomingMovies, setUpcomingMovies] = useState([])
  const [popularMovie, setPopularMovie] = useState([])
  const [nowPlayingMovie, setnowPlayingMovie] = useState([])
  const [topRatedMovie, setTopRatedMovie] = useState([])
  const randomNumber = Math.floor(Math.random() * 10) + 1
  useEffect(() => {
    const fetchData = async () => {
      const upcomingData = await axios.get(`${url}/movie/${upcoming}?api_key=${apiKey}`)
      setUpcomingMovies(upcomingData.data.results)
      console.log(upcomingData.data.results);
      const popularData = await axios.get(`${url}/movie/${popular}?api_key=${apiKey}`)
      setPopularMovie(popularData.data.results)

      const nowPlayingData = await axios.get(`${url}/movie/${nowPlaying}?api_key=${apiKey}`)
      setnowPlayingMovie(nowPlayingData.data.results)

      const topRatedData = await axios.get(`${url}/movie/${topRated}?api_key=${apiKey}`)
      setTopRatedMovie(topRatedData.data.results)
    }

    fetchData()
  }, [])
  return (
    <div className='home'>
      <div className="banner" style={{
                    backgroundImage: popularMovie[4]
                        ? `url(${`${imgUrl}/${popularMovie[4].poster_path}`})`
                        : "rgb(16, 16, 16)",
                }}>
                  
                   {popularMovie[4] && <h1>{popularMovie[4].original_title}</h1>}
                {popularMovie[4] && <p>{popularMovie[4].overview}</p>}
                <div>
                <button><FaPlay/> Play</button>
                <button>My List <MdChecklistRtl/></button>
                </div>
        
      </div>

      <Row title = {"Popular"} arr = {popularMovie}/>
      <Row title = {"Top-Rated"} arr={topRatedMovie}/>
      <Row title = {"Upcoming Movies"} arr={upcomingMovies}/>
      <Row title = {"Now Playing"} arr={nowPlayingMovie}/>

    </div>
  )
}

export default Home