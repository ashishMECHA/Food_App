import { useState } from "react";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";
import { FAQ } from "../mocks/FAQ";

const Section = ({title, description,isVisible, setIsVisible}) => {
    return(
        <div className="flex flex-col shadow rounded-md p-2.5 m-2.5">
            <p className="flex text-base justify-between font-poppins font-semibold text-zinc-800">{title} 
            {isVisible ? <SlArrowUp onClick={() => setIsVisible(false)} className="ml-2 font-semibold cursor-pointer"/> : <SlArrowDown onClick={() => setIsVisible(true)} className="ml-2 font-semibold cursor-pointer"/>}
            </p>
            {isVisible && <p className="text-sm font-poppins text-gray-700 pt-1">{description}</p>}
        </div>
    )
}

const Help = () =>{
    const [visibleSection, setVisibleSection] = useState(""); /* Initially description of all questions are hidden */

  return (
    <div className="container mt-20">
      <div className="">
      <h1 className="text-3xl font-poppins text-zinc-800 font-bold pb-5 ml-[50%]"> FAQ</h1>
      {FAQ.map((question) => {
        return (
          <Section key={question.id} id={question.id} title={question.title} description={question.description}
          isVisible={visibleSection === question.id }
          setIsVisible={(display) => {
            if(display) {
              setVisibleSection(question.id);
            } else {
              setVisibleSection(" ");
            }
          }
          } />
  
        )
      }
      )}
      </div>
    </div>
  );
};
export default Help