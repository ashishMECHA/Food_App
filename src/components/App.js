import React from "react"
import ReactDOM from "react-dom/client"
import Header from "./Header"
import Body from "./Body"
import Footer from "./Footer"
import Profile from "./Profile"
// import About from "./About"
import Cart from "./Cart"
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"
import Help from "./Help"
// import RestaurantMenu from "./RestaurantMenu"
import ProfileClass from "./ProfileClass"
import { Provider } from "react-redux"
import store from "../utils/store"
import Search from "./Search"
import Offers from "./Offers"
import RestaurantDetails from "./RestaurantDetails"



const AppLayout=()=>{
    return(
        <Provider store={store}>
        <Header/>
        <Outlet/>
        <Footer/>
        </Provider>
        
    )
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout/>,
        errorElement: <Error/>,
        children:[
        {
            path: "/about",
            element: <Profile/>,
            children:[
                {
                    path: "profile",
                    element: <ProfileClass/>, 
                }
            ]
        },
        {
            path: "/",
            element: <Body/>,
        },
        {
            path: "/help",
            element: <Help/>,
        },
        {
            path: "/offers",
            element: <Offers/>,
        },
        {
            path: "/cart",
            element: <Cart/>,
        },
        {
            path: "/restaurant/:resId",
            element: <RestaurantDetails/>,
        },
        {
            path: "/search",
            element: <Search/>
        }
    ]
    },       
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter}/>);
