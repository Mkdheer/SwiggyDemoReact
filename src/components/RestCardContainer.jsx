import { Link } from "react-router-dom";
import RestCard, { promotedRestCard } from "./RestCard";

export default ({filterListCard}) => {
    console.log("filterListCard", filterListCard);
    const PromotedRestData = promotedRestCard(RestCard);
    return(
        <div className="flex flex-wrap justify-center" >
            {filterListCard.map(eachRest => <Link to={'/Restaurant/'+eachRest?.info?.id} className="cardLink" key = {eachRest.info.id}>
                    {
                        ((eachRest?.info?.avgRating) > 4.5) ? <PromotedRestData restData = {eachRest} />
                        : <RestCard  restData = {eachRest} /> 
                    }
                    </Link>)}   
        </div>
    );
}