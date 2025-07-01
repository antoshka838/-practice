import { changeTheme } from "./components/changeTheme.js";
import { imageClicker } from './components/modal.js';
import { store } from './components/variables.js';
import { setPhotos } from "./components/gallery.js";
import { initFormHandler } from "./components/formHandler.js";
import { initBurgerMenu } from "./components/burgerMenu.js";

store.state = [...store.favorites];
store.originalState = [...store.favorites];


setPhotos();
initFormHandler();
initBurgerMenu();
imageClicker();
changeTheme();
