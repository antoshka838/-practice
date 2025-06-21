import { CLIENT_ID } from "../config.js";

const galleryContent = document.getElementById('gallery-content');
const form = document.querySelector('form');
const searchInput = document.querySelector('.search-input');
const modal = document.querySelector('.modal');
const closeBtn = document.querySelector('.modal-close');
const modalImg = document.querySelector('.img-modal');
const previousBtn = document.getElementById('previous_btn');
const nextBtn = document.getElementById('next-btn');
const overlay = document.querySelector('.modal-overlay');

let state = [];
let originalState = [];
let currentIndex = 0;

const fetchPhotos = async () => {
    try {
        const link = `https://api.unsplash.com/photos/random?client_id=${CLIENT_ID}&count=12`;
        const response = await fetch(link);
        const data = await response.json();

        if (response.ok && data.length){
            originalState = data;
            state = [...originalState];
            console.log(state)
            setPhotos();
        }
    } catch (error) {
        console.log(error);
    }
}

const searchPhotos = (query) => {
    const filtred = state.filter(photo => {
        const desc = photo.alt_description?.toLowerCase() || '';
        return desc.includes(query.toLowerCase());
    })

    if (filtred.length){
        galleryContent.innerHTML = renderItem(filtred);
        imageClicker()
    }else{
        galleryContent.innerHTML = `<p>No results found for "${query}".</p>`;
    }
}


const renderItem = (photos) => {
    state = photos;
    return state
    .map(({urls: {regular}, alt_description}, index) =>{
        return `<a href="#modal-content">
                    <img src="${regular}" alt = "${alt_description || ''}" class="content_img" id="content_img" data-index = "${index}"> 
                </a>
                 `
    }).join("")
}

const setPhotos = () => {
    galleryContent.innerHTML = renderItem(state);
    imageClicker();
}

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const query = searchInput.value.trim();
    
    const allowedRegex = /^[a-zA-Z0-9!$&*\-=^`|~#%'+/?_{ }]+$/;

    if(query.length === 0){
        state = [...originalState];
        setPhotos()
        return;
    }

    if (query.length < 2 || query.length > 40){
        galleryContent.innerHTML = `<p class="error-message">Please enter between 2 and 40 characters.</p>`;
        return;
    }

    if(!allowedRegex.test(query)){
        galleryContent.innerHTML = `<p class="error-message">Invalid characters entered.<br>Allowed: letters, numbers and ! $ & * - = ^ \` | ~ # % ' + / ? _ { }</p>`;
        return;
    }

    searchPhotos(query)
});

const imageClicker = () => {
    galleryContent.addEventListener('click', (event) =>{
        if(event.target.classList.contains('content_img')){
            const index = Number(event.target.dataset.index);

            createModal(index);

            galleryContent.classList.add('blur')

            modal.classList.remove('hidden');
            overlay.classList.remove('hidden');
            document.body.classList.add('body-no-scroll');
        }
    })
}

const closeModal = () => {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
    galleryContent.classList.remove('blur');
    document.body.classList.remove('body-no-scroll');
}

modal.addEventListener('click', (event) => {
    if(event.target === modal){
        closeModal();
    }
});

closeBtn.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

const createModal = (index) => {
    const photo = state[index];
    modalImg.src = photo.urls.regular;
    modalImg.alt = photo.alt_description || '' ;
    currentIndex = index;
}

previousBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + state.length) % state.length;
    createModal(currentIndex);
})

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % state.length;
    createModal(currentIndex);
})


fetchPhotos();