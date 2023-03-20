import { restaurantList } from "../constants";
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";

const Body = () => {
  const searchTxt = "KFC"; // creating local varible via JS

  const [searchText] = useState("KFC"); // creating local varible via React
  return (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search for restaurants"
          value={searchText}
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
