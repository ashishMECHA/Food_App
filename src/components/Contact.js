import { useState } from "react";
const Section = ({title, description,isVisible, setIsVisible}) => {
    return(
        <div className=" border border-black p-2 m-2">
            <p className="text-lg font-bold">{title} 
            {isVisible ? <button onClick={() => setIsVisible(false)} className="ml-2 font-semibold border rounded-md bg-yellow-200">Hide</button> : <button onClick={() => setIsVisible(true)} className="ml-2 font-semibold border rounded-md bg-green-300">Show</button>}
            </p>
            {isVisible && <p>{description}</p>}
        </div>
    )
}

const Contact = () =>{
    const [visibleSection, setIsVisibleSection] = useState("");
    return(
        <>
        <Section title={"About US"} 
        description={"When we want to pass some props from child component to parent or its siblings, we can use lifting up state technique. It can be thought as if the control is handed over to the parent and let the child modify the data through the function that is passed to child as props. There is a single sourace of truth maintained by the parent."}
        isVisible={visibleSection === "about"}
        setIsVisible={(display) => {
            if(display) {
                setIsVisibleSection("about")
            } else {
            setIsVisibleSection(" ")
            }
        }
        }
        />
        <Section title="Team Insta " 
        description="When we want to pass some props from child component to parent or its siblings, we can use lifting up state technique."
        isVisible={visibleSection === "team"}
        setIsVisible={(display) => {
            if(display) {
                setIsVisibleSection("team")
            } else{
                setIsVisibleSection(" ")
            }
            
        }
            
        }
        />
        <Section title="Careers" 
        description="When we want to pass some props from child component to parent or its siblings, we can use lifting up state technique."
        isVisible={visibleSection === "career"}
        setIsVisible={(display) => {
            if(display) {
                setIsVisibleSection("career")
            } else{
                setIsVisibleSection(" ")
            }
            
        }
            
        }
        />
        </>
    )
}
export default Contact