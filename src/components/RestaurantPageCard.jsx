import { REST_MENU_IMG } from '../utils/constants';
import { useParams } from 'react-router-dom';
import MenuCard from './MenuCard';
import { useState } from 'react';

export default ({menuData,showItem,index,setShowIndex}) => {

    const [nestedShowIndex, setNestedShowIndex] = useState("");

    const callAccordian = () =>{
        setShowIndex((prevIndex) => prevIndex === index ? null : index );
    }

    const callChildAccordian = (childIndex) => {
        setNestedShowIndex((prevIndex) => prevIndex === childIndex ? null : childIndex);
    }

    let menuCardsDisplay = () =>{
        const type = menuData?.card?.card?.["@type"]; 
        if(type === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
            {

               return( 
                <div>
                    <div className="w-1/2 p-4  border-b-12 border-gray-200  px-3 m-auto flex justify-between hover:cursor-pointer" onClick={callAccordian}> 
                        <span className='font-bold text-lg'>{menuData?.card?.card?.title} {menuData?.card?.card?.itemCards?.length}</span>
                        <p>&#x2B07;</p>
                    </div>
                    <div className="w-1/2 p-4 font-bold px-3 m-auto flex flex-col justify-interMenuItemsbetween">
                    {
                        showItem && menuData?.card?.card?.itemCards?.map((idvItems) =>{
                            return(
                                (idvItems?.card?.["@type"] ==="type.googleapis.com/swiggy.presentation.food.v2.Dish")?
                                <MenuCard key={idvItems?.card?.info?.id} menuDetails = {idvItems} /> 
                                : "" 
                            )
                        })
                    }
                </div>
                </div>)
            }
        else if(type === "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory")
        {
            const interMenuItems = menuData?.card?.card?.categories;
            return(
                    <div className="w-1/2 p-4 font-bold px-3 m-auto flex flex-col justify-interMenuItemsbetween" >
                        <span className='text-lg' >{menuData?.card?.card?.title} </span>
                        <div className='flex flex-col ml-2'>
                            {
                                interMenuItems.map((eachItem, childIndex)=>(
                                    <div key={eachItem?.categoryId}>
                                        <div>
                                            <div className='flex justify-between p-4 border-gray-200 border-b-2 hover:cursor-pointer' onClick={()=>callChildAccordian(childIndex)}>
                                                <span className='text-md font-semibold' >
                                                    {eachItem?.title} ({eachItem?.itemCards?.length})
                                                </span>
                                                <p>&#x2B07;</p>
                                            </div>
                                        </div> 
                                       <div>
                                            {
                                               eachItem?.itemCards?.map((idvItems)=>{
                                                   return( (idvItems?.card?.["@type"] ==="type.googleapis.com/swiggy.presentation.food.v2.Dish")?
                                                   (nestedShowIndex === childIndex) && <MenuCard key={idvItems?.card?.info?.id} menuDetails = {idvItems}/> 
                                                        : ""
                                                    )
                                                })
                                            }
                                        </div>
                                    </div>
                                    )
                                )
                            }
                        </div>
                    </div>
            )
        }
    }


    return (
        <>
            {menuCardsDisplay()}
        </>    
    )    
}
