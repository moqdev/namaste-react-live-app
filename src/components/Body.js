import { restaurantList } from "../constants";
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";

const Body = () => {
  const [searchInput, setSearchInput] = useState("");
  return (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search for restaurants"
          value={searchInput}
          onChange={(e) => {
            setSearchInput(e.target.value);
            // console.log(searchInput);
          }}
        />
        <button className="search-btn">Search - {searchInput} </button>
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
