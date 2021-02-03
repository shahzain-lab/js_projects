export const deleteSearchResults =() => {
    const parentElement = document.getElementById('searchResults');
    let child = parentElement.lastElementChild;
    while ( child ) {
        parentElement.removeChild(child);
        child = parentElement.lastElementChild;
    }
}

export const buildSearchResults =(resultArray)=> {
    resultArray.forEach(result => {
        const resultItem = createResultItem(result);
        const resultContents = document.createElement("div");
        resultContents.classList.add('resultContents');
        if(result.img) {
            const resultImage = createResultImage(result);
            resultContents.append(resultImage);
        }
        const resultText = createResultText(result);
        resultContents.append(resultText);
        resultItem.append(resultContents);
        const searchResults = document.getElementById("searchResults");
        searchResults.append(resultItem);
    })
};

const createResultItem = result => {
    const resultItem = document.createElement("div");
    resultItem.classList.add("resultItem");
    const resultTitle = document.createElement("div");
    resultTitle.classList.add("resultTitle");
    const link = document.createElement("a");
    link.href = `https://en.wikipedia.org/?curid=${result.id}`;
    link.textContent = result.title;
    link.target = 'blank';
    resultTitle.append(link);
    resultItem.append(resultTitle);
    return resultItem;
};

const createResultImage = result => {
    const resultImage = document.createElement('div');
    resultImage.classList.add('resultImage');
    const img = document.createElement('img');
    img.src= result.img;
    img.alt= result.title;
    resultImage.append(img)
    return resultImage;
}

const craeteResultText = result => {
    const resultText = document.createElement("div");
    resultText.classList.add("resultText");
    const resultDesc = document.createElement('p');
    resultDesc.classList.add('resultDesc');
    resultDesc.textContent = result.text;
    resultText.append(resultDesc);
    return resultText;
} 

export const clearStatsLine = () => {
    document.getElementById('stats').textContent = "";
};


export const setStatsLine = numberOfResult => {
    const statLine = document.getElementById('stats');
    if(numberOfResult) {
        statLine.textContent = `Displaying ${numberOfResult} results.`
    } else {
        statLine.textContent = 'no result found'
    }
}
