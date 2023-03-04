import React,{useState,useEffect} from 'react'
import { useSelector } from 'react-redux';
import { filterData } from '../utils/helper';
import RestaurantCard from './RestaurantCard';
import { Link } from 'react-router-dom';

const Search = () => {
    const [value, setValue] = useState("");
    const restaurants = useSelector((store)=>store.restaurant.allRestaurant);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);


    return(
        <div className='mb-96'>
        <div className="ml-[16rem] mb-5 mt-[80px] text-base">
        <input
          className="bg-gray-200 pl-2 pt-3 pb-3 pr-40 mt-4 w-[70%] outline-none"
          placeholder="Search for restaurants and food"
          type="text"
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
        <button className="bg-[#b31e1e] pl-4 pr-4 pt-3 pb-3 text-white font-semibold hover:bg-orange-200 hover:text-[#b31e1e]"
          onClick={() => {
            if(value.length==0){
              return;
            } else{
              const data = filterData(value, restaurants[0]);
              setFilteredRestaurants(data);
            }
            
          }}
        >
          Search
        </button>
      </div>
      <p className='font-poppins text-[#3d4152] ml-[3.8rem] mt-7 text-3xl font-semibold'>{filteredRestaurants.length} restaurants found </p>
      <div className='flex flex-wrap mt-4 ml-10'>
      {filteredRestaurants && Object.values(filteredRestaurants).map((card)=>(
          <Link to={"/restaurant/" + card.data.id} key={card.data.id}>
          <RestaurantCard {...card.data}/>
          </Link>
        ))}
      </div>
        
      </div>
      
      
    )
}
export default Search