import { galleryItems } from "./gallery-items.js";
// Change code below this line

// 1. Створення і рендер розмітки на підставі масиву даних galleryItems і наданого шаблону елемента галереї.
// 2. Реалізація делегування на ul.gallery і отримання url великого зображення.
// 3. Підключення скрипту і стилів бібліотеки модального вікна basicLightbox.
// Використовуй CDN сервіс jsdelivr і додай у проект посилання на мініфіковані(.min) файли бібліотеки.
// 4. Відкриття модального вікна по кліку на елементі галереї.
// Для цього ознайомся з документацією і прикладами.
// 5. Заміна значення атрибута src елемента < img > в модальному вікні перед відкриттям.
// Використовуй готову розмітку модального вікна із зображенням з прикладів бібліотеки basicLightbox.

const gallery = document.querySelector(".gallery");
const photos = galleryItems
  .map(
    (galleryItem) =>
      `<li class="gallery__item"><a class="gallery__link" href="${galleryItem.original}"><img class="gallery__image" src="${galleryItem.preview}" data-source="${galleryItem.original}" alt="${galleryItem.description}"></a></li>`
  )
  .join("");
gallery.insertAdjacentHTML("beforeend", photos);

// for (let i = 0; i < galleryItems.length; i += 1) {
//   let galleryItem = galleryItems[i];
//   const li = document.createElement("li");
//   const a = document.createElement("a");
//   const img = document.createElement("img");
//   li.classList.add("gallery__item");
//   a.classList.add("gallery__link");
//   a.href = galleryItem.original;
//   img.classList.add("gallery__image");
//   img.src = galleryItem.preview;
//   img.dataset.source = galleryItem.original;
//   img.alt = galleryItem.description;
//   a.appendChild(img);
//   li.appendChild(a);
//   gallery.appendChild(li);
// }
gallery.addEventListener("click", (event) => {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }
  const urlLargeImage = event.target.parentNode.getAttribute("href");
  const imageLarge = `<img src="${urlLargeImage}" alt="${event.target.alt}" />`;
  const modal = `
  <div class="modal">
    ${imageLarge}
  </div>
`;
  const instance = basicLightbox.create(modal, {
    onShow: () => {
      window.addEventListener("keydown", handleKeyDown);
    },
    onClose: () => {
      window.removeEventListener("keydown", handleKeyDown);
    },
  });
  instance.show();
  function handleKeyDown(event) {
    if (event.key === "Escape") {
      instance.close();
    }
  }
  // const instance = basicLightbox.create(imageLarge);
  // instance.show();
  // document.addEventListener("keydown", escapeHandler);
  // function escapeHandler(event) {
  //   if (event.key === "Escape") {
  //     instance.close();
  //     document.removeEventListener("keydown", escapeHandler);
  //   }
  // }
});
console.log(galleryItems);
