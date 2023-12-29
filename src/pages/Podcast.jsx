import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { podcastData } from "../conponents/PodcastData";
import "../css/podcast.css";

export default function Potcast() {
  let navigate = useNavigate();
  let [podcastList] = useState(podcastData);

  const iconArrow = (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      height='16'
      width='14'
      viewBox='0 0 448 512'>
      <path d='M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z' />
    </svg>
  );
  return (
    <section className='mw'>
      <div className='title'>
        <img src={`${process.env.PUBLIC_URL}/img/Podcast_title.png`} />
      </div>
      <ul className='podcastCon'>
        {podcastList
          .slice(0)
          .reverse()
          .map((podcastData) => (
            <li>
              <p className='num'>{podcastData._id}</p>
              <div className='profile'>
                <img src={`${process.env.PUBLIC_URL}/img/${podcastData.img}`} />
              </div>
              <h3>{podcastData.title}</h3>
              <div className='smallT'>
                <p>Date</p>
                <span>{podcastData.date}</span>
              </div>
              <div className='smallT'>
                <p>Duration</p>
                <span>{podcastData.duration}</span>
              </div>
              <a href=''>LISTEN{iconArrow}</a>
            </li>
          ))}
      </ul>
    </section>
  );
}
