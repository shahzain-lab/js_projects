import { setSearchFocus, showClearTextButton, clearSearchText, clearPushListner } from "./searchBar.js";
import { getSearchTerm, retrieveSearchResult } from "./dataFunction.js";
import { buildSearchResults, clearStatsLine, setStatLine, deleteSearchResult } from "./searchResults.js";

document.addEventListener('readystatechange' ,(e) =>{
    if(e.target.readyState === 'complete'){
        initApp();
    }
})
const initApp =()=> {
    //set the focus
    setSearchFocus()
    // 3 listner
    const search = document.getElementById('search')
    search.addEventListener('input', showClearTextButton)

    const clear = document.getElementById('clear');
    clear.addEventListener('click', clearSearchText);
    clear.addEventListener('keydown',clearPushListner)

   const form = document.getElementById('searchBar');
   form.addEventListener('submit', submitTheSearch);
};

const submitTheSearch =(e)=> {
    e.preventDefault();

    processTheSearch()
    setSearchFocus()
}

const processTheSearch = async () => {
    clearStatsLine()
    deleteSearchResult()
    const searchTerm = getSearchTerm();
    if(searchTerm === "")return;
    const resultArray = retrieveSearchResult(searchTerm);
    if(resultArray.length) buildSearchResults(resultArray);
    setStatLine(resultArray.length)
}