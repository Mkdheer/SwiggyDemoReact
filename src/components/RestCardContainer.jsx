import RestCard from "./RestCard";

export default ({filterListCard}) => {
    console.log("filterListCard", filterListCard);
    return(
        <div className="flex flex-wrap justify-center" >
            {filterListCard.map(eachRest =><RestCard restData = {eachRest} />)}   
        </div>
    );
}