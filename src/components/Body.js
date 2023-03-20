import { restaurantList } from "../constants";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
  let searchTxt = "KFKFCCCCC"; // This is the search text but hardcoded for now

  return (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search for restaurants"
          value={searchTxt}
          onChange={(e) => {
            searchTxt = e.target.value;
            console.log(searchTxt);
          }}
        />
        <button className="search-btn">Search</button>
        <div className="restaurant-list">
          {restaurantList.map((restaurant) => {
            return (
              <RestaurantCard {...restaurant.data} key={restaurant.data.id} />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Body;
