import { galleryItems } from './gallery-items.js';
// Change code below this line
// 1.Створення і рендер розмітки.
const galleryContainer = document.querySelector('.gallery');
const cardsMarkUp = createImgCard(galleryItems);
galleryContainer.insertAdjacentHTML('beforeend', cardsMarkUp);
function createImgCard(images) {
    return images.map(({preview, original, description}) => {
        return `<div class="gallery__item">
        <a class="gallery__link" href="large-image.jpg">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </div>`;
    })
    .join('');
}
// 2.Делегування і отримання url великого зображення.
galleryContainer.addEventListener('click', onGalleryContainerClick)

function onGalleryContainerClick(event){
    const imageItem = document.querySelector(".gallery__image");
    event.preventDefault();
    console.log(imageItem.dataset.source);
console.log(event.target);

    if (event.target.nodeName !== 'IMG') {
        return;
    }

    // Відкриття і закриття модалки по Escape
    const closeModal = event => {
      if (event.code === 'Escape') {
        instance.close();
      }
}
    
    const instance = basicLightbox.create(
      `<img src="${event.target.dataset.source}" width="800" height="600">`,
      {
        onShow: instance => {
          window.addEventListener('keydown', closeModal);
        },
        onClose: instance => {
          window.removeEventListener('keydown', closeModal);
        },
      }
    );
  
    instance.show();

};















// 
// const
//   const inst = basicLightbox.create(`
//   <img class="modal__image" scr="assets/images/image.png" width="800" height="600"`)
//   inst.show()
//   const modal = document.querySelector('modal__image')
//   modal.src = event.target.dataset.source
// img.src = img.atributes.original.value;
// onShow: () => {
//     window.addEventListener("keydown", closeModalWindowByEscPressing),
//     return inst;
// }

// onClose: () => {
// window.removeEventListener("keydown", closeModalWindowByEscPressing)
// refs.body.classList.remove("disable-scroll");
// },
// return inst;

// console.log(galleryItems);






