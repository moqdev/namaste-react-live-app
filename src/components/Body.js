import { restaurantList } from "../constants";
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";

const Body = () => {
  //destructure the state varible (first element searchText)
  //the first element is the varible name and the second element is the function to update the variable
  const searchvar = useState(); // returns = [ varible, function to update the variable called state varible ] an array ,

  const [searchText, setSearchText] = searchvar;
  return (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search for restaurants"
          value={searchText}
        />
        <button className="search-btn"> </button>
      </div>
      <div className="restaurant-list">
        {restaurantList.map((restaurant) => {
          return (
            <RestaurantCard {...restaurant.data} key={restaurant.data.id} />
          );
        })}
      </div>
    </>
  );
};

export default Body;
