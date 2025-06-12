const createCell = function () {
  const tabellone = document.getElementById("tabellone");

  for (let i = 0; i < 76; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    const numberCell = document.createElement("h3");
    numberCell.innerText = i + 1;
    cell.appendChild(numberCell);
    tabellone.appendChild(cell);
  }
};

createCell();

const takeNumber = function () {
  const buttonNumber = document.getElementById("buttonNumber");
  const h3Number = document.getElementById("number");

  buttonNumber.addEventListener("click", (e) => {
    const randomNumber = Math.ceil(Math.random() * 76);
    h3Number.innerText = randomNumber;
  });

  buttonNumber.addEventListener("click", () => {
    const cellMarker = document.querySelectorAll(".cell h3");
    for (let i = 0; i < cellMarker.length; i++) {
      cellMarker[i].classList.add("cellCheck");
    }
  });
};
