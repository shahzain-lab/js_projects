export const deleteSearchResult =()=> {
    const parentElement = document.getElementById('searchResults');
    let child = parentElement.lastElementChild;
    while (child){
        parentElement.removeChild(child);
        child = parentElement.lastElementChild;
    }
}


export const buildSearchResults = (resultArray) => {
    resultArray.forEach(result => {
        const resultItem = createResultItem(result);
        const resultContents = document.createElement('div');
        resultContents.classList.add('resultContents');
        if(result.img) {
            const resultImage = createResultImage(result);
            resultContents.append(resultImage);
        }

        const resultText = createResultText(result);
        resultContents.append(resultText);
        resultItem.append(resultContents);

        const searchResult = document.getElementById('searchResults');
        searchResult.append(resultItem);
    })
}

const createResultItem = (result) => {
    const resultItem = document.createElement('div');
    resultItem.classList.add('resultItem');
    const resultTitle = document.createElement('div');
    resultTitle.classList.add('resultTitle');
    const link = document.createElement('a');
    link.href=`https://en.wikipedia.org/?curid=${result.id}`;
    link.textContent = result.title;
    resultTitle.append(link);
    resultItem.append(resultTitle);
    return resultItem;
}

const createResultImage =(result)=> {
    const resultImage = document.createElement('div');
    resultImage.classList.add('resultImage');
    const img = document.createElement('img');
    img.src=result.img;
    img.alt=result.title;
    resultImage.append(img)
    return resultImage;
}

const createResultText = (result) => {
    const resultText = document.createElement('div');
    resultText.classList.add('resultText');
    const resultDescription = document.createElement('p');
    resultDescription.classList.add('resultDescription');
    resultDescription.textContent=result.text
    resultText.append(resultDescription)
    return resultText;
}

export const clearStatsLine =()=> {
    document.getElementById('stats').textContent = "";
}

export const setStatLine =(numberOfResult) => {
    
const statLine = document.getElementById('stats');
if(numberOfResult){
    statLine.textContent = `Displaying ${numberOfResult} results`
} else {
    statLine.textContent = "no result found"
}

}

