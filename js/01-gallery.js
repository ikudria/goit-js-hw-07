import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector(".gallery");
// console.log(galleryContainer);

/* <div class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="small-image.jpg"
      data-source="large-image.jpg"
      alt="Image description"
    />
  </a>
</div> */

const cardsMarkup = createGalleryMarkup(galleryItems);
galleryContainer.insertAdjacentHTML("beforeend", cardsMarkup);

function createGalleryMarkup(items) {
  return items
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
    })
    .join("");
}


galleryContainer.addEventListener("click", onGalleryImageClick);

function onGalleryImageClick(event) {
  event.preventDefault();

  const orgURL = event.target.dataset.source;
  const orgDescr = event.target.alt;
 

  if (!event.target.classList.contains("gallery__image")) {
    return;
  }

  basicLightbox
    .create(
      `
    <img src = ${orgURL} alt= ${orgDescr} width="800" height="600" /> `
    )
    .show();
}
