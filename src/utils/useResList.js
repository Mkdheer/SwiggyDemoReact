import { useEffect, useState } from "react";
import { CARD_API } from "./constants";

let useResList = () => {
    const [filterListCard, setFilterListCard] = useState([]);
    const [resList, setResList] = useState([]); 

    let fetchDetails = async () => {
        try{
            let fetchData = await fetch(CARD_API);
            let fetchJsonData = await fetchData.json();
            fetchJsonData = fetchJsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
            setFilterListCard(fetchJsonData || []);
            setResList(fetchJsonData || []);
        }catch(err){
            console.log(err);
        }
    }
    useEffect(()=>{
        fetchDetails();
    },[])
        return [resList, filterListCard, setFilterListCard , setResList];
}

export default useResList;