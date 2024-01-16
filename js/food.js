const menus = [
  "burgers",
  "desserts",
  "kids",
  "mains",
  "salads",
  "starters",
  "wurst",
];

function setupPage(menu) {
  fetch(`../json/${menu}.json`)
    .then((response) => response.json())
    .then((foods) => {
      for (let i = 0; i < foods.length; i++) {
        let food = foods[i];
        createFoodMenu(menu, food);
      }
    });
}

function createFoodMenu(menu, food) {
  let name = document.createElement("span");
  name.innerText = food.name;
  name.classList.add("item-name");

  let detail = document.createElement("span");
  detail.classList.add("item-detail");
  detail.innerText = food.description;

  let li = document.createElement("li");
  li.classList.add("list-item");
  li.appendChild(name);
  li.appendChild(detail);

  const list = document.getElementById(`${menu}-list`);
  list.appendChild(li);
}

menus.forEach(setupPage);
