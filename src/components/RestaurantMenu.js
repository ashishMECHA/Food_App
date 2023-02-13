import { useState } from "react";
import { useParams } from "react-router-dom"
import useRestaurant from "../utils/useRestaurant";
import { IMG_CDN_URL } from "./Constants";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";
import { AiFillStar } from "react-icons/ai";
import MenuItem from "./MenuItem";
import MenuShimmer from "./MenuShimmer";
import Shimmer from "./Shimmer";

const RestaurantMenu = () =>{
    const { resId } = useParams();

    const restaurant = useRestaurant(resId);

    const dispatch = useDispatch();
    
    const addFoodItem = (item) => {
      dispatch(addItem(item));
    }

    
    return !restaurant ? <MenuShimmer/> : (
      <>
        <div className="flex h-[14rem] border-2 mt-5 bg-slate-700 text-stone-50">
          <img className="p-7 ml-[5rem]" src={IMG_CDN_URL + restaurant?.cloudinaryImageId} />
          <div className="flex-col mt-[3rem] ml-[10rem]">
          <p className="text-3xl font-bold ">{restaurant?.name}</p>
          <p className="text-xs font-medium pt-2">{restaurant?.cuisines.join(" ,")}</p>
          <p className="text-sm pt-2">{restaurant.labels[1].message}</p>
                    <div className="pt-2 flex justify-between w-[15rem] text-base">
                    <p className="  flex items-center gap-x-1"><AiFillStar/>{restaurant?.avgRating}</p>
                    <div>|</div>
                    <p className="  flex items-center">{restaurant?.sla?.deliveryTime} mins</p>
                    <div>|</div>
                    <h4 className="flex items-center">{restaurant?.costForTwoMsg}</h4>
                    </div>         
          </div>  
        </div>

        <div className="p-5 w-[848px] ml-40">
        <p className="font-semibold text-lg ml-4">Recommended</p>
        <p className="mt-1 text-gray-500 text-sm ml-4">{Object.keys(restaurant?.menu?.items).length} ITEMS</p>
        <div className="flex flex-col justify-center">
          { Object.values(restaurant?.menu?.items).map((item) => (
            // <li className="" key={item.id}>{item.name} - <button className="p-1 bg-green-100" onClick={()=>{addFoodItem()}}>+</button></li>
            <MenuItem key={item.id} item={item}/>
          ))}
        </div>
      </div>
        </>
    )
}
export default RestaurantMenu
/**
 *  <div className="flex">
      <div>
        <h1>Restaurant id: {resId}</h1>
        <h2>{restaurant?.name}</h2>
        <img src={IMG_CDN_URL + restaurant?.cloudinaryImageId} />
        <h3>{restaurant?.area}</h3>
        <h3>{restaurant?.city}</h3>
        <h3>{restaurant?.avgRating} stars</h3>
        <h3>{restaurant?.costForTwoMsg}</h3>
      </div>
      <div>
      </div>
      <div className="p-5">
        <h1>Menu</h1>
        <ul>
          {Object.values(restaurant?.menu?.items).map((item) => (
            <li key={item.id}>{item.name} - <button className="p-1 bg-green-100" onClick={()=>{addFoodItem()}}>Add</button></li>
          ))}
        </ul>
      </div>
    </div>
 */