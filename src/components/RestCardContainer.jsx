import { Link } from "react-router-dom";
import RestCard from "./RestCard";

export default ({filterListCard}) => {
    console.log("filterListCard", filterListCard);
    return(
        <div className="flex flex-wrap justify-center" >
            {filterListCard.map(eachRest => <Link to={'/Restaurant/'+eachRest?.info?.id} className="cardLink" key = {eachRest.info.id}><RestCard  restData = {eachRest} /></Link>)}   
        </div>
    );
}