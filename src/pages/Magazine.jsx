import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { list } from "../conponents/MagazineData";
import "../css/magazine.css";

export default function Magazine() {
  let navigate = useNavigate();
  let [magazinegrid] = useState(list);

  return (
    <section className='mw'>
      <div className='categories'>
        <p>CATEGORIES</p>
        <p>
          <a href=''>ALL</a>
          <a href=''>ART</a>
          <a href=''>STRRET ART</a>
          <a href=''>SCULPTURES</a>
        </p>
      </div>
      <div class='magazineCon'>
        {magazinegrid.map((list) => (
          <div
            className='item'
            onClick={() => {
              navigate("/magazinepost");
            }}>
            <div className='smallCate'>
              <p>{list.date}</p>
              <a href=''>{list.category}</a>
            </div>
            <div className='imgCon'>
              <img src={`${process.env.PUBLIC_URL}/img/${list.img}`} />
            </div>
            <h3>{list.title}</h3>
            <p className='text'>{list.content}</p>
            <div className='smallInfo'>
              <p>Text</p>
              <span>{list.authors}</span>
            </div>
            <div className='smallInfo'>
              <p>Duration</p>
              <span>{list.duration}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
