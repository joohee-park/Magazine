import { Link, useNavigate } from "react-router-dom";
import "../css/magazinePost.css";
import { useState } from "react";

export default function MagazinePost() {
  let navigate = useNavigate();
  const iconBack = (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      height='16'
      width='14'
      viewBox='0 0 448 512'>
      <path d='M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z' />
    </svg>
  );
  const onClickBtn = () => {
    navigate(-1);
  };
  return (
    <section className='mw'>
      <div className='postTitle'>
        <button onClick={onClickBtn}>
          {iconBack} <span>GO BACK</span>
        </button>
        <p>MAGAZINE</p>
      </div>
      <div className='hopeText'>
        <h3>
          HOPE
          <br />
          DIES LAST
        </h3>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. In minima,
          expedita animi fugiat voluptatibus architecto quo, ullam rem fugiat
          voluptatibus architecto quofugiat voluptatibus architecto quo
        </p>
      </div>
      <div className='magazineSec'>
        <div className='infoCon'>
          <p>
            <span>
              <strong>Text</strong> Jakob
            </span>
            <span>
              <strong>Text</strong> Jakob
            </span>
            <span>
              <strong>Text</strong> Jakob
            </span>
          </p>
          <a href=''>cate</a>
        </div>
        <div className='imgCon'>
          <img src={`${process.env.PUBLIC_URL}/img/magazine_post_01.png`}/>
        </div>

        <div className='authorCon'>
          <div className='authorInfo'>
            <div className='authorProf'>
              <p>
                <img src={`${process.env.PUBLIC_URL}/img/authors_01.png`} ></img>
              </p>
              <span>Jakob Gronber</span>
            </div>
            <ul className='infoList'>
              <li>
                <strong>Date</strong> 16
              </li>
              <li>
                <strong>Read</strong> 2
              </li>
              <li>
                <strong>Share</strong> 16
              </li>
            </ul>
          </div>
          <div className='textCon'>
            <p>
              <strong>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis
                hic dolor repellendus deleniti pariatur vero reprehenderit eum
                corrupti numquam placeat quas, quo eius iste ea labore
                repudiandae quaerat et. Alias?
              </strong>
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reiciendis doloribus explicabo quasi id. Dignissimos vitae dolores
              error necessitatibus voluptatum cupiditate, quisquam blanditiis.
              Ratione aliquid doloremque est deleniti, ducimus obcaecati
              voluptatum.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reiciendis doloribus explicabo quasi id. Dignissimos vitae dolores
              error necessitatibus voluptatum cupiditate, quisquam blanditiis.
              Ratione aliquid doloremque est deleniti, ducimus obcaecati
              voluptatum.
            </p>
            <h3>
              " The greatest glory in living lies not in never falling, but in
              rising every time we fall.
            </h3>
            <p>
              <strong>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis
                hic dolor repellendus deleniti pariatur vero reprehenderit eum
                corrupti numquam placeat quas, quo eius iste ea labore
                repudiandae quaerat et. Alias?
              </strong>
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reiciendis doloribus explicabo quasi id. Dignissimos vitae dolores
              error necessitatibus voluptatum cupiditate, quisquam blanditiis.
              Ratione aliquid doloremque est deleniti, ducimus obcaecati
              voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Reiciendis doloribus explicabo quasi id. Dignissimos vitae
              dolores error necessitatibus voluptatum cupiditate, quisquam
              blanditiis. Ratione aliquid doloremque est deleniti, ducimus
              obcaecati voluptatum. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Reiciendis doloribus explicabo quasi id.
              Dignissimos vitae dolores error necessitatibus voluptatum
              cupiditate, quisquam blanditiis. Ratione aliquid doloremque est
              deleniti, ducimus obcaecati voluptatum.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reiciendis doloribus explicabo quasi id. Dignissimos vitae dolores
              error necessitatibus voluptatum cupiditate, quisquam blanditiis.
              Ratione aliquid doloremque est deleniti, ducimus obcaecati
              voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Reiciendis doloribus explicabo quasi id. Dignissimos vitae
              dolores error necessitatibus voluptatum cupiditate, quisquam
              blanditiis.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
