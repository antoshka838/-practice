import { store, galleryContent } from "./variables.js";
import { imageClicker } from "./modal.js";

export const fetchPhotos = async () => {
    try {
        const response = await fetch('./netlify/functions/getPhotos');
        const data = await response.json();

        if (response.ok && data.length){
            store.originalState = data;
            store.state = [...store.originalState];
            console.log(store.state)
            setPhotos();
        }
    } catch (error) {
        console.log(error);
    }
}

export const renderItem = (photos) => {
    store.state = photos;
    return store.state
    .map(({urls: {regular}, alt_description}, index) =>{
        return `<a href="#modal-content">
                    <img src="${regular}" alt = "${alt_description || ''}" class="content_img" id="content_img" data-index = "${index}"> 
                </a>
                 `
    }).join("")
}

export const setPhotos = () => {
    galleryContent.innerHTML = renderItem(store.state);
    imageClicker();
}