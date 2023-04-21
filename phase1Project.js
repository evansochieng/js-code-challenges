for (let university of result){
    // Add the details to DOM
    const uniName = university.name;
    const nameParagraph = document.createElement('p')
    nameParagraph.textContent = `Name: ${uniName}`
    searchResults.appendChild(nameParagraph);

    const uniCountry = university.country;
    const countryParagraph = document.createElement('p')
    countryParagraph.textContent = `Country: ${uniCountry}`
    searchResults.appendChild(countryParagraph);

    const uniWebsite = university['web_pages'][0];
    const websiteParagraph = document.createElement('p')
    const webLink = document.createElement('a');
    webLink.textContent = 'University website'
    webLink.href = uniWebsite;
    //webLink.style.color = 'blue';
    //websiteParagraph.appendChild(webLink)
    //websiteParagraph.innerText = `University website: ` + websiteParagraph.innerText
    //websiteParagraph.innerHTML = `University website: ${uniWebsite}`
    //searchResults.appendChild(websiteParagraph);
    searchResults.appendChild(webLink);
    
    // websiteParagraph.style.cursor = 'pointer';
    // //websiteParagraph.style.color = 'blue';
    // // Add an event listener to the link
    // websiteParagraph.addEventListener('click', () => {
    //     window.location.href = uniWebsite; //make it open 
    // })
}