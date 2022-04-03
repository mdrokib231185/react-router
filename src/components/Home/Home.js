import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <div className="home-container">
        <div className="details-container">
          <h1 className="text1">Your laptop</h1>
          <h1 className="text2">is The best laptop</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta,
            ducimus cumque! Quaerat minima neque facilis, nihil aut consectetur
            voluptas perferendis amet. Atque doloremque, voluptas exercitationem
            sit aliquid eius deserunt illo.
          </p>
          <button className="btn">SHOW DETAILS</button>
        </div>
        <div className="img-container">
          <img
            src="https://i.pcmag.com/imagery/roundups/02naaOkVLe7DIiejFUyDPJp-31..v1588859331.jpg"
            alt=""
          />
        </div>
      </div>
      <div className="coustomer-review">
        <div className="revieew-section">
          <h1>coustomer review(3)</h1>
        </div>
        <div className="review-btn">
          <button className="rev-btn">See all Reviews</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
