// import foods from "../js/food.json" assert { type: "json" };
let hidden = false;
const monthNames = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

function setupPage() {
  fetch("../js/events.json")
    .then((response) => response.json())
    .then((events) => {
      for (let i = 0; i < events.length; i++) {
        let today = new Date();
        let date = new Date(today);
        date.setDate(date.getDate() - 1);
        let eventDate = Date.parse(events[i].date);
        if (eventDate >= date) createEventList(events[i]);
      }
    });
}

function createEventList(event) {
  if (!hidden) {
    const noEvents = document.getElementById(`no-event`);
    noEvents.classList.add("hide");
    hidden = true;
  }

  let eventDate = new Date(event.date);
  eventDate.setDate(eventDate.getDate() + 1);

  let month = document.createElement("span");
  let dateMonth = new Date(eventDate);
  month.innerText = monthNames[dateMonth.getMonth()];
  month.classList.add("date-month");

  let day = document.createElement("span");
  let dateDay = new Date(eventDate);
  day.innerText = dateDay.getDate();
  day.classList.add("date-day");

  let dateContainer = document.createElement("div");
  dateContainer.classList.add("date-container");
  dateContainer.appendChild(month);
  dateContainer.appendChild(day);

  let name = document.createElement("span");
  name.classList.add("event-name");
  name.innerText = event.name;

  let item = document.createElement("li");
  item.classList.add("event-item");
  item.appendChild(dateContainer);
  item.appendChild(name);

  const events = document.getElementById(`events`);
  events.appendChild(item);
}

setupPage();
