import { REST_MENU_IMG } from '../utils/constants';
import { useParams } from 'react-router-dom';

export default ({menuData}) => {
    const {name,price,description,imageId} = menuData?.card?.info || {};
    let {ID} = useParams();
    const stars = menuData?.card?.info?.ratings?.aggregatedRating?.rating;
    return (
        <div className="flex justify-center mb-6 h-64">
            <div className="flex justify-between w-[50%] scale-[100%] hover:scale-[105%] hover:cursor-pointer shadow-xs p-1 mb-1 border-b-1 border-black">
                <div className='flex flex-col justify-center'>
                    <h2 className='font-bold text-xl'>{name}</h2>
                    <h3 className='font-medium'>Rs. {(price?price:0)/100}</h3>
                    <h4 className='font-medium text-[orangeRed]'>{(stars)? stars +" Stars" : "No Rating" } </h4>
                    <p className='font-medium' >{description}</p>
                </div>
                <img className='w-[10em] rounded-b-sm' src={ REST_MENU_IMG + imageId } />
            </div>
        </div>
    )    
}