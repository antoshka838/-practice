import { changeTheme } from "./components/changeTheme.js";
import { initFormHandler } from "./components/formHandler.js";
import { imageClicker } from './components/modal.js';
import { fetchPhotos } from "./components/gallery.js";
import { initBurgerMenu } from "./components/burgerMenu.js";

fetchPhotos();
initFormHandler();
initBurgerMenu();
imageClicker();
changeTheme();
