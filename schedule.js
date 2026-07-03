const SERVER_TIMEZONE = "Asia/Singapore"; // UTC+8

const DAYS = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday"
];

const SCHEDULE = {

  1: {

    Monday: [
      { type: "Resource Fields", time: "00:00" }
    ],

    Tuesday: [
      { type: "Alliance Droid", time: "01:00" },
      { type: "Silo Event", time: "21:00" },
      { type: "Resource Fields", time: "12:00" }
    ],

    Wednesday: [
      { type: "Supply Contest", time: "09:00" },
      { type: "Resource Fields", time: "00:00" }
    ],

    Thursday: [
      { type: "Alliance Droid", time: "10:00" },
      { type: "Resource Fields", time: "12:00" }
    ],

    Friday: [
      { type: "Supply Contest", time: "09:00" },
      { type: "Resource Fields", time: "00:00" }
    ],

    Saturday: [
      { type: "Capital Contest", time: "10:00" },
      { type: "Alliance Droid", time: "01:00" },
      { type: "Resource Fields", time: "12:00" }
    ],

    Sunday: [
      { type: "Supply Contest", time: "09:00" },
      { type: "Resource Fields", time: "00:00" }
    ]

  }

};
