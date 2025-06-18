import { CLIENT_ID } from "../config.js";

const galleryContent = document.getElementById('gallery-content');
const form = document.querySelector('form');
const searchInput = document.querySelector('.search-input');
const modal = document.querySelector('.modal');
const closeBtn = document.querySelector('.modal-close');
const modalImg = document.querySelector('.img-modal');
const previousBtn = document.getElementById('previous_btn');
const nextBtn = document.getElementById('next-btn');

let state = [];
let currentIndex = 0;

const fetchPhotos = async () => {
    try {
        const link = `https://api.unsplash.com/photos/random?client_id=${CLIENT_ID}&count=12`;
        const response = await fetch(link);
        const data = await response.json();

        if (response.ok && data.length){
            state = data;
            setPhotos();
        }
    } catch (error) {
        console.log(error);
    }
}


const searchPhotos = async (query) => {
    try {
        const link = `https://api.unsplash.com/search/photos?client_id=${CLIENT_ID}&query=${query}&per_page=12`;
        const response = await fetch(link);
        const data = await response.json();
        if (response.ok && data.results.length) {
            state = data.results;
            console.log(state)
            setPhotos();
        }else {
            galleryContent.innerHTML = `<p>No results found for "${query}".</p>`;
        }
    } catch (error) {
        console.error(error);
    }
}


const renderItem = () => {
    return state
    .map(({urls: {regular}, alt_description}, index) =>{
        return `<a href="#modal-content">
                    <img src="${regular}" alt = "${alt_description || ''}" class="content_img" id="content_img" data-index = "${index}"> 
                </a>
                 `
    }).join("")
}

const setPhotos = () => {
    galleryContent.innerHTML = renderItem();

    imageClicker();
}

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const query = searchInput.value.trim();
    if (query) {
        searchPhotos(query);
    }
});

const imageClicker = () => {
    galleryContent.addEventListener('click', (event) =>{
        if(event.target.classList.contains('content_img')){
            const index = Number(event.target.dataset.index);

            createModal(index);

            galleryContent.classList.add('blur')

            modal.classList.remove('hidden')
        }
    })
}

closeBtn.addEventListener('click', () => {
    modal.classList.add('hidden');
    galleryContent.classList.remove('blur');
})

const createModal = (index) => {
    const photo = state[index];
    modalImg.src = photo.urls.regular;
    modalImg.alt = photo.alt_description || '' ;
    currentIndex = index;
}

previousBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + state.length) % state.length;
    console.log(currentIndex);
    createModal(currentIndex);
})

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % state.length;
    console.log(currentIndex);
    createModal(currentIndex);
})


fetchPhotos();