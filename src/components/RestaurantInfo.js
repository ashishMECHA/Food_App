import React from 'react'
import { IMG_CDN_URL } from "./Constants";
import { AiFillStar } from "react-icons/ai";

const RestaurantInfo = (restaurant) => {
  return (
    <div className="flex h-[14rem] bg-slate-700 text-stone-50 mt-[4rem] font-poppins">
        <img
          className="p-7 ml-[5rem]"
          src={IMG_CDN_URL + restaurant?.cloudinaryImageId}
        />
        <div className="flex-col mt-[3rem] ml-[10rem]">
          <p className="text-3xl font-bold ">{restaurant?.name}</p>
          <p className="text-xs font-medium pt-2">
            {restaurant?.cuisines.join(" ,")}
          </p>
          <p className="text-sm pt-2">{restaurant.labels[1].message}</p>
          <div className="pt-2 flex justify-between w-[15rem] text-base">
            <p className="  flex items-center gap-x-1">
              <AiFillStar />
              {restaurant?.avgRating}
            </p>
            <div>|</div>
            <p className="  flex items-center">
              {restaurant?.sla?.deliveryTime} mins
            </p>
            <div>|</div>
            <h4 className="flex items-center">{restaurant?.costForTwoMsg}</h4>
          </div>
        </div>
      </div>
  )
}

export default RestaurantInfo;