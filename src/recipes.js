const katsukare = [
    {ingredient: 'onion', amount: 1},
    {ingredient: 'clove of garlic', amount: 1},
    {ingredient: 'clove of ginger', amount: 1},
    {ingredient: 'gr chicken legs', amount: 300},
    {ingredient: 'gr potatoes', amount: 300},
    {ingredient: 'carrots', amount: 1},
    {ingredient: 'gr butter', amount: 20},
    {ingredient: 'tbsp flour', amount: 4},
    {ingredient: 'tbsp curry powder', amount: 3},
    {ingredient: 'ml vegetable juice', amount: 200},
    {ingredient: 'ml water', amount: 600},
    {ingredient: 'bouillon cube', amount: 1},
    {ingredient: 'tbsp ketchup', amount: 2},
    {ingredient: 'tspn instant coffee', amount: 2},
    {ingredient: 'tspn sugar', amount: 1},
    {ingredient: 'tbsp Perrins sauce', amount: 1}
]

const teriyaki = [
    {ingredient: 'slices of filet salmon', amount: 8},
    {ingredient: 'tbsp of teriyaki sauce', amount: 3},
    {ingredient: 'tbsp of hoisin sauce', amount: 3},
    {ingredient: 'tbsp of soy sauce', amount: 3},
    {ingredient: 'tbsp of white vinegar', amount: 1},
    {ingredient: 'tbsp of sesame oil', amount: 1},
    {ingredient: 'gr brown sugar', amount: 70},
    {ingredient: 'medium garlic cloves', amount: 3},
    {ingredient: 'tbsp ginger', amount: 2}
]

const omuraisu = [
    {ingredient: 'gr chicken', amount: 160},
    {ingredient: 'gr onion', amount: 240},
    {ingredient: 'gr mushroom', amount: 100},
    {ingredient: 'gr rice', amount: 600},
    {ingredient: 'gr ketchup', amount: 200},
    {ingredient: 'eggs', amount: 8}
]


const recipesList = [
    {name: 'katsukare', ingredients: katsukare}, 
    {name: 'teriyaki', ingredients: teriyaki}, 
    {name: 'omuraisu', ingredients: omuraisu}
];

const select = document.getElementById("servings");

select.addEventListener('change', event => {
    recipesList.forEach(recipe => {
        const recipeList = document.getElementById(recipe.name).children;
        Array.from(recipeList).forEach((element,i) => {
            const ingredient = recipe.ingredients[i];
            element.innerText = ingredient.amount*event.target.value / 4 + " " + ingredient.ingredient;
        })
    })

});
