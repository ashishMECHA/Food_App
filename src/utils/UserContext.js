import { createContext } from "react";

const UserContext = createContext({
    user:{
    name: "Ashish",
    email: "dummy@gmail.com",
    }
})
export default UserContext