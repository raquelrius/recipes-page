// const imagesUrl = ['../src/katsukare.jpg', '../src/salmonteriyaki.jpg', '../src/omuraisu.jpg'];

// imagesUrl.forEach(imageUrl => {
//   const imageContainer = document.createElement('div');
//   imageContainer.classList.add('imageContainer');
//   const image = document.createElement('img');
//   image.src = imageUrl;
//   imageContainer.appendChild(image);
//   document.getElementById('recipe-photo-list').appendChild(imageContainer);
// });

const imagesUrl = [
{url: '../src/katsukare.jpg', name: 'Katsu Kare'},
{url: '../src/salmonteriyaki.jpg', name: 'Teriyaki Salmon'},
{url: '../src/omuraisu.jpg', name: 'Omuraisu'}
];

imagesUrl.forEach(element => {
  const imageContainer = document.createElement('div');
  imageContainer.classList.add('imageContainer');
  const image = document.createElement('img');
  image.src = element.url;
  const wrap = document.createElement('div');
  wrap.classList.add('wrap');
  const description = document.createElement('p');
  description.innerText = element.name;
  wrap.appendChild(description);
  imageContainer.appendChild(image);
  imageContainer.appendChild(wrap);
  document.getElementById('recipe-photo-list').appendChild(imageContainer);
})
