import React from 'react'
import CartFallback from './CartFallback';
import ItemQuantity from "./ItemQuantity";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import useItemTotal from "../utils/useItemTotal";
import RestaurantItemCategory from "./RestaurantItemCategory.js";
import RestaurantNestedItemCategory from "./RestaurantNestedItemCategory.js";
import CheckOut from './CheckOut';


const RestaurantMenuList = ({menu}) => {
   // get cart items from redux store
const cartItems = useSelector((store) => store.cart.items);
// get total price for cart items
const getItemTotal = useItemTotal();

  return (
    <div className="flex font-poppins justify-center mt-7 ">
      <div className="border-[1px] h-96 scrollbar-thin xl:w-[70%] lg:w-[70%] md:w-[70%]">
      {menu.map((item, index) => (
        <div key={index}>
          {item.categories ? (
            <RestaurantNestedItemCategory nestedCategory={item} />
          ) : (
            <RestaurantItemCategory itemCategory={item} />
          )}
        </div>
      ))}
      </div>

      <CheckOut/>
    </div>
  )
}

export default RestaurantMenuList