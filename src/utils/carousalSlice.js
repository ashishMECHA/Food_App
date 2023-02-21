import { createSlice } from "@reduxjs/toolkit";
const carousalSlice = createSlice({
    name: "carousal",
    initialState: {
        items: [],
    },
    reducers:{
        addItems: (state,action)=>{
            state.items.push(action.payload);
        }
    }
})
export const {addItems} = carousalSlice.actions;
export default carousalSlice.reducer;