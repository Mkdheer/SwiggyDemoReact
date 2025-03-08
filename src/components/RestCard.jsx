import { CARD_URL } from '../utils/constants';
export default (props) => {
    const {restData} = props;
    const {name,cloudinaryImageId,locality,cuisines,avgRating} = restData?.info;
    return (
        <div className='mx-10 my-6 w-3xs h-96 shadow-xl p-1 scale-100 hover:cursor-pointer hover:scale-[95%]'>
           <div className='p-3'>
           <img className='w-full h-40 rounded-lg' src={ CARD_URL + cloudinaryImageId } 
            alt="Item-Img"
            />
            <h2 className='text-black font-bold text-xl my-2'>{name}</h2>
            <p className='text-black font-normal my-1'>{locality}</p>
            <p className='text-black text-sm my-1'>{avgRating} Star Rating</p>
            <h6 className='text-black text-sm my-1'>Cusinies: {cuisines.join(", ")}</h6>
           </div>
        </div>
    );
}


export const promotedRestCard = (RestCard) => {
    return (props) =>{
        return(
            <div>
                <p className='absolute z-50 bg-red-600 m-4 mx-6 px-1 py-[2px] font-bold text-white w-32 text-sm overflow-auto flex justify-center rounded-br-md' >
                <span className='text-yellow-300' >&#9733; </span>  People's Choice</p>
                <RestCard {...props} />
            </div>
        )
    }
}