import { store, galleryContent } from "./variables.js";

export const fetchPhotos = async () => {
    try {
        const response = await fetch('/.netlify/functions/getPhotos');
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
  return photos.map(({ urls: { regular }, alt_description }, index) => {
    const isFav = store.favorites.some(fav => fav.urls.regular === regular);
    return `
      <div class="photo-item">
        <a href="#modal-content">
          <img src="${regular}" alt="${alt_description || ''}" class="content_img" data-index="${index}">
        </a>
        <button class="favorite-icon ${isFav ? 'active' : ''}" data-url="${regular}">♡</button>
      </div>
    `;
  }).join('');
};

export const setPhotos = () => {
    galleryContent.innerHTML = renderItem(store.state);
    favoriteClicer();
}

const favoriteClicer = () => {
  galleryContent.addEventListener('click', (event) => {
    if (event.target.classList.contains('favorite-icon')) {
      const url = event.target.dataset.url;
      const photoObj = store.state.find(photo => photo.urls.regular === url);
      if (!photoObj) return;
      const index = store.favorites.findIndex(fav => fav.urls.regular === url);

      if (index !== -1) {
        store.favorites.splice(index, 1);
        event.target.classList.remove('active');
      } else {
        store.favorites.push(photoObj);
        event.target.classList.add('active');
      }
      localStorage.setItem('favorites', JSON.stringify(store.favorites));

      if (document.body.dataset.page === 'favorites') {
        store.state = [...store.favorites];
        setPhotos();
      }
    }
  });
};

