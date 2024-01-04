const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const monthYear = document.getElementById("monthYear");
const calendarCells = document.getElementById("calendarCells");

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

let currentDate = new Date();

function updateCalendar() {
    const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
    const lastDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);

    monthYear.textContent = months[currentDate.getMonth()] + " " + currentDate.getFullYear();

    calendarCells.innerHTML = "";

    for (let i = 0; i < firstDayOfMonth.getDay(); i++) {
        const emptyCell = document.createElement("div");
        emptyCell.classList.add("cell");
        calendarCells.appendChild(emptyCell);
    }

    for (let i = 1; i <= lastDayOfMonth.getDate(); i++) {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        cell.textContent = i;
        calendarCells.appendChild(cell);
    }
}

prevBtn.addEventListener("click", () => {
    currentDate.setMonth(currentDate.getMonth() - 1);
    updateCalendar();
});

nextBtn.addEventListener("click", () => {
    currentDate.setMonth(currentDate.getMonth() + 1);
    updateCalendar();
});

updateCalendar();