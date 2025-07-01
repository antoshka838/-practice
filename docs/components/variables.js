export const galleryContent = document.getElementById('gallery-content');
export const form = document.querySelector('form');
export const searchInput = document.querySelector('.search-input');
export const modal = document.querySelector('.modal');
export const closeBtn = document.querySelector('.modal-close');
export const modalImg = document.querySelector('.img-modal');
export const previousBtn = document.getElementById('previous_btn');
export const nextBtn = document.getElementById('next-btn');
export const overlay = document.querySelector('.modal-overlay');
export const body = document.body;
export const modalFavorite = document.querySelector('.modal-favorite');
export const burger = document.querySelector('.burger-button');
export const navBlock = document.querySelector('.nav-block');
export const closeNavBlock = document.querySelector('.close-button');

export const store = {
    state: [],
    originalState: [],
    currentIndex: 0,
    currentTheme: localStorage.getItem('theme') || 'light-theme',
    favorites: JSON.parse(localStorage.getItem('favorites')) || []
}
