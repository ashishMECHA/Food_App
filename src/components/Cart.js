import { useDispatch, useSelector } from "react-redux";
import CartFallback from "./CartFallback";
import ItemQuantity from "./ItemQuantity";
import useItemTotal from "../utils/useItemTotal";
import { Link } from "react-router-dom";



const Cart = () => {

    const cartItems = useSelector((store) => store.cart.items);
    const itemsCount = useSelector((store)=> store.cart.totalItemsCount);
    const getItemsTotal = useItemTotal();
    // console.log(cartItems)


    return Object.values(cartItems).length>0 ?(
        <>
        <div className="flex mt-20 font-poppins">
            <div className="flex flex-col p-10 w-[40rem]">
                <div className="flex flex-col shadow-md p-5 mb-2">
                    <p className="text-lg font-medium text-[#1d2141]">Delivery Address</p>
                    <div className="flex shadow-md p-10 m-2 text-center items-center justify-around">
                        <div className="flex flex-col shadow-xl p-2 items-center">
                            <p className="font-medium text-[#1d2141]">Home</p>
                            <p className="text-xs text-gray-400">Sector 32, Chandigarh</p>
                            <button className="text-sm bg-[#5faf65] text-white mt-1 pl-2 pr-2">DELIVER HERE</button>
                        </div>
                        <div className="flex flex-col shadow-xl p-2 items-center">
                            <p className="font-medium text-[#1d2141]">Work</p>
                            <p className="text-xs text-gray-400">AXY, Chandigarh</p>
                            <button className="text-sm bg-[#5faf65] text-white mt-1 pl-2 pr-2">DELIVER HERE</button>
                        </div>
                    </div>
                </div>
                <div className="shadow-md p-5 flex flex-col">
                    <p className="text-lg font-medium text-[#1d2141]">Payment Method</p>
                    <div className="flex shadow-md p-10 m-2 text-center items-center justify-around">
                        <div className="flex flex-col shadow-xl p-2 items-center">
                            <p className="font-medium text-[#1d2141]">Pay Online</p>
                            <p className="text-xs text-gray-400">UPI/Card Payment</p>
                            <button className="text-sm bg-[#5faf65] text-white mt-1 pl-2 pr-2">CHOOSE PAYMENT</button>
                        </div>
                        <div className="flex flex-col shadow-xl p-2 items-center">
                            <p className="font-medium text-[#1d2141]">Pay Offline</p>
                            <p className="text-xs text-gray-400">Cash On Delivery</p>
                            <button className="text-sm bg-[#5faf65] text-white mt-1 pl-2 pr-2">CHOOSE PAYMENT</button>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                   <div className="font-poppins flex flex-col mt-5 ml-20 pl-2 pr-2 mb-4 shadow-xl">
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
                         PAY
                       </button>
                     </Link>
                   </div>
                 </div> 
            </div>
        </div>
        </>
    ):(
        <div className="container mx-auto mt-20 mb-[11rem]">
        <CartFallback
          text={"Your cart is empty ! "}
          btnText={"SEE RESTAURANTS NEAR YOU"}
        />
      </div>
    )
}
export default Cart;