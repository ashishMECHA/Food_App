

const Shimmer=()=>{
    return(<>
        <div className="flex flex-wrap pl-[4.5rem] gap-x-16 gap-y-16 mt-[5.5rem] animate-pulse">
            
            {Array(15).fill("").map((e, index)=>(
            <div key={index} className="">
            <div className="w-[260px] h-[180px] bg-[#999] "></div>
            <div className="w-3/5 mt-2.5 h-[15px]  bg-[#999] "></div>
            <div className="w-4/5 mt-1 h-[15px]  bg-[#999]"></div>
            <div className="w-full mt-[18px] h-[15px]  bg-[#999]"></div>
          </div>
            ))}
        </div>
    </>
        
    )
}
export default Shimmer