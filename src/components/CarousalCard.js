import React from 'react'
import { CAROUSAL_IMG_CDN } from "./Constants";

const CarousalCard = ({creativeId}) => {
  
  return (
    <div>
      <img className="w-60 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300" src={CAROUSAL_IMG_CDN + creativeId} alt="" />
    </div>
  )
}

export default CarousalCard;