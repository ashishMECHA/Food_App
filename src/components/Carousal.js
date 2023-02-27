import { useSelector } from "react-redux";
import CarousalCard from "./CarousalCard";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";



const Carousal = () => {
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 4,
          slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
          slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        }
      };
    const cards = useSelector((store)=>store.carousal.items)
    // console.log("cards--> "+ cards)
    // const imageID = cards[0].data.cards[0].data.creativeId;
    const cardsArray = cards[0];
    // console.log(imageID)
    if(!cards) return null;


    return(
        
        <div className="mt-[4.1rem] mb-[3rem] bg-[#3d4152]">
            <Carousel
  swipeable={true}
  draggable={false}
  showDots={false}
  responsive={responsive}
  ssr={true} // means to render carousel on server-side.
  infinite={false}
  autoPlaySpeed={1000}
  keyBoardControl={true}
  customTransition="all .5"
  transitionDuration={500}
  containerClass="carousel-container"
  removeArrowOnDeviceType={["tablet", "mobile"]}
  dotListClass="custom-dot-list-style"
  itemClass="carousel-item-padding-40-px"
  className=" h-[21rem] items-center ml-20 mr-5"
>
            {Object.values(cardsArray).map((card,i)=>(
                <CarousalCard {...card.data} key={i}/>
            ))}
            </Carousel>
        </div>
        
    )
}
export default Carousal;