import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import cssStyle from "../css/Mside.module.css";
import {list} from './PopularData'

export default function Mside() {
  let navigate = useNavigate();
  let [popularList] = useState(list);

  return (
    <div className={cssStyle.mSide}>
      <p>PRINTMAGAZINE</p>
      <h3>03/2023</h3>
      <div className={cssStyle.mSideImg}>
        <img src={`${process.env.PUBLIC_URL}/img/main_side_img.png`}/>
      </div>
      <button>BUTTON</button>
      <ul className={cssStyle.popularList}>
        <span>MOST POPULAR</span>
        {
          popularList.map((list)=>(
        <li>
          <p className={cssStyle.pNumber}>{list._id}</p>
          <div className={cssStyle.inner}>
            <p className={cssStyle.pTitle}>{list.title}</p>
            <p className={cssStyle.pWriter}>
              <b>Text</b><span>{list.authors}</span>
            </p>
          </div>
        </li>
        ))}
      </ul>
      <div className={cssStyle.newsLetter}>
        <p>NEWSLETTER</p>
        <strong>
          Design News to your inbox
        </strong>
        <div className={cssStyle.inputBox}>
          <input type='text' placeholder='Email' />
          <button>SIGN UP</button>
        </div>
      </div>
    </div>
  );
}
