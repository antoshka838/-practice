import { store, galleryContent, searchInput, form } from "./variables.js";
import { setPhotos } from "./gallery.js";
import { searchPhotos } from "./search.js";

export const initFormHandler = () => {
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const query = searchInput.value.trim();

        const allowedRegex = /^[a-zA-Z0-9!$&*\-=^`|~#%'+/?_{ }]+$/;

        if (query.length === 0) {
            store.state = [...store.originalState];
            setPhotos();
            return;
        }

        if (query.length < 2 || query.length > 40) {
            galleryContent.innerHTML = `<p class="error-message">Please enter between 2 and 40 characters.</p>`;
            return;
        }

        if (!allowedRegex.test(query)) {
            galleryContent.innerHTML = `<p class="error-message">Invalid characters entered.<br>Allowed: letters, numbers and ! $ & * - = ^ \` | ~ # % ' + / ? _ { }</p>`;
            return;
        }

        searchPhotos(query);
    });
};
