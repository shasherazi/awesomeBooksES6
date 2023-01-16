const date = document.querySelector('#currentDate');

const updateClock = () => {
  const now = new Date();
  date.innerHTML = now.toString().substring(0, 21);
};

export default updateClock;