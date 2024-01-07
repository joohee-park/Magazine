import { useState } from "react";
import cssStyle from "../css/Mlist.module.css";
import { Link, useNavigate } from "react-router-dom";
import { list } from "./MagazineData";

export default function Mlist() {
  let navigate = useNavigate();
  let [magazineData] = useState(list);
  //   console.log(magazineData[0]._id);

  return (
    <div>
      <ul className={cssStyle.mList}>
        {magazineData.map((list) => (
          <li
            onClick={() => {
              navigate("/magazinepost");
            }}>
            <div className={cssStyle.mListImg}>
              <img src={`${process.env.PUBLIC_URL}/img/${list.img}`} />
            </div>
            <div className={cssStyle.mListText}>
              <h3>{list.title}</h3>
              <p>{list.content}</p>
              <div className={cssStyle.record}>
                <span>
                  <b>Text</b> {list.authors}
                </span>
                <span>
                  <b>Date</b> {list.date}
                </span>
                <span>
                  <b>Read</b> {list.duration}
                </span>
              </div>
              <a href='#'>{list.category}</a>
            </div>
          </li>
        ))}
      </ul>
      <p className={cssStyle.listAll}>
        <a href=''>ALL ARTICLES →</a>
      </p>
    </div>
  );
}
