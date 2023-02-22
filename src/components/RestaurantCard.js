import React from "react";
import { AiFillStar } from "react-icons/ai";
import { MdLocalOffer } from "react-icons/md"
// const RestaurantCard = ({ restaurant }) =>{
//     const { name, cloudinaryImageId, cuisines, lastMileTravelString} = restaurant.data;
//     return(
//         <div className="card">
//             <img src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"+ cloudinaryImageId} alt="" />
//             <h2>{name}</h2>
//             <h3>{cuisines.join(", ")}</h3>
//             <h4>{lastMileTravelString} minutes</h4>
//         </div>
//     )
// }

const RestaurantCard = ({name, cloudinaryImageId, cuisines, avgRating, deliveryTime, costForTwoString,aggregatedDiscountInfo}) => {

    const styleRating = {
        backgroundColor: parseFloat(avgRating) < 4.0 ? "#db7c38" : "#48c479",
    }
    
    return(
                <div className="w-72 h-[21rem] p-5 hover:shadow-2xl">
                    <img src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"+ cloudinaryImageId} alt="" />
                    <h2 className="pb-1 text-slate-800 font-semibold text-base pt-[6px]">{name}</h2>
                    <h3 className="text-gray-500 text-xs w-4/5 overflow-hidden h-[32px]">{cuisines}</h3>
                    <div className="pt-2 flex justify-between border-b pb-4">
                    <p className="pl-1 pr-1 text-xs flex items-center text-stone-50 gap-x-1" style={styleRating}><AiFillStar/>{avgRating}</p>
                    <div className="text-gray-500">•</div>
                    <p className="text-xs text-gray-500">{deliveryTime} MINS</p>
                    <div className="text-gray-500">•</div>
                    <h4 className="text-xs text-gray-500">{costForTwoString}</h4>
                    </div>
                    <div className="flex items-center gap-x-1 text-amber-800 pt-2"><MdLocalOffer/>{aggregatedDiscountInfo?.shortDescriptionList[0]?.meta}</div>
                    
                </div>
            )
}


export default RestaurantCard