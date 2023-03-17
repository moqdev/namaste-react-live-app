import { restaurantList } from "../constants";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
  return (
    <>
      <div className="search-form">
        <div className="search-box">
        <input type="text" className="search-input" placeholder="Search for restaurants" />
        <div className="restaurant-list">
          {restaurantList.map((restaurant) => {
            return (
              <RestaurantCard {...restaurant.data} key={restaurant.data.id} />
            );
          })}
        </div>
        </div>
      </div>..
    </>
  );
};

export default Body;
