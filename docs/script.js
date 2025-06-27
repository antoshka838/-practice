import {changeTheme} from "./components/changeTheme.js";
import { initFormHandler } from "./components/formHandler.js";
import {fetchPhotos} from "./components/gallery.js"


initFormHandler();
fetchPhotos();
changeTheme();