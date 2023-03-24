import React from 'react'
import useItemTotal from '../utils/useItemTotal';
import CartFallback from './CartFallback';
import ItemQuantity from "./ItemQuantity";
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
const CheckOut = () => {
    const itemsCount = useSelector((store) => store.cart.totalItemsCount);
    const cartItems = useSelector((store) => store.cart.items);
    const getItemsTotal = useItemTotal();
    console.log(Object.values(cartItems).length)
    console.log(itemsCount)


    // if() return(
    //     <div className="w-[348px] shadow-xl font-poppins flex flex-col mt-5 ml-10 pl-2 pr-2 mb-4">
    //       <CartFallback
    //        text={
    //           "Good food is always cooking! Go ahead, order some yummy items from the menu."
    //         }
    //       />
    //     </div>
    // )
  return Object.values(cartItems).length>0 ?(
    <div className="font-poppins flex flex-col ml-10 pl-2 pr-2 mb-4 shadow-xl">
          <p className="font-medium">Cart</p>
          <p className="text-gray-400 font-light">{itemsCount}</p>
          <div className="scrollbar-thin h-40">
            {Object.values(cartItems).map((item) => (
              <div className="flex items-center mt-2 justify-between">
                <p className="w-40 text-sm">{item.name}</p>
                <div className="w-30 px-5">
                  <ItemQuantity item={item} key={item.id} />
                </div>

                <p className="w-10 font-light text-sm">
                  {"₹ " + (item.price / 100) * item.quantity}
                </p>
              </div>
            ))}
          </div>
          <div className="border border-gray my-2"></div>
          <div className="flex justify-between mt-4">
            <p className="text-sm text-bio ">Sub Total</p>
            {"₹ " + getItemsTotal()}
          </div>
          <div className="flex justify-center mt-7 mb-2">
            <Link to="/cart">
              {" "}
              <button className="bg-[#5faf65] px-4 py-2 text-white hover:drop-shadow-lg backdrop-blur">
                {" "}
                CHECKOUT
              </button>
            </Link>
          </div>
        </div>
  ) : (
    <div className="w-[348px] shadow-xl font-poppins flex flex-col ml-10 pr-2 mb-4">
          <CartFallback
            text={
              "Good food is always cooking! Go ahead, order some yummy items from the menu."
            }
          />
        </div>
  )
}

export default CheckOut