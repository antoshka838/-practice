import { modal, closeBtn, overlay, nextBtn, previousBtn, galleryContent, store, modalImg } from "./variables.js";

export const imageClicker = () => {
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
    const photo = store.state[index];
    modalImg.src = photo.urls.regular;
    modalImg.alt = photo.alt_description || '' ;
    store.currentIndex = index;
}

previousBtn.addEventListener('click', () => {
    store.currentIndex = (store.currentIndex - 1 + store.state.length) % store.state.length;
    createModal(store.currentIndex);
})

nextBtn.addEventListener('click', () => {
    store.currentIndex = (store.currentIndex + 1) % store.state.length;
    createModal(store.currentIndex);
})