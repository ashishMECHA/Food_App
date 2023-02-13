const MenuShimmer = () => {
    return(<>
        <div className="mt-5 min-h-[77vh] min-w-full animate-pulse">
      <div className="flex basis-full h-60 items-center p-8 bg-[#eeeeee]">
        <img className="h-[144px] w-[230px] ml-[5rem] bg-[#999] " />
        <div className="flex flex-col basis-[540px] ml-[10rem]">
          <h2 className="w-2/5 mt-2.5 h-[26px] bg-[#999]"></h2>
          <p className="w-1/5 mt-1 h-[15px] bg-[#999]"></p>
          <p className="w-1/2 mt-1 h-[15px] bg-[#999]"></p>
          <div className="w-3/5 mt-2.5 h-[15px] bg-[#999]">
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <div className="mt-7 w-[848px]">
          <div className="p-5">
            <h3 className="w-2/5 mt-2.5 h-[15px] bg-[#999]"></h3>
            <p className="w-1/5 mt-1 h-[15px] bg-[#999]"></p>
          </div>
          <div className="flex flex-col justify-evenly">
            { Array(15).fill("").map( (element, index)  => 
            <div className="flex justify-evenly w-[848px] p-2.5 mb-2.5 shadow animate-pulse" key={index}>
              <div className="w-[438px]">
                <h3 className="w-2/5 mt-2.5 h-[15px] bg-[#999]"></h3>
                <p className="w-1/5 mt-1 h-[15px] bg-[#999]"> </p>
                <p className="w-3/5 mt-2.5 h-[15px] bg-[#999]"></p>
              </div>
              <div className="flex flex-col justify-center items-center w-[118px] h-[150px]">
                <img className="w-[118px] h-[96px] bg-[#999]" /> 
                <div className="w-[94px] h-[34px] mt-2.5 bg-[#999]"> </div>
              </div>
            </div>
            )}
          </div>
        </div>

      </div>
    </div>
        </>
    )
}
export default MenuShimmer;