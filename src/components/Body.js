import { restaurantList } from "../constants";
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";

//What is state?  State is used to store data about the component, that can change over time. It's similar to props.

// What is hook? Hooks are functions that let you “hook into” React state, Hooks don’t work inside classes — they let you use React without classes.

// What is useState Hook? useState hook is a function that allows you to add state to functional components.

const Body = () => {
  let searchTxt = "KFKFCCCCC"; // This is the search text but hardcoded for now

  //searchText is a local state variable and useState is the hook function.
  const [searchText] = useState(); // Created varible with useState hook.

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
