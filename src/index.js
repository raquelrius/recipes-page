const imagesUrl = ['../src/katsukare.jpeg', '../src/omuraisu.jpg'];

imagesUrl.forEach(imageUrl => {
  const recipe = document.createElement('div');
  recipe.classList.add('recipe');
  const imageContainer = document.createElement('div');
  imageContainer.classList.add('imageContainer');
  const image = document.createElement('img');
  image.src = imageUrl;
  imageContainer.appendChild(image);
  recipe.appendChild(imageContainer);

  document.querySelector('main').appendChild(recipe);
})
