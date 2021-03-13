const imagesUrl = ['../src/katsukare.jpg', '../src/salmonteriyaki.jpg', '../src/omuraisu.jpg'];

imagesUrl.forEach(imageUrl => {
  const imageContainer = document.createElement('div');
  imageContainer.classList.add('imageContainer');
  const image = document.createElement('img');
  image.src = imageUrl;
  imageContainer.appendChild(image);
  document.getElementById('recipe-photo-list').appendChild(imageContainer);
});
