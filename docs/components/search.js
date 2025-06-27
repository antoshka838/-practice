import {store, galleryContent} from "./variables.js";
import {renderItem} from "./gallery.js";
import {imageClicker} from "./modal.js";

export const searchPhotos = (query) => {
    const filtred = store.state.filter(photo => {
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