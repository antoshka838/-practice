import { modal, closeBtn, overlay, nextBtn, previousBtn, galleryContent, store, modalImg, modalFavorite } from "./variables.js";

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
  modalImg.alt = photo.alt_description || '';
  store.currentIndex = index;

  const isFavorite = store.favorites.some(fav => fav.urls.regular === photo.urls.regular);
  if (isFavorite) {
    modalFavorite.classList.add('active');
  } else {
    modalFavorite.classList.remove('active');
  }
};


previousBtn.addEventListener('click', () => {
    store.currentIndex = (store.currentIndex - 1 + store.state.length) % store.state.length;
    createModal(store.currentIndex);
})

nextBtn.addEventListener('click', () => {
    store.currentIndex = (store.currentIndex + 1) % store.state.length;
    createModal(store.currentIndex);
})

modalFavorite.addEventListener('click', () => {
  const photo = store.state[store.currentIndex];
  const url = photo.urls.regular;

  const index = store.favorites.findIndex(fav => fav.urls.regular === url);

  if (index === -1) {
    store.favorites.push(photo);
  } else {
    store.favorites.splice(index, 1);
  }

  localStorage.setItem('favorites', JSON.stringify(store.favorites));
  modalFavorite.classList.toggle('active');

  const galleryHeart = document.querySelector(`.favorite-icon[data-url="${url}"]`);
  if (galleryHeart) {
    galleryHeart.classList.toggle('active');
  }
});
