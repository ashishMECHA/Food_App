import { Outlet } from "react-router-dom"

const About = () => {
    return(
        <>
        
        <h1>About Us Page</h1>
        <p>
            {" "}
            This is Namaste React Live Course Chapter 07 - Finding the Path
        </p>
        <Outlet/>
        </>
    )
}
export default About