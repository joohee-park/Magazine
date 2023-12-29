import Mlist from "../conponents/Mlist";
import Mside from "../conponents/Mside";

import "../css/main.css";

export default function Main() {
  return (
    <main className='mainCon mw'>
      <div className='title'>
        <img src={`${process.env.PUBLIC_URL}/img/main_Art_Life.png`} />
      </div>
      <div className='news'>
        <strong>NEWS TICKER+++</strong>
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus ad
          debitis illo quasi voluptates officia atqueillo quasi voluptates
          officia atque illo quasi voluptates officia atque
        </span>
      </div>

      <div className='mText_01'>
        <h2>DON'T CLOSE YOUR EYES</h2>
        <div className='inner'>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum
            blanditiis ipsa, optio itaque alias, Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Itaque nam optio esse ea fuga numquam
            cupiditate deserunt earum quis ducimus iure, eum quia mollitia ipsa
            labore illum odio unde enim. explicabo quis accusantium facilis
            fugiat numquam minus, quisquam nobis dolores delectus est. Eaque
            magni aspernatur iste.
          </p>
          <div className='record'>
            <span>
              <b>Text</b> Jakob Gronberg
            </span>
            <span>
              <b>Date</b> 16. March 2023
            </span>
            <span>
              <b>Read</b> 1 Min
            </span>
            <a href='#'>ART</a>
          </div>
        </div>
      </div>
      <div className='bigImg'>
        <img src={`${process.env.PUBLIC_URL}/img/main_big.png`}></img>
      </div>

      <section className='secCon'>
        <Mlist />
        <Mside />
      </section>
    </main>
  );
}
