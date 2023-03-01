import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../utils/cartSlice";


const MenuItem = ({item}) => {
  const {id, name, cloudinaryImageId, description, price, category } = item;
  const[itemCount, setItemCount] = useState(0);


  const dispatch = useDispatch();

  const addFoodItem = (item) => {
    dispatch(addItem(item))
    setItemCount(itemCount + 1);
  }
  const removeFoodItem = (id) => {
    let updatedCount;
    dispatch(removeItem(id));
    updatedCount = itemCount > 0 ? itemCount - 1 : 0;
    setItemCount(updatedCount);
  };


    return(
        <div className="flex justify-between basis-[848px] max-h-[200px] p-5 border-b border-gray font-poppins" key={id}>
        <div className="flex flex-col basis-[400px]">
              <p className="font-bold text-lg w-3/5 text-slate-800">{name}</p>
              <p className="text-base">&#8377;{price/100}</p>
              <p className="font-light text-sm text-gray-700">{category}</p>
              <p className="mt-3.5 leading-4 text-gray-500 w-4/5 text-[14px] overflow-hidden">{description}</p>
              </div> 
              
              <div className="flex-col justify-center items-center">
                {!cloudinaryImageId ?<img className="w-[118px] h-[96px] rounded-md" src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/byonwwb8mzxyqluxlqpq"} /> : <img className="w-[118px] h-[96px] rounded-md" src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/" + item?.cloudinaryImageId} />}
                <div className="flex justify-evenly items-center w-[100px] h-[34px] mt-2.5 text-gray-count outline-none border bg-white border-gray ml-[9px]">
                  <button className="text-xl text-orange-500 font-semibold" onClick={()=>{removeFoodItem(id)}}> - </button>
                  <span className="text-base text-green-600 pt-[2px]"> {itemCount} </span>
                  <button className="text-green-600 text-xl" onClick={()=>{addFoodItem(item)}}> + </button>
                </div>
              </div>
        </div>
    )
}
export default MenuItem