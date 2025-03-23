import { REST_MENU_IMG } from "../utils/constants";
import { useState } from "react";

const MenuCard = ({menuDetails}) => {
    menuDetails = menuDetails?.card?.info;
    let [counter,setCounter] = useState(0); 
    const Incr = () => {
        setCounter(counter = counter + 1);
    }
    const Decr = () => {
        setCounter(counter--);
    }
    return(
        <div className="flex flex-row justify-between items-center p-4">
            <div className="flex  flex-col text-md p-4">
                <span>{menuDetails?.name}</span>
                <p className="text-sm font-medium">Rs. {(menuDetails?.price)/100}</p>
                <p className="text-sm font-bold text-green-800"> &#9733; {menuDetails?.ratings?.aggregatedRating?.rating}<span className="text-gray-500 font-medium">({menuDetails?.ratings?.aggregatedRating?.ratingCountV2})</span></p>
                <p className="text-gray-500 font-medium">{menuDetails?.description}</p>
            </div>
            <div className="h-32 w-32 relative aspect-square">
                <img className="h-full w-full object-cover rounded-lg" src= { REST_MENU_IMG + menuDetails?.imageId} alt="No Image" />
                {
                    (counter === 0) ? <div className="border-1  bg-white border-gray-100 absolute text-black right-9 px-3 bottom-0 hover:bg-gray-100 cursor-pointer" ><button className=" cursor-pointer" onClick={Incr}>ADD</button></div> 
                    :
                    <div className="border-1  bg-white border-gray-100 absolute right-5 bottom-0"><button className="px-2 hover:bg-gray-100 cursor-pointer" onClick={Decr}>&#8722;</button> <span className="px-2">{counter}</span> <button className="px-2 hover:bg-gray-100 cursor-pointer" onClick={Incr}>&#43;</button></div>
                }
            </div>
        </div>  
    )
}

export default MenuCard;