import { createSlice } from "@reduxjs/toolkit";

const restaurantSlice = createSlice({
    name: "restaurant",
    initialState: {
        allRestaurant : [],
    },
    reducers: {
        addData: (state,action)=>{
            state.allRestaurant.push(action.payload)
        }
    }
})
export const {addData} = restaurantSlice.actions;
export default restaurantSlice.reducer;