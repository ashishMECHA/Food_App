import React, { useEffect,useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link, Outlet } from "react-router-dom";
import useOnline from "../utils/useOnline";
import { useDispatch, useSelector } from "react-redux";
import { addData } from "../utils/restaurantSlice";
import { addItems } from "../utils/carousalSlice";
import Carousal from "./Carousal";
import { keywords } from "./Categories";


const Body = () => {
  const dispatch = useDispatch();
  const restaurants = useSelector((store)=>store.restaurant.allRestaurant);
  const[activeElement, setActiveElement]= useState("Relevance")
  const[restrau, setRestrau] = useState([]);
  const[dTRestaurants, setDTRestaurants] = useState([])
  const[costL2H, setCostL2H] = useState([])
  const[costH2L, setCostH2L] = useState([])

  
  const handleClick=(value)=>{
    setActiveElement(value);
  }
  // console.log(restaurants[0])
  useEffect(() => {
    getRestaurant();
    getByRating();
    getByDeliveryTime();
    getByCostL2H()
    getByCostH2L()
  }, []);


  async function getRestaurant() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.7095&lng=76.7744&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    dispatch(addData(json?.data?.cards[2]?.data?.data?.cards))
    dispatch(addItems(json?.data?.cards[0]?.data?.data?.cards))
    
  }
  console.log("RESTAURANTS---->"+restaurants)
  async function getByRating() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.7095&lng=76.7744&sortBy=RATING&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setRestrau(json?.data?.cards[0]?.data?.data?.cards);
    console.log("BY RATING---->"+restrau)
  }
  async function getByDeliveryTime() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.7095&lng=76.7744&sortBy=DELIVERY_TIME&page_type=DESKTOP_WEB_LISTING"
    );
    const response = await data.json();
    setDTRestaurants(response?.data?.cards[0]?.data?.data?.cards);
    console.log("BY DT---->"+dTRestaurants);
  }
  async function getByCostL2H() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.7095&lng=76.7744&sortBy=COST_FOR_TWO&page_type=DESKTOP_WEB_LISTING"
    );
    const response = await data.json();
    setCostL2H(response?.data?.cards[0]?.data?.data?.cards);
    console.log("BY L2H---->"+costL2H);
    }
    async function getByCostH2L() {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.7095&lng=76.7744&sortBy=COST_FOR_TWO_H2L&page_type=DESKTOP_WEB_LISTING"
      );
      const response = await data.json();
      setCostH2L(response?.data?.cards[0]?.data?.data?.cards);
      }


  // const online = useOnline();
  // if (!online) {
  //   return <h1>Offline!! Please check your internet connection</h1>;
  // }
  if (!restaurants) return null;
  return restaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <>
    <Carousal/>
  
    {/* CATEGORY SECTION */}
    <div className="flex pl-[3.6rem] pr-[3.4rem] justify-between items-center font-poppins text-[#3d4152]">
        <div className= 'text-3xl font-semibold'>
            {restaurants[0].length} restaurants
        </div>
        <div className='flex gap-x-9 text-center items-center cursor-pointer'>
          {
            keywords.map((value,i)=>(
              <p onClick={()=>handleClick(value)} key={i} className={activeElement === value ? 'border-b-[1px] border-b-[#161824] cursor-pointer' :'cursor-pointer hover:text-[#161824]'}>{value}</p>
            )) 
          }
        </div>
    </div>

          {activeElement==="Rating"? <div className="flex flex-wrap pl-10 gap-x-10 text-sm gap-y-8 mb-24">
        {restrau.map((card)=>(
          <Link to={"/restaurant/" + card.data.id} key={card.data.id}>
          <RestaurantCard {...card.data}/>
          </Link>
        ))}


      </div>: activeElement==="Delivery Time"? <div className="flex flex-wrap pl-10 gap-x-10 text-sm gap-y-8 mb-24">
        {dTRestaurants.map((card)=>(
          <Link to={"/restaurant/" + card.data.id} key={card.data.id}>
          <RestaurantCard {...card.data}/>
          </Link>
        ))}
        

      </div> : activeElement==="Cost: Low To High"? <div className="flex flex-wrap pl-10 gap-x-10 text-sm gap-y-8 mb-24">
        {costL2H.map((card)=>(
          <Link to={"/restaurant/" + card.data.id} key={card.data.id}>
          <RestaurantCard {...card.data}/>
          </Link>
        ))}
      </div> : activeElement==="Cost: High To Low"? <div className="flex flex-wrap pl-10 gap-x-10 text-sm gap-y-8 mb-24">
        {costH2L.map((card)=>(
          <Link to={"/restaurant/" + card.data.id} key={card.data.id}>
          <RestaurantCard {...card.data}/>
          </Link>
        ))}
      </div> :
      
      <div className="flex flex-wrap pl-10 gap-x-10 text-sm gap-y-8 mb-24">
        {Object.values(restaurants[0]).map((card)=>(
          <Link to={"/restaurant/" + card.data.id} key={card.data.id}>
          <RestaurantCard {...card.data}/>
          </Link>
        ))}
      </div>}
    </>
  );
        }
export default Body;
