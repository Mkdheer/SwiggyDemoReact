import RestCardContainer from "./RestCardContainer";
import useResList from '../utils/useResList';
import SearchBar from "./SearchBar";
import ShimmerCards from "./ShimmerCards";
import useOnlineStatus from "../utils/useOnlineStatus";

export default () => {
    const [resList, filterListCard, setFilterListCard, setResList] = useResList();
    const isOnline = useOnlineStatus();
    if(!isOnline) return <ShimmerCards />
    return(resList.length === 0)?<ShimmerCards />:(
        <div>
            <SearchBar resList = {resList} setResList = {setResList} filterListCard = {filterListCard} setFilterListCard = {setFilterListCard}/>
            <RestCardContainer resList = {resList} setResList = {setResList} filterListCard = {filterListCard} />
        </div>
    );
}