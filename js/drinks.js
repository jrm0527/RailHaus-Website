import drinks from "../js/drinks.json" assert { type: "json" };

function setupPage() {
  for (let i = 0; i < drinks.length; i++) {
    let drink = drinks[i];
    createDrinkMenu(drink);
  }
}

function createDrinkMenu(drink) {
  let name = document.createElement("span");
  name.innerText = drink.name;
  name.classList.add("item-name");

  let detail = document.createElement("span");
  detail.classList.add("item-size");
  detail.innerText = drink.size;

  let li = document.createElement("li");
  li.classList.add("list-item");
  li.appendChild(name);
  li.appendChild(detail);

  const list = document.getElementById(`${drink.type}-list`);
  list.appendChild(li);
}

setupPage();
