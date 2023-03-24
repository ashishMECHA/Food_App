import useRestaurant from "../utils/useRestaurant";
import MenuShimmer from "./MenuShimmer";
import RestaurantInfo from "./RestaurantInfo";
import RestaurantMenuList from "./RestaurantMenuList";
import { useParams } from "react-router-dom";
const RestaurantDetails = () => {
    const { resId } = useParams(); /* Read dynamic URL params */
  
    const restaurant =
      useRestaurant(
        resId
      ); /* Passing resId to Custom Hooks to fetch restaurant details and returns it */
  
    return !restaurant ? (
      <MenuShimmer />
    ) : (
      <div className="">
        <RestaurantInfo {...restaurant.info} />
        <RestaurantMenuList menu={restaurant.menu} />
  
      </div>
    );
  };
  
  export default RestaurantDetails;