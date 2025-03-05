import { REST_MENU_IMG } from '../utilis/constants';
import { useParams } from 'react-router-dom';

export default ({menuData}) => {
    const {name,price,description,imageId} = menuData?.card?.info || {};
    let {ID} = useParams();
    console.log("PARAMS_2",ID);
    return (
        <div className="restMenuMedian">
            <div className="restMenuOuter">
                <div className="restMenuInner">
                    <h2>{name}</h2>
                    <h3>Rs. {(price?price:0)/100}</h3>
                    <h4>{menuData?.card?.info?.ratings?.aggregatedRating?.rating} Stars</h4>
                    <p>{description}</p>
                </div>
                <img className='restMenuImg' src={ REST_MENU_IMG + imageId } />
            </div>
        </div>
    )    
}