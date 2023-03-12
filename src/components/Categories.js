import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCategories } from "./categoriesSlice";

function CategoriesBar() {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories.categories);
  const status = useSelector((state) => state.categories.status);
  const error = useSelector((state) => state.categories.error);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "failed") {
    return <div>{error}</div>;
  }

  return (
    <div className="flex justify-center mt-4">
      <div className="flex border-b-2">
        {["All", ...categories].map((category) => (
          <button
            key={category}
            className={`px-4 py-2 ${
              activeCategory === category
                ? "border-b-2 border-blue-500"
                : ""
            }`}
            onClick={() => handleClick(category)}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
}

export default CategoriesBar;





























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
