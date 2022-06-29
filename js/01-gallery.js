import { galleryItems } from "./gallery-items.js";
// Change code below this line
//  import * as basicLightbox from 'basiclightbox'
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

// 1.1.

//    galleryItems.forEach((item) => {
//         let card = `<div class="gallery__item">
//   <a href="#" class="gallery__link">
//     <img src="${item.preview}" alt="${item.description}" class="gallery__image">
//   </a>
// </div>`;

//          galleryContainer.insertAdjacentHTML('beforeend', card);
//     });

// 1.2.

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
// console.log(cardsMarkup);
// 2.1.

galleryContainer.addEventListener("click", onGalleryImageClick);

function onGalleryImageClick(event) {
  event.preventDefault();

  const orgURL = event.target.dataset.source;
  const orgDescr = event.target.alt;
  // console.log(orgURL);
  // console.log(event.target.alt);

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
