import React, { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import { restaurantList } from "./Constants";
import Shimmer from "./Shimmer";
import { filterData } from "../utils/helper";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";

const Body = () => {
  const [value, setValue] = useState("");
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [allRestaurants, setAllRestaurants] = useState([]);

  useEffect(() => {
    getRestaurant();
  }, []);

  async function getRestaurant() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.7095&lng=76.7744&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  }

  const online = useOnline();
  if (!online) {
    return <h1>Offline!! Please check your internet connection</h1>;
  }
  if (!allRestaurants) return null;
  // if(filteredRestaurants?.length === 0) return <h1>No restaurants matched your search</h1>

  return allRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="ml-[56rem] mb-5 mt-6 text-sm">
        <input
          className="bg-gray-200 rounded-lg pl-2 pr-40 pt-2 pb-2  "
          placeholder="Search for restaurant"
          type="text"
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
        <button className="bg-orange-400 ml-2 rounded-md pl-3 pr-3 pt-2 pb-2 text-white font-semibold"
          onClick={() => {
            const data = filterData(value, allRestaurants);
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="flex flex-wrap pl-10 gap-x-10 text-sm gap-y-8">
        {filteredRestaurants.map((restaurant) => {
          return (
            <Link
              to={"/restaurant/" + restaurant.data.id}
              key={restaurant.data.id}
            >
              <RestaurantCard {...restaurant.data} />
            </Link>
          );
        })}
      </div>
    </>
  );
};
export default Body;
