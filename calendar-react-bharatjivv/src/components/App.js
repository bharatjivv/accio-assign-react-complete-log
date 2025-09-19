import React, { useState } from "react";

const CalendarApp = () => {
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const today = new Date();
  
  const [month, setMonth] = useState(today.getMonth());
  const [year, setYear] = useState(today.getFullYear());
  const [isEditingYear, setIsEditingYear] = useState(false);

  // Function to generate days for the selected month and year
  const generateDays = () => {
    const firstDay = new Date(year, month, 1).getDay(); // which day of week month starts on
    const daysInMonth = new Date(year, month + 1, 0).getDate(); // number of days in month
    const weeks = [];
    let currentDay = 1 - firstDay;

    while (currentDay <= daysInMonth) {
      const week = [];
      for (let i = 0; i < 7; i++) {
        if (currentDay > 0 && currentDay <= daysInMonth) {
          week.push(currentDay);
        } else {
          week.push(""); // empty cells
        }
        currentDay++;
      }
      weeks.push(week);
    }
    return weeks;
  };

  const handlePrevMonth = () => {
    if (month === 0) {
      setMonth(11);
      setYear(year - 1);
    } else {
      setMonth(month - 1);
    }
  };

  const handleNextMonth = () => {
    if (month === 11) {
      setMonth(0);
      setYear(year + 1);
    } else {
      setMonth(month + 1);
    }
  };

  const handlePrevYear = () => setYear(year - 1);
  const handleNextYear = () => setYear(year + 1);

  return (
    <div id="calendar-app">
      <h2 id="calendar-heading">Calendar</h2>

      {/* Controls */}
      <div>
        <button id="prev-year-btn" onClick={handlePrevYear}>Prev Year</button>
        <button id="prev-month-btn" onClick={handlePrevMonth}>Prev Month</button>

        <select
          id="month-select"
          value={month}
          onChange={(e) => setMonth(parseInt(e.target.value))}
        >
          {months.map((m, i) => (
            <option key={i} value={i}>{m}</option>
          ))}
        </select>

        {isEditingYear ? (
          <input
            id="year-input"
            type="number"
            value={year}
            onChange={(e) => setYear(parseInt(e.target.value))}
            onBlur={() => setIsEditingYear(false)}
            autoFocus
          />
        ) : (
          <span
            id="year-display"
            onDoubleClick={() => setIsEditingYear(true)}
            style={{ margin: "0 10px", cursor: "pointer" }}
          >
            {year}
          </span>
        )}

        <button id="next-month-btn" onClick={handleNextMonth}>Next Month</button>
        <button id="next-year-btn" onClick={handleNextYear}>Next Year</button>
      </div>

      {/* Calendar Table */}
      <table id="days-table" border="1" style={{ marginTop: "20px", borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th>Sun</th><th>Mon</th><th>Tue</th><th>Wed</th>
            <th>Thu</th><th>Fri</th><th>Sat</th>
          </tr>
        </thead>
        <tbody>
          {generateDays().map((week, i) => (
            <tr key={i}>
              {week.map((day, j) => (
                <td key={j}>{day}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CalendarApp;
