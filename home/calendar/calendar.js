const calendar = document.getElementById("calendar");
const monthYear = document.getElementById("month-year");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

const months = [
  "Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran",
  "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"
];

let currentDate = new Date();

function renderCalendar(date) {
  const year = date.getFullYear();
  const month = date.getMonth();
  const today = new Date();

  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);
  const startDay = firstDay.getDay() === 0 ? 6 : firstDay.getDay() - 1;

  monthYear.textContent = `${months[month]} ${year}`;
  calendar.innerHTML = "";

  const prevMonthLastDate = new Date(year, month, 0).getDate();
  for (let i = startDay - 1; i >= 0; i--) {
    const cell = document.createElement("div");
    cell.textContent = prevMonthLastDate - i;
    cell.classList.add("other-month");
    calendar.appendChild(cell);
  }

  for (let i = 1; i <= lastDay.getDate(); i++) {
    const cell = document.createElement("div");
    cell.textContent = i;
    if (
      i === today.getDate() &&
      month === today.getMonth() &&
      year === today.getFullYear()
    ) {
      cell.classList.add("today");
    }
    calendar.appendChild(cell);
  }

  const totalCells = startDay + lastDay.getDate();
  const nextDays = 42 - totalCells;
  for (let i = 1; i <= nextDays; i++) {
    const cell = document.createElement("div");
    cell.textContent = i;
    cell.classList.add("other-month");
    calendar.appendChild(cell);
  }
}

prevBtn.addEventListener("click", () => {
  currentDate.setMonth(currentDate.getMonth() - 1);
  renderCalendar(currentDate);
});

nextBtn.addEventListener("click", () => {
  currentDate.setMonth(currentDate.getMonth() + 1);
  renderCalendar(currentDate);
});

renderCalendar(currentDate);
