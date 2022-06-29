import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);
{
  /* <a class="gallery__item" href="large-image.jpg">
  <img class="gallery__image" src="small-image.jpg" alt="Image description" />
</a> */
}

const galleryList = document.querySelector(".gallery");
const cardsMarkup = createGalleryMarkup(galleryItems);
galleryList.insertAdjacentHTML("beforeend", cardsMarkup);

function createGalleryMarkup(items) {
  return items
    .map(({ preview, original, description }) => {
      return `<li>
  <a class="gallery__item" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
  </li>
  `;
    })
    .join("");
}

galleryList.addEventListener("click", onGalleryImageClick);

function onGalleryImageClick(event) {
  event.preventDefault();

  if (!event.target.classList.contains("gallery__image")) {
    return;
  }

  new SimpleLightbox(".gallery a", {
    captionsData: "alt",
    captionPosition: "bottom",
    captionDelay: 250,
  });
}
