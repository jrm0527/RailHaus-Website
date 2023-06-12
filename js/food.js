import foods from "/js/food.json" assert { type: "json" };

for (let i = 0; i < foods.length; i++) {
  let food = foods[i];
  createFoodMenu(food);
}

function createFoodMenu(food) {
  let name = $("<span>").text(food.name).addClass("item-name");
  let detail = $("<span>").text(food.detail).addClass("item-detail");
  let li = $("<li>").addClass("list-item").append(name, detail);
  let div = $("<div>").addClass("tab-content").append(li);
  $(`#${food.type}-list`).append(div);
}
