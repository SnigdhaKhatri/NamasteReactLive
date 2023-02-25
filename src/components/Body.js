import { restaurantList } from "../constant";
import RestCard from "./RestCard";
import { useState } from "react";

const Body = () => {
  const [searchInput, setSearchInput] = useState("KFC");
  const [restaurants, setRestaurants] = useState(restaurantList);

  function filterData(searchInput, restaurants) {
    let data = restaurants.filter((restaurant) =>
      restaurant.data.name.includes(searchInput)
    );
    return data;
  }

  return (
    <>
      <div className="SearchBar">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchInput}
          onChange={(e) => {
            // e.target.value === whatever you write in input
            setSearchInput(e.target.value);
          }}
        />
        <button
          className="search-btn"
          onClick={() => {
            const data = filterData(searchInput, restaurants);
            debugger;
            setRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="restaurant-list">
        {restaurants.map((restaurant) => {
          return <RestCard {...restaurant.data} />;
        })}
      </div>
    </>
  );
};

export default Body;
