import { CDN_URL } from "../utils/constants";
const styleCard = {
    backgroundColor: "#f0f0f0",
  };
const RestaurantCard = (props) => {
    const { resData } = props;
    const { cloudinaryImageId, name, avgRating, cuisines, costForTwo } = resData;
    return (
      <div className="res-cards" style={styleCard}>
        <img
          className="res-logo"
          alt="res-log"
          src={ CDN_URL + cloudinaryImageId
          }
        ></img>
        <h3>{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating}  ⭐</h4>
        <h4>{costForTwo}</h4>
      </div>
    );
  };
  export default RestaurantCard;