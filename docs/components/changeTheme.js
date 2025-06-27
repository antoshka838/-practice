import { body, store } from "./variables.js";

export const changeTheme = () => {
  document.addEventListener("DOMContentLoaded", () => {

    body.classList.add(store.currentTheme);
    
    const themeSelect = document.getElementById("theme-select");
    themeSelect.value = store.currentTheme;

    themeSelect.addEventListener("change", () => {
      body.classList.remove(store.currentTheme);
      store.currentTheme = themeSelect.value;
      body.classList.add(store.currentTheme);
      localStorage.setItem("theme", store.currentTheme);
    });
  });
};

