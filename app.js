import React from "react";
import ReactDOM from "react-dom/client";
import logo from "./logo.png";
const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={logo}></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};
const styleCard = {
  backgroundColor: "#f0f0f0",
};
const RestaurantCard = (props) => {
  return (
    <div className="res-cards" style={styleCard}>
      <img
        className="res-logo"
        alt="res-log"
        src="https://i.pinimg.com/1200x/90/cc/5f/90cc5fa47bca56645a2c90f73d638696.jpg"
      ></img>
      <h3>{props.resName}</h3>
      <h4>{props.cuisine}</h4>
      <h4>{props.rating}</h4>
      <h4>{props.timing}</h4>
    </div>
  );
};
const Body = () => {
  return (
    <div className="body">
      <div className="search">search</div>
      <div className="res-container">
        <RestaurantCard
          resName="Meghana Foods"
          cuisine="Tandoori Platter, North India" rating="4.1" timing="38 minutes"
        />
        <RestaurantCard resName="KFC" cuisine="Burger,Fast Food" rating ="4" timing="30 minutes"/>
        <RestaurantCard resName="Sagar Ratna" cuisine="Dosa, South Indian" rating ="3.9" timing="25 minutes"/>
        <RestaurantCard resName="Ching Hung" cuisine="Noodles, Chinese" rating="3.5" timing="20 minutes"/>
      </div>
    </div>
  );
};
const AppLayout = () => (
  <div className="app">
    <Header />
    <Body />
  </div>
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
