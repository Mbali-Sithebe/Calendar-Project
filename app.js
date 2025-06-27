// Get today's date
const today = new Date();
let currentMonth = today.getMonth();
let currentYear = today.getFullYear();

// Function to generate the calendar
function generateCalendar(month, year) {
  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);
  const daysInMonth = lastDay.getDate();
  const startDay = firstDay.getDay(); // Day of the week the month starts on

  // Render the month and year header
  const monthName = firstDay.toLocaleString("default", { month: "long" });
  document.querySelector(".month h1").textContent = `${monthName} ${year}`;
  document.querySelector(".month p").textContent = today.toLocaleDateString(
    "default",
    { weekday: "long" }
  );

  // Clear previous dates
  const daysContainer = document.querySelector(".days");
  daysContainer.innerHTML = "";

  // Generate empty cells for days before the start of the month
  for (let i = 0; i < startDay; i++) {
    const emptyCell = document.createElement("div");
    daysContainer.appendChild(emptyCell);
  }

  // Create the day cells
  for (let day = 1; day <= daysInMonth; day++) {
    const dayElement = document.createElement("div");
    dayElement.textContent = day;
    dayElement.classList.add("day");

    // If this is today's date, add the "today" class
    if (
      day === today.getDate() &&
      month === today.getMonth() &&
      year === today.getFullYear()
    ) {
      dayElement.classList.add("today");
    }

    daysContainer.appendChild(dayElement);
  }
}

// Event listener for the "previous" button
document.querySelector(".prev").addEventListener("click", () => {
  currentMonth--;
  if (currentMonth < 0) {
    currentMonth = 11;
    currentYear--;
  }
  generateCalendar(currentMonth, currentYear);
});

// Event listener for the "next" button
document.querySelector(".next").addEventListener("click", () => {
  currentMonth++;
  if (currentMonth > 11) {
    currentMonth = 0;
    currentYear++;
  }
  generateCalendar(currentMonth, currentYear);
});

// Initialize the calendar with the current month and year
generateCalendar(currentMonth, currentYear);
