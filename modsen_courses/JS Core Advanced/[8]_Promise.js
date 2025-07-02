const fetchMultipleAPIs =  (urls) => {
    const fetchPromise = urls.map(url => 
    fetch(url)
    .then(response => {
        if(!response.ok){
            throw new Error('Ошибка при запросе: ' + response.status);
        }
        return response.json();
    })
);
    return Promise.all(fetchPromise)
    .then(results => {
        return results;
    })
    .catch(error => {
        console.error("Ошибка при извлечении данных: " + error);
        throw error;
    })
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
