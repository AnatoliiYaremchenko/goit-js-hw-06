/* Завдання 2
HTML містить порожній список ul#ingredients.

<ul id="ingredients"></ul>

JavaScript містить масив рядків.

const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

Напиши скрипт, який для кожного елемента масиву ingredients:

Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
Додасть назву інгредієнта як його текстовий вміст.
Додасть елементу клас item.
Після чого, вставить усі <li> за одну операцію у список ul#ingredients. */

const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

// Var 1

/* const ingredientsRef = document.querySelector('#ingredients');
const newItemsArray = [];

ingredients.forEach(ingredient => {
  const newItem = document.createElement('li');

  newItem.textContent = ingredient;
  newItem.classList.add("item");
  newItemsArray.push(newItem);
})

ingredientsRef.append(...newItemsArray); */

// Var 2

const ingredientsListRef = document.querySelector("#ingredients");

const makeIngredient = ingredient => {
  const newIngredient = document.createElement('li');

  newIngredient.textContent = ingredient;
  newIngredient.classList.add('item');

  return newIngredient;
}

const ingredientsList = ingredients.map(makeIngredient);

ingredientsListRef.append(...ingredientsList);

// Var 3

/* const ingredientsListRef = document.querySelector("#ingredients");

const IngredientsArray = ingredients.map(ingredient => {
  const newIngredient = document.createElement("li");

  newIngredient.textContent = ingredient;
  newIngredient.classList.add("item");

  return newIngredient;
});

ingredientsListRef.append(...IngredientsArray); */