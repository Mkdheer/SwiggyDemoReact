import RestaurantPageCard from "./RestaurantPageCard";
import ShimmerCards from './ShimmerCards';
import { useParams } from "react-router-dom";
import useRestaurantDetails from "../utils/useRestaurantDetails";
import { useState } from "react";

export default () => {
    let {ID} = useParams();
    let restMenuCardsData = useRestaurantDetails(ID);
    const[showIndex, setShowIndex] = useState(1);

    
    console.log("Menu Details", restMenuCardsData);
    if(restMenuCardsData === undefined) {
        return(
            <>
                <p className="bg-[orangeRed] text-[3em] mt-12 flex justify-center">Oop's no Suggestions...!</p>
                <p className="text-[10em] flex justify-center m-0">&#9785;</p>
            </>
        )
    }
    return (
        
        (restMenuCardsData.length === 0)?<ShimmerCards /> :
        (
            
            <div>
                <h2 className=" text-center text-[2em] m-6 mb-8 text-[orangeRed]">Suggested Menu Page</h2>
                {
                    restMenuCardsData.map(
                    (eachMenuCard, index) => <RestaurantPageCard 
                                                key = {index}  
                                                menuData = {eachMenuCard}
                                                index = {index}
                                                showItem = {index === showIndex ? true : false}
                                                setShowIndex = {setShowIndex}
                                                />
                    )
                }
                
            </div>
        )
    )
}

