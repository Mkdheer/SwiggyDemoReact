import { useState } from 'react';
import Filter from './Filter';

export default ({resList, setResList, filterListCard ,setFilterListCard}) => {

    const [searchText, setSearchText] = useState("");

    return(
        <div className="flex justify-center my-12">
            <input 
                className="w-xl rounded-l-md border p-4 font-bold border-gray-100" 
                type="text" 
                value={searchText} 
                onChange={
                    (e)=>{
                        let searchValue = e.target.value;
                        setSearchText(searchValue);
                        const filterList = resList.filter((eachResList) => (eachResList.info.name.toLowerCase()).includes(searchValue.toLowerCase()));
                        setFilterListCard(filterList);
                    }
                }
                placeholder="Search food..." 
            />
            <button 
            className="p-4 border border-[orangered] font-[cursive] scale-[105%] rounded-r-md bg-[orangered] text-white font-bold hover:cursor-pointer hover:scale-[110%]"
            onClick={
                () => {
                    const filterList = resList.filter((eachResList) => (eachResList.info.name.toLowerCase()).includes(searchText.toLowerCase()));
                    setFilterListCard(searchText.trim()==""?resList:filterList);
                 }
            }
            >Find me</button>
            <Filter resList = {resList} setResList = {setResList} filterListCard = {filterListCard} setFilterListCard = {setFilterListCard} />
        </div>
    );
}