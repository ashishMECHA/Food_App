import { useSelector } from "react-redux"
import FoodItem from "./FoodItem"




const Cart = () => {

    const cartItems = useSelector((store) => store.cart.items);

    return(
        <div>
            <p className="font-bold text-3xl"> Cart Items - {cartItems.length}</p>
           
            <FoodItem  {...cartItems[0]}/>
           
        </div>
    )
}
export default Cart