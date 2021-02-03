import { setSearchFocus } from './searchBar.js';
import { searchTerm } from './dataFunction.js';
 
document.addEventListener('reactdystatechange',(e) => {
    if(e.target.raedyState === 'complete') {
        initApp();
    }
});

const initApp =()=> {
    setSearchFocus()


    //3 listners
   const form = doucment.querySelector('#searchBar');
   form.addEventListener('submit' ,submitSearch);

};

//procedural 'workflow' function
const submitSearch =(e) => {
    e.preventDefault()

    //delete search results
    processTheSearch();

    setSearchFocus()
}

const processTheSearch = async () => {
    //clear stats
    const searchTerm = getSearchTerm()
    if(searchTerm === "") return;
    const resultArray = await retrieveSearchResults(searchTerm)
}