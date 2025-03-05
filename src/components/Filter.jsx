export default ({resList, setResList, filterListCard, setFilterListCard}) => {
    const HandleFilter = (event) =>{
        let rating = event.target.value;
        console.log(rating);
        let newResList = resList.filter((eachCard) => {
                            console.log("eachCard.info.avgRating", eachCard.info.avgRating," rating:", rating);

                         return eachCard.info.avgRating >= rating});
                setFilterListCard(newResList);
    }
    return (
        <div className="absolute right-0 p-2 mx-2">
            <select className="p-2 rounded-md border-2 border-gray-100" onChange={HandleFilter}>
                <option value = "">Select filter option</option>
                <option value = "">All</option>
                <option value = "4.3">Above 4.3-Star</option>
                <option value = "4.0">Above 4.0-Star</option>
                <option value = "3.5">Above 3.5-Star</option>
            </select>
        </div>
    )
}