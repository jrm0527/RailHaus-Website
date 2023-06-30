// import foods from "../js/food.json" assert { type: "json" };

function setupPage() {
  fetch("../js/food.json")
    .then((response) => response.json())
    .then((foods) => {
      for (let i = 0; i < foods.length; i++) {
        let food = foods[i];
        createFoodMenu(food);
      }
    });
}

function createFoodMenu(food) {
  let name = document.createElement("span");
  name.innerText = food.name;
  name.classList.add("item-name");
  // .text(food.name).addClass("item-name");
  let detail = document.createElement("span");
  detail.classList.add("item-detail");
  detail.innerText = food.detail;
  // let detail = $("<span>").text(food.detail).addClass("item-detail");
  let li = document.createElement("li");
  li.classList.add("list-item");
  li.appendChild(name);
  li.appendChild(detail);
  // let li = $("<li>").addClass("list-item").append(name, detail);
  let div = document.createElement("div");
  div.classList.add("tab-content");
  div.appendChild(li);
  // let div = $("<div>").addClass("tab-content").append(li);
  const list = document.getElementById(`${food.type}-list`);
  list.appendChild(div);
}

setupPage();
