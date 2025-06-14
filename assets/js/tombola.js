const createCell = function () {
  const tabellone = document.getElementById("tabellone");

  for (let i = 0; i < 90; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    const numberCell = document.createElement("h3");
    numberCell.innerText = i + 1;
    cell.appendChild(numberCell);
    tabellone.appendChild(cell);
  }
};

createCell();

const extractNumber = [];

const buttonNumber = document.getElementById("buttonNumber");
const h3Number = document.getElementById("number");

buttonNumber.addEventListener("click", () => {
  const randomNumber = Math.floor(Math.random() * 90) + 1;
  h3Number.innerText = randomNumber;

  if (extractNumber.includes(randomNumber)) {
    alert(`Il numero ${randomNumber} è già uscito`);
  }

  extractNumber.push(randomNumber);
  const cellMarker = document.querySelectorAll(".cell h3");

  cellMarker.forEach((number) => {
    if (randomNumber === parseInt(number.innerText)) {
      number.classList.add("cellCheck");
    }
  });
});
