// ===============================
// NEXUS PHOENIX SCHEDULER
// ===============================

// ---------- CONFIG ----------
const SERVER_OFFSET = 8; // UTC+8

// ---------- ELEMENTS ----------
const serverTimeEl = document.getElementById("serverTime");
const localTimeEl = document.getElementById("localTime");
const currentWeekEl = document.getElementById("currentWeek");

// ---------- CLOCK ----------
function updateClock() {

    const now = new Date();

    // LOCAL TIME
    localTimeEl.textContent = now.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
    });

    // SERVER TIME (UTC+8)
    const utc =
        now.getTime() +
        now.getTimezoneOffset() * 60000;

    const serverDate = new Date(
        utc + SERVER_OFFSET * 3600000
    );

    serverTimeEl.textContent = serverDate.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false
    });

}

updateClock();

setInterval(updateClock,1000);

// ---------- TEMP ----------
currentWeekEl.textContent = "Week 1";
