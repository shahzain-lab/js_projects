import { setSearchFocus,showClearTextButton, clearSearchText, clearPushListner } from './searchBar.js';
import { buildSearchResults, clearStatsLine, setStatsLine, deleteSearchResults } from './searchResult.js';
 import { getSearchTerm, retrieveSearchResults } from './dataFunction.js'


document.addEventListener('readystatechange',(e) => {
    if(e.target.readyState === 'complete') {
        initApp();
    }
});

const initApp =()=> {

    setSearchFocus()
    //3 listners
    const search = document.getElementById('search');
    search.addEventListener("input", showClearTextButton);

    const clear = document.getElementById('clear');
    clear.addEventListener('click', clearSearchText);
    clear.addEventListener('keydown', clearPushListner)


   const form = document.getElementById('searchBar');
   form.addEventListener('submit' ,submitSearch);

};

//procedural 'workflow' function
const submitSearch =(event) => {
    event.preventDefault()
    deleteSearchResults()
    processTheSearch();
    setSearchFocus()
}

const processTheSearch = async () => {
    //clear stats
    clearStatsLine()
    const searchTerm = getSearchTerm()
    if(searchTerm === "") return;
    const resultArray = await retrieveSearchResults(searchTerm)
    if(resultArray.length) buildSearchResults(resultArray);
    setStatsLine(resultArray.length)
}