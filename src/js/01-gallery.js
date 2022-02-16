// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

// Описан в документации
import SimpleLightbox from 'simplelightbox';
// Дополнительный импорт стилей
import 'simplelightbox/dist/simple-lightbox.min.css';

console.log(galleryItems);

const gallaryEl = document.querySelector(".gallery");
const createImageMarkupList = createImageMarkup(galleryItems);

function createImageMarkup(galleryItems) {
  return galleryItems
    .map(({ original, preview, description }) => {
      return `
      <div class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img
          class="gallery__image"
          src='${preview}'
          data-source='${original}'
          alt='${description}'
        />
      </a>
    </div>`;
    })
    .join("");
}

gallaryEl.insertAdjacentHTML("afterbegin", createImageMarkupList);
gallaryEl.addEventListener("click", onGallaryClick);

function onGallaryClick(event) {
  event.preventDefault();
  const item = event.target.dataset.source;
  const instanse = basicLightbox.create(`
  <img src ="${item}" width="800" height="600">
  `);
  instanse.show();
}
