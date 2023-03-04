

const Shimmer=()=>{
    return(<>




        <div className="flex flex-wrap pl-[4.5rem] gap-x-12 gap-y-7 mt-[5.5rem] animate-pulse ml-auto mr-auto">
            
            {Array(15).fill("").map((e, index)=>(
            <div key={index} className="w-64">
            <div className="h-[180px] bg-[#999] "></div>
            <div className="w-3/5 mt-2.5 h-[15px]  bg-[#999] "></div>
            <div className="w-4/5 mt-1 h-[15px]  bg-[#999]"></div>
            <div className="w-[9/10] mt-[18px] h-[15px]  bg-[#999]"></div>
          </div>
            ))}
        </div>
    </>
        
    )
}
export default Shimmer