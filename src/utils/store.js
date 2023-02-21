import { configureStore } from "@reduxjs/toolkit";
import carousalSlice from "./carousalSlice";
import cartSlice from "./cartSlice";
import restaurantSlice from "./restaurantSlice";

const store = configureStore({
    reducer: {
        cart: cartSlice,
        restaurant: restaurantSlice,
        carousal: carousalSlice,
    }
});

export default store;

/**
 * Create Store
 * - configureStore() - imported from RTK
 * - Provide my store to app
 * - <Provider store = store/> - imported from react-redux
 * 
 * Slice
 *  - importedd from RTK- createSlice({
 *      name: "",
 *      initialState: [],
 *      reducers: {
 *          addItem: (state, action)=> {state=action.payload}
 *       }
 *  }) 
 * export {addItem, removeItem} = cartSlice.actions;
 * export default cartSlice.reducer;
 * 
 * after creating slice Put that Slice into Store
 *  - {
 * reducer: {
 *      cart: cartSlice,
 *   }
 * }
 */