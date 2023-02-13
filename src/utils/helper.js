export function filterData(value,restaurants){
    return restaurants.filter((restaurant)=>restaurant?.data?.name?.toLowerCase()?.includes(value.toLowerCase()))
}