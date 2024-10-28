const { format, addDays } = require("date-fns");

const currentDay = new Date();

const formattedDate = format(currentDay, "MMMM dd, yyyy");
console.log(`Today is ${formattedDate}`);

const futureDate = addDays(currentDay, 7);
console.log("Future Date:", format(futureDate, "MMMM dd, yyyy"));
