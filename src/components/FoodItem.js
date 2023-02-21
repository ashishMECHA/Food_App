const FoodItem = ({name, description, cloudinaryImageId, price}) => {

    return(
      <>
        <div className="flex basis-[848px] max-h-[250px] p-5 ml-10">
        <div className="flex flex-col basis-[400px]">
              <p className="font-bold text-lg w-3/5">{name}</p>
              <p className="text-base">&#8377;{price/100}</p>
              {/* <p className="font-light text-sm text-gray-500">{category}</p> */}
              <p className="mt-3.5 leading-5 text-gray-600 w-4/5 text-base overflow-hidden">{description}</p>
              </div> 
              
              <div className="flex-col justify-center items-center">
                {!cloudinaryImageId ?<img className="w-[118px] h-[96px]" src={"https:/res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/byonwwb8mzxyqluxlqpq"} /> : <img className="w-[118px] h-[96px]" src={"https:/res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/" + item?.cloudinaryImageId} />}
                <div className="flex justify-evenly items-center w-[100px] h-[34px] mt-2.5 text-gray-count outline-none border bg-white border-gray ml-[9px]">
                  <button className="text-xl text-orange-500 font-semibold" > - </button>
                  {/* <span className="text-base text-green-600 pt-[2px]"> {cartItems.length} </span> */}
                  <button className="text-green-600 text-xl"> + </button>
                </div>
              </div>
        </div>
        </>
    )
}
export default FoodItem;