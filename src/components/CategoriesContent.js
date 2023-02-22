import { useState, useEffect } from "react";
import { Link, useParams, useSearchParams } from "react-router-dom";
import { CATEGORIES_URL} from "./Constants";
import RestaurantCard from "./RestaurantCard";


export const Category = () => {
  const[sortWidget, setSortWidget] = useState(false);
    const[categoryRestaurants, setcategoryRestaurants] = useState([])
    useEffect(()=>{
      getByCategoryData()
    },[])
    
    const {category} = useParams()
    console.log("category---> "+category)
    
    async function getByCategoryData() {
        const data = await fetch(CATEGORIES_URL + category);
        const response = await data.json();
        console.log("RESPONSE--> "+response)
        setcategoryRestaurants(response?.data?.cards[0]?.data?.data?.cards);
        console.log(categoryRestaurants)
      }
    return(
       <div className="flex flex-wrap pl-10 gap-x-10 text-sm gap-y-8 mb-24">
      {Object.values(categoryRestaurants).map((card)=>(
        <Link to={"/restaurant/" + card.data.id} key={card.data.id}>
        <RestaurantCard {...card.data}/>
        </Link>
      ))}
    </div>
    )
}