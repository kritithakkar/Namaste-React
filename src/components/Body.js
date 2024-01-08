import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";
  
const Body = () => {
//Local State Varibale - Super powerful variable
const [listOfRestaurants, setListOfRestaurant] = useState(resList);
    return (
      <div className="body">
        <div className="filter">
            <button className="filter-btn" onClick={()=>{
                const filteredList = listOfRestaurants.filter(
                  (res) => res.avgRating >4
                );
                setListOfRestaurant(filteredList);
            }}>Top Rated Restaurants</button>
        </div>
        <div className="res-container">
        {listOfRestaurants.map((restaurant) => (
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
  export default Body;