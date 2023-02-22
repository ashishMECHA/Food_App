import { useSelector } from "react-redux";
import CarousalCard from "./CarousalCard";



const Carousal = () => {
    const cards = useSelector((store)=>store.carousal.items)
    // console.log("cards--> "+ cards)
    // const imageID = cards[0].data.cards[0].data.creativeId;
    const cardsArray = cards[0];
    // console.log(imageID)
    if(!cards) return null;
    return(
        <div className="mt-[4.1rem] mb-[3rem] bg-[#3d4152] flex gap-x-7 justify-around h-[21rem] items-center">
            {Object.values(cardsArray).map((card,i)=>(
                <CarousalCard {...card.data} key={i}/>
            ))}
            
        </div>
    )
}
export default Carousal;