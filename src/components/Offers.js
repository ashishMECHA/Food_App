import React from 'react'
import { useSelector } from 'react-redux'
import offers_IMG from '../../src/assets/undraw.svg'
import RestaurantCard from './RestaurantCard'
import { Link } from 'react-router-dom'

const Offers = () => {

const restaurants = useSelector((store) => store.restaurant.allRestaurant);


  return (
    <>
    <div className='mt-[4rem] h-[16rem] bg-[#0e92a3] font-poppins flex justify-between'>
        <div className='flex flex-col'>
            <p className='text-6xl font-bold text-white mt-[5rem] ml-[6rem]'>Offers for you</p>
            <p className='ml-[6rem] mt-[6px] text-lg font-medium text-[#ffffffd7]'>Explore top deals and offers exclusive for you!</p>
        </div>
        <img src={offers_IMG } alt="offers" className="h-56 mt-6 mr-[5rem]" />
    </div>

    <div className="flex flex-wrap pl-10 gap-x-7 text-sm gap-y-8 mb-24">
    {Object.values(restaurants[0]).map((card) => (
      <Link to={"/restaurant/" + card.data.id} key={card.data.id}>
        <RestaurantCard {...card.data} />
      </Link>
    ))}
  </div>
  </>

  )
}

export default Offers