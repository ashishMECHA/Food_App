import React, { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addData } from "../utils/restaurantSlice";
import { addItems } from "../utils/carousalSlice";
import Carousal from "./Carousal";
import { CATEGORIES_URL } from "./Constants";
import { redirect } from "react-router-dom";

const Body = () => {
  const dispatch = useDispatch();
  const restaurants = useSelector((store) => store.restaurant.allRestaurant);
  const [activeElement, setActiveElement] = useState("");
  const [sort, setSorts] = useState([]);
  const [categoryRestaurants, setcategoryRestaurants] = useState([]);
  const [showShimmer, setShowShimmer] = useState(false);

  const handleClick = (value, param) => {
    setShowShimmer(true);
    setActiveElement(value);
    if (param === "RELEVANCE") {
      setShowShimmer(false);
      redirect("/");
      return;
    } else {
      getByCategoryData(param);
    }
  };

  useEffect(() => {
    getRestaurant();
  }, []);

  async function getByCategoryData(param) {
    const data = await fetch(CATEGORIES_URL + param);
    const response = await data.json();
    setcategoryRestaurants(response?.data?.cards[0]?.data?.data?.cards);
    setShowShimmer(false);
    // console.log(categoryRestaurants);
  }

  async function getRestaurant() {
    const data = await fetch(
      "https://corsanywhere.herokuapp.com/https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.7095&lng=76.7744&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    dispatch(addData(json?.data?.cards[2]?.data?.data?.cards));
    dispatch(addItems(json?.data?.cards[0]?.data?.data?.cards));
    setSorts(json.data.sorts);
  }

  if (!restaurants) return null;
  return restaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <Carousal />

      {/* CATEGORY SECTION */}
      <div className="">
        <div className="flex pl-[3.6rem] items-center font-poppins text-[#3d4152] gap-x-[296px]">
          <div className="text-3xl font-semibold">
            {restaurants[0].length} restaurants
          </div>
          <div className="flex gap-x-10 text-center cursor-pointer">
            {Object.values(sort).map((category) => (
              <p
                onClick={() => handleClick(category.title, category.key)}
                key={category.key}
                className={
                  activeElement === category.title
                    ? "border-b-[1px] border-b-[#161824] cursor-pointer"
                    : "cursor-pointer hover:text-[#161824]"
                }
              >
                {category.title}
              </p>
            ))}
          </div>
        </div>

        {/***** CARDS ****/}
        {activeElement ? (
          <div className="flex flex-wrap pl-10 gap-x-7 text-sm gap-y-8 mb-24">
            {categoryRestaurants.length === 0 || showShimmer ? (
              <Shimmer />
            ) : (
              categoryRestaurants.map((card) => (
                <Link to={"/restaurant/" + card.data.id} key={card.data.id}>
                  <RestaurantCard {...card.data} />
                </Link>
              ))
            )}
          </div>
        ) : (
          <div className="flex flex-wrap pl-10 gap-x-7 text-sm gap-y-8 mb-24">
            {Object.values(restaurants[0]).map((card) => (
              <Link to={"/restaurant/" + card.data.id} key={card.data.id}>
                <RestaurantCard {...card.data} />
              </Link>
            ))}
          </div>
        )}
      </div>
    </>
  );
};
export default Body;
