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
const resList = [
  {
    id: "80802",
    name: "Third Wave Coffee",
    cloudinaryImageId: "d96267738c19ec62acb5390e52faba41",
    locality: "Armane Nagar",
    areaName: "Sadashiv Nagar",
    costForTwo: "₹400 for two",
    cuisines: ["Beverages", "Bakery", "Continental"],
    avgRating: 4.4,
  },
  {
    id: "281469",
    name: "Lavonne",
    cloudinaryImageId: "emlehbuwgsmryxhwzhvq",
    locality: "St. Marks Road",
    areaName: "St. Marks Road",
    costForTwo: "₹750 for two",
    cuisines: ["Bakery", "Desserts"],
    avgRating: 4.6,
  },
  {
    id: "43836",
    name: "McDonald's",
    cloudinaryImageId: "bb7ae131544c7d37e10fc5faf76f09d6",
    locality: "MG Road",
    areaName: "Ashok Nagar",
    costForTwo: "₹400 for two",
    cuisines: ["Burgers", "Beverages", "Cafe", "Desserts"],
    avgRating: 4.3,
  },
  {
    id: "23847",
    name: "Domino's Pizza",
    cloudinaryImageId: "fjqcvqfgqlw6h0atques",
    locality: "Rest House Road",
    areaName: "Brigade Road",
    costForTwo: "₹400 for two",
    cuisines: ["Pizzas", "Italian", "Pastas", "Desserts"],
    avgRating: 4.3,
  },
  {
    id: "279060",
    name: "Sikandar Rolls",
    cloudinaryImageId: "m6c0uvtstsvvnzb99fkm",
    locality: "Barton Centre",
    areaName: "M G Road",
    costForTwo: "₹300 for two",
    cuisines: ["North Indian", "Kebabs", "Beverages", "Desserts"],
    avgRating: 4.6,
  },
  {
    id: "16073",
    name: "California Burrito",
    cloudinaryImageId: "27238ee4292d42c7b705f2ce8671ff80",
    locality: "Malleshwaram",
    areaName: "Malleshwaram",
    costForTwo: "₹250 for two",
    cuisines: [
      "Mexican",
      "American",
      "Salads",
      "Continental",
      "Keto",
      "Healthy Food",
    ],
    avgRating: 4.7,
  },
  {
    id: "614642",
    name: "Soul Rasa",
    cloudinaryImageId: "v9fczzlua1wnrx63fh1g",
    locality: "Akkithimanahalli",
    areaName: "Shanti Nagar",
    costForTwo: "₹400 for two",
    cuisines: [
      "Indian",
      "Healthy Food",
      "Home Food",
      "South Indian",
      "North Indian",
    ],
    avgRating: 4.6,
  },
  {
    id: "69876",
    name: "Subway",
    cloudinaryImageId: "1ace5fa65eff3e1223feb696c956b38b",
    locality: "UB City",
    areaName: "Ashok Nagar",
    costForTwo: "₹350 for two",
    cuisines: ["Salads", "Snacks", "Desserts", "Beverages"],
    avgRating: 4.1,
  },
  {
    id: "396741",
    name: "Faasos - Wraps, Rolls & Shawarma",
    cloudinaryImageId: "af33b81798b11deba338e94b7585d348",
    locality: "Residency Road",
    areaName: "Shantinagar",
    costForTwo: "₹200 for two",
    cuisines: ["Kebabs", "Fast Food", "Snacks"],
    avgRating: 4.3,
  },
  {
    "id": "448116",
    "name": "The Bowl Company",
    "cloudinaryImageId": "bb6049fae59b8a2413a9177eb0338b49",
    "locality": "Akkithimanahalli",
    "areaName": "Shanti Nagar",
    "costForTwo": "₹300 for two",
    "cuisines": [
      "Pan-Asian",
      "Continental",
      "North Indian",
      "Desserts",
      "American",
      "Asian",
    ],
    "avgRating": 4.5,
    },
    {
      "id": "464509",
      "name": "Leon's - Burgers & Wings (Leon Grill)",
      "cloudinaryImageId": "b2edbc28b7b8219d6e0a9c049ce06658",
      "locality": "Pulkeshi Nagar",
      "areaName": "Frazer Town",
      "costForTwo": "₹300 for two",
      "cuisines": [
        "American",
        "Snacks",
        "Turkish",
        "Portuguese",
        "Continental"
      ],
      "avgRating": 4.4,
    },
    {
      "id": "792403",
      "name": "Nandhana Palace",
      "cloudinaryImageId": "502d6ccc803e95343d0324b15f8639da",
      "locality": "Jayanagar",
      "areaName": "Jayanagar",
      "costForTwo": "₹500 for two",
      "cuisines": [
        "Andhra",
        "North Indian"
      ],
      "avgRating": 4.4,
    },
    {
    "id": "534235",
    "name": "Cheesecake & Co.",
    "cloudinaryImageId": "40b0a201eadbec469c2f9a06d5e7c722",
    "locality": "6th Block",
    "areaName": "Koramangala",
    "costForTwo": "₹250 for two",
    "cuisines": [
      "Bakery"
    ],
    "avgRating": 4.6,
  },
  {
    "id": "3241",
    "name": "Meghana Foods",
    "cloudinaryImageId": "e0vvulfbahjxjz6k4uwi",
    "locality": "Residency Road",
    "areaName": "Residency Road",
    "costForTwo": "₹500 for two",
    "cuisines": [
      "Biryani",
      "Andhra",
      "South Indian",
      "North Indian",
      "Chinese",
      "Seafood"
    ],
    "avgRating": 4.6,
  },
  {
  "id": "506324",
  "name": "Louis Burger",
  "cloudinaryImageId": "19d3d352cc815b9d88b22617b41fa97b",
  "locality": "6Th Block, Koramangala",
  "areaName": "Koramangala",
  "costForTwo": "₹600 for two",
  "cuisines": [
    "Burgers",
    "American",
    "Fast Food"
  ],
  "avgRating": 4.4,
},
];

const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, avgRating, cuisines, costForTwo } = resData;
  return (
    <div className="res-cards" style={styleCard}>
      <img
        className="res-logo"
        alt="res-log"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
      ></img>
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating}</h4>
      <h4>{costForTwo}</h4>
    </div>
  );
};
const Body = () => {
  return (
    <div className="body">
      <div className="search">search</div>
      <div className="res-container">
      {resList.map((restaurant) => (
        <RestaurantCard key={restaurant.id} resData = {restaurant} />
      ))}
        {/* <RestaurantCard resData={resList[0]} />
        <RestaurantCard resData={resList[1]} />
        <RestaurantCard resData={resList[2]} />
        <RestaurantCard resData={resList[3]} />
        <RestaurantCard resData={resList[4]} />
        <RestaurantCard resData={resList[5]} />
        <RestaurantCard resData={resList[6]} />
        <RestaurantCard resData={resList[7]} />
        <RestaurantCard resData={resList[8]} /> */}
        {/* //   resName="Meghana Foods"
        //   cuisine="Tandoori Platter, North India" rating="4.1" timing="38 minutes"
        // <RestaurantCard resName="KFC" cuisine="Burger,Fast Food" rating ="4" timing="30 minutes"/>
        // <RestaurantCard resName="Sagar Ratna" cuisine="Dosa, South Indian" rating ="3.9" timing="25 minutes"/>
        // <RestaurantCard resName="Ching Hung" cuisine="Noodles, Chinese" rating="3.5" timing="20 minutes"/> */}
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
