import React from "react";
import { Link } from "react-router-dom";
import useReview from "../Hooks/Hooks";
import Show from "../ShowDetails/Show";
import "./Home.css";

const Home = () => {
  const [reviews, setReviews] = useReview()
  return (
    <div>
      <div className="home-container">
        <div className="details-container">
          <h1 className="text1">Your Laptop</h1>
          <h1 className="text2">Is The Best Laptop</h1>
          <p>
            Many people look for low-priced laptops to buy. It is fairly easy to
            get a good quality brand new high or low budget laptop for a
            student, businessman, & even office user. The best part is, a new
            branded laptop has a very cheap or affordable price tag. The most
            popular brands available in BD are HP, Asus, Dell, Razer, Apple
            Macbook, Acer, Lenovo, Microsoft, MSI, Gigabyte, i-Life, Walton,
            Xiaomi MI, iLife, Chuwi, etc. They have at least one series
            available. Like Dell's Inspiron, Latitude & XPS, Acer's Aspire &
            TravelMate, Asus' Transformer Book, VivoBook & Zenbook, Lenovo's
            IdeaPad & ThinkPad, & HP's Spectre, EliteBook, Envy, Pavilion, &
            ProBook. The price of any Asus laptop & HP laptop is most
            cost-efficient.
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
        <h1 className="review-text">Coustomer Review(3)</h1>
        <div className="revieew-section">
          {reviews.slice(0, 3).map((review) => (
            <Show review={review}
            key={review.id}></Show>
          ))}
        </div>
        <div className="review-btn">
          <Link to="/reviews" className="rev-btn">
            See all Reviews
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
