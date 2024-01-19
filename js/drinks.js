const menus = [
  "beer-cocktails",
  "cans-bottles",
  "cocktails",
  "flights",
  "main-bar-draft",
  "spirits",
  "wine",
];

function setupPage(menu) {
  fetch(`../json/${menu}.json`)
    .then((response) => response.json())
    .then((drinks) => {
      for (let i = 0; i < drinks.length; i++) {
        let drink = drinks[i];
        createDrinkMenu(menu, drink);
      }
    });
}

function createDrinkMenu(menu, drink) {
  let name = document.createElement("span");
  name.innerText = drink.name;
  name.classList.add("item-name");

  let detail = document.createElement("span");
  detail.innerText = drink.description;
  detail.classList.add("item-detail");

  let li = document.createElement("li");
  li.classList.add("list-item");
  li.appendChild(name);
  li.appendChild(detail);

  //OLD ITEMS WITH ABV AND DRINK STYLE
  // let size = document.createElement("span");
  // size.classList.add("item-size");
  // size.innerText = drink.size;

  // let nameCont = document.createElement("li");
  // nameCont.classList.add("list-name");
  // nameCont.appendChild(name);
  // nameCont.appendChild(size);

  // let abv = document.createElement("span");
  // abv.innerText = drink.abv;
  // abv.classList.add("item-detail");

  // let detailCont = document.createElement("li");
  // detailCont.classList.add("list-detail");
  // detailCont.appendChild(detail);
  // detailCont.appendChild(abv);

  // let listCont = document.createElement("li");
  // listCont.classList.add("list-item");
  // listCont.appendChild(nameCont);
  // listCont.appendChild(detailCont);

  const list = document.getElementById(`${menu}-list`);
  list.appendChild(li);
}

menus.forEach(setupPage);
