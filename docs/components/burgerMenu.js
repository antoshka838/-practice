import { burger, navBlock, closeNavBlock} from "./variables.js";

export const initBurgerMenu = () => {
    burger.addEventListener('click', () => {
        navBlock.classList.add('active');
    });

    closeNavBlock.addEventListener('click', () => {
        navBlock.classList.remove('active');
    });
};