import React,{useState, useContext} from "react";
import { Link } from "react-router-dom";
import logo from '../assets/logo.jpg'
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Title=()=>{
    return(
<Link to="/"><img data-testid="logo" src={logo} alt="logo" className="h-20 p-2"/></Link>
    )
    
}

const Header = () => {
    const[isLoggedIn, setIsLoggedIn] = useState(true);

    const {user} = useContext(UserContext);

    const cartItems = useSelector((store) => store.cart.items);

    return(
        <div className="flex justify-between border-b-2 border-slate-200 pl-10 pr-10">
            {/* {Title()} */}
            <Title/>
            <div >
                <ul className="flex pt-8 text-base font-medium text-slate-800 ">
                    <Link to="/"><li className="px-[1.5rem] hover:text-orange-400">Home</li></Link>
                    <Link to="/about"><li className="px-[1.5rem] hover:text-orange-400">About</li></Link>
                    <Link to="/contact"><li className="px-[1.5rem] hover:text-orange-400">Help</li></Link>
                    <Link to="/cart"><li className="px-[1.5rem] hover:text-orange-400">Cart -{cartItems.length}</li></Link>
                    {/* <li>{user.name}</li> */}
                    {/* <li>{user.email}</li> */}
                    <li className="px-[1.5rem] hover:text-orange-400">{isLoggedIn ? <button onClick={()=>{setIsLoggedIn(false)}}>Login</button> : <button onClick={()=>{setIsLoggedIn(true)}}>Logout</button>}</li>
                </ul>
                
            </div>
            
        </div>
    )
}
export default Header