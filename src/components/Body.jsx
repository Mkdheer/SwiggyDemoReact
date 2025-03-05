import RestCardContainer from "./RestCardContainer";
import useResList from '../utils/useResList';
import SearchBar from "./SearchBar";
import Filter from "./Filter";

export default () => {
    const [resList, filterListCard, setFilterListCard, setResList] = useResList();
    return(resList.length === 0)?<h1>Loading...</h1>:(
        <div>
            {/* <Filter resList = {resList} setResList = {setResList} filterListCard = {filterListCard} setFilterListCard = {setFilterListCard} /> */}
            <SearchBar resList = {resList} setResList = {setResList} filterListCard = {filterListCard} setFilterListCard = {setFilterListCard}/>
            <RestCardContainer resList = {resList} setResList = {setResList} filterListCard = {filterListCard} />
        </div>
    );
}