import React, { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
// import { restaurantList } from "./Constants";
import Shimmer from "./Shimmer";
import { filterData } from "../utils/helper";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import { useDispatch, useSelector } from "react-redux";
import { addData } from "../utils/restaurantSlice";
import { addItems } from "../utils/carousalSlice";
import Carousal from "./Carousal";
import Categories from "./Categories";


const Body = () => {
  
  // const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  // const [allRestaurants, setAllRestaurants] = useState([]);

  const dispatch = useDispatch();
  const restaurants = useSelector((store)=>store.restaurant.allRestaurant);
  // console.log(restaurants[0])
  

  useEffect(() => {
    getRestaurant();
  }, []);

  async function getRestaurant() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.7095&lng=76.7744&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    // setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    // setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    dispatch(addData(json?.data?.cards[2]?.data?.data?.cards))
    dispatch(addItems(json?.data?.cards[0]?.data?.data?.cards))
  }

  const online = useOnline();
  if (!online) {
    return <h1>Offline!! Please check your internet connection</h1>;
  }
  if (!restaurants) return null;
  // if(filteredRestaurants?.length === 0) return <h1>No restaurants matched your search</h1>

  return restaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <>
    <Carousal/>
      <Categories/>
      <div className="flex flex-wrap pl-10 gap-x-10 text-sm gap-y-8 mb-24">
        {Object.values(restaurants[0]).map((card)=>(
          <Link to={"/restaurant/" + card.data.id} key={card.data.id}>
          <RestaurantCard {...card.data}/>
          </Link>
        ))}
        

      </div>
    </>
  );
};
export default Body;
