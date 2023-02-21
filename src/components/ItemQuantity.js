import React from 'react'
import { addItem, removeItem } from '../utils/cartSlice';
import { useDispatch, useSelector } from 'react-redux'


const ItemQuantity = ({item}) => {
    const dispatch = useDispatch();
    
  return (
    <div className="flex border border-gray w-16 justify-around items-center">
        <button onClick={()=>{dispatch(removeItem(item.id))}} className="text-xl">-</button>
        <p className="text-green text-sm">{item.quantity}</p>
        <button onClick={()=>{dispatch(addItem(item))}} className="hover:scale-110 delay-100 transition-all ">+</button>
    </div>
  )
}

export default ItemQuantity
