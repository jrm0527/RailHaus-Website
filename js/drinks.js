import drinks from "./drinks.json" assert { type: "json" };

function setupPage() {
  for (let i = 0; i < drinks.length; i++) {
    let drink = drinks[i];
    createDrinkMenu(drink);
  }
}

function createDrinkMenu(drink) {
  let name = $("<span>").text(drink.name).addClass("item-name");
  let size = $("<span>").text(drink.size).addClass("item-size");
  let li = $("<li>").addClass("list-item").append(name, size);
  let div = $("<div>").addClass("tab-content").append(li);
  $(`#${drink.type}-list`).append(div);
}

setupPage();
