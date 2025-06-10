const fetchMultipleAPIs = async (urls) => {
    const fetchPromise = urls.map(async (url) => {
    const response = await fetch(url);
        if(!response.ok){
            throw new Error('Ошибка при запросе: ' + response.status);
        }
        return await response.json();
    }
)
    const results = await Promise.all(fetchPromise);

    return results;
}

const urls =[
    "https://petstore.swagger.io/v2/pet/3",
    "https://petstore.swagger.io/v2/pet/4",
    "https://petstore.swagger.io/v2/pet/6"
    
];

fetchMultipleAPIs(urls)
.then(data => {
    console.log("Data: ", data);
})
.catch(error => {
    console.error("Error: " + error);
})
