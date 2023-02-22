// import React, { useState } from 'react'
// import { useSelector } from 'react-redux';

// const Categories = () => {
//   const restaurants = useSelector((store)=>store.restaurant.allRestaurant);
//   const[activeElement, setActiveElement]= useState(null)
  
//   const handleClick=(value)=>{
//     setActiveElement(value);
//   }

//   return (
//     <div className="flex pl-[3.6rem] pr-[3.4rem] justify-between items-center font-poppins text-[#3d4152]">
//         <div className= 'text-3xl font-semibold'>
//             {restaurants[0].length} restaurants
//         </div>
//         <div className='flex gap-x-9 text-center items-center cursor-pointer'>
//           {
//             keywords.map((value,i)=>(
//               <p onClick={()=>handleClick(value)} key={i} className={activeElement === value ? 'border-b-[1px] border-b-[#161824] cursor-pointer' :'cursor-pointer hover:text-[#161824]'}>{value}</p>
//             )) 
//           }
//         </div>
//     </div>
//   )
// }

// export default Categories
export const keywords = [
  "Relevance",
  "Delivery Time",
  "Rating",
  "Cost: Low To High",
  "Cost: High To Low",
]