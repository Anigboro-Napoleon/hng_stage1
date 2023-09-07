const date = new Date();
const getDay = date.getDay();
const getUtc = date.toISOString();
const currentUtc = getUtc.slice(11, 19);
console.log(currentUtc);

const dayName = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const currentDay = dayName.filter((day) => day === dayName[getDay])

const today = document.querySelector('.day');
const currentTime = document.querySelector('.utcTime');
console.log(currentTime);
today.textContent = currentDay;
currentTime.textContent = `${currentUtc} UTC`
