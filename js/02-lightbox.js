import { galleryItems } from "./gallery-items.js";
// Change code below this line

// 1. Створення і рендер розмітки на підставі масиву даних galleryItems і наданого шаблону елемента галереї.
// Використовуй готовий код з першого завдання.
// 2. Підключення скрипту і стилів бібліотеки, використовуючи CDN сервіс cdnjs.
// Необхідно додати посилання на два файли: simple - lightbox.min.js і simple - lightbox.min.css.
// 3. Ініціалізація бібліотеки після створення і додання елементів галереї у ul.gallery.
// Для цього ознайомся з документацією SimpleLightbox - насамперед секції «Usage» і «Markup».
// 4. Подивися в документації секцію «Options» і додай відображення підписів до зображень з атрибута alt.
//  Нехай підпис буде знизу і з'являється через 250 мілісекунд після відкриття зображення.

const gallery = document.querySelector(".gallery");

for (let i = 0; i < 9; i += 1) {
  let galleryItem = galleryItems[i];
  const li = document.createElement("li");
  const a = document.createElement("a");
  const img = document.createElement("img");
  li.classList.add("gallery__item");
  a.classList.add("gallery__link");
  a.href = galleryItem.original;
  img.classList.add("gallery__image");
  img.src = galleryItem.preview;
  img.alt = galleryItem.description;
  a.appendChild(img);
  li.appendChild(a);
  gallery.appendChild(li);
}

const lightbox = new SimpleLightbox(".gallery a", {
  captions: true,
  captionsData: "alt",
  captionPosition: "bottom",
  captionDelay: 250,
  captionType: "attr",
});

console.log(galleryItems);
