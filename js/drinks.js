function setupPage() {
  fetch("../js/drinks.json")
    .then((response) => response.json())
    .then((drinks) => {
      for (let i = 0; i < drinks.length; i++) {
        if (drinks[i].type != "yard-bar-draft") {
          let drink = drinks[i];
          createDrinkMenu(drink);
        }
      }
    });
}

function createDrinkMenu(drink) {
  let name = document.createElement("span");
  name.innerText = drink.name;
  name.classList.add("item-name");

  let size = document.createElement("span");
  size.classList.add("item-size");
  size.innerText = drink.size;

  let nameCont = document.createElement("li");
  nameCont.classList.add("list-name");
  nameCont.appendChild(name);
  nameCont.appendChild(size);

  let detail = document.createElement("span");
  detail.innerText = drink.style;
  detail.classList.add("item-detail");

  let abv = document.createElement("span");
  abv.innerText = drink.abv;
  abv.classList.add("item-detail");

  let detailCont = document.createElement("li");
  detailCont.classList.add("list-detail");
  detailCont.appendChild(detail);
  detailCont.appendChild(abv);

  let listCont = document.createElement("li");
  listCont.classList.add("list-item");
  listCont.appendChild(nameCont);
  listCont.appendChild(detailCont);

  const list = document.getElementById(`${drink.type}-list`);
  list.appendChild(listCont);
}

setupPage();
