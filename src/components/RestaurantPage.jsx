import RestaurantPageCard from "./RestaurantPageCard";
import ShimmerCards from './ShimmerCards';
import { useParams } from "react-router-dom";
import useRestaurantDetails from "../utilis/useRestaurantDetails";

export default () => {
    let {ID} = useParams();
    let restMenuCardsData = useRestaurantDetails(ID);
    
    if(restMenuCardsData === undefined) {
        return(
            <>
                <p className="noDataMsg">Oop's no Suggestions...!</p>
                <p className="noDataEmoji">&#9785;</p>
            </>
        )
    }

    return (
        (restMenuCardsData === 0)?<ShimmerCards /> :
        (<div>
            <h2 className="titleMenu">Suggested Menu Page</h2>
            {
                restMenuCardsData.map(
                    (eachMenuCard) => <RestaurantPageCard key={eachMenuCard.card.info.id} menuData = {eachMenuCard}/>
                )
            }
        </div>)
    )
}