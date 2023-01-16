import { DateTime } from './luxon.js';

const date = document.querySelector('#currentDate');

const updateClock = () => {
  const now = DateTime.now();
  date.innerHTML = now.toLocaleString(DateTime.DATETIME_FULL);
};

export default updateClock;