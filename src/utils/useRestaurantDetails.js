import { useEffect, useState } from "react";
import { MENU_API } from "./constants";


let useRestaurantDetails = (ID) => {
    let [restMenuCardsData, setRestMenuCardsData] = useState([]);
            let fetchAPIFun = async ()=>{
                try{
                    const fetchApiData = await fetch(MENU_API + ID);
                    const jsonData = await fetchApiData.json();
                    const cardDetails = await jsonData?.data.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards;
                    setRestMenuCardsData(cardDetails);
                }catch(err){
                    console.log(err);
                }
            }
    useEffect(  
        ()=>{
            fetchAPIFun();
        },[]
    )
    return restMenuCardsData;
}


export default useRestaurantDetails;