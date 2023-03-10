import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");

const galeryMarkup = galleryItems
  .map(
    (galeryItem) =>
      `<div class="gallery__item">
<a class="gallery__link" href="${galeryItem.original}">
  <img
    class="gallery__image"
    src="${galeryItem.preview}"
    data-source="${galeryItem.original}"
    alt="${galeryItem.description}"
  />
</a>
</div>`
  )
  .join("");

gallery.insertAdjacentHTML("beforeend", galeryMarkup);

gallery.addEventListener("click", onImageClick);

function onImageClick(evt) {
  evt.preventDefault();

  const isImageEl = evt.target.classList.contains("gallery__image");
  if (!isImageEl) {
    return;
  }
  const instance = basicLightbox.create(
    `<img src="${evt.target.dataset.source}" width="800" height="600">`,
    {
      onShow: () => {
        window.addEventListener("keydown", onCloseModal);
      },
      onClose: () => {
        window.removeEventListener("keydown", onCloseModal);
        console.log("removeListener");
      },
    }
  );
  instance.show();
  function onCloseModal(evt) {
    if (evt.code === "Escape") {
      instance.close();
    }
  }
}
