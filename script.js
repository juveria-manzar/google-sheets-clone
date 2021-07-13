let rowNumberSection = document.querySelector(".row-number-section");

//row col
for (let i = 1; i <= 100; i++) {
    let div = document.createElement("div")
    div.classList.add("row-number")
    div.innerText = i;
    rowNumberSection.append(div)
}

let cellSection = document.querySelector(".cell-section")

let columnTagSection = document.querySelector(".column-tag-section")
//col
for (let i = 0; i < 26; i++) {
    let asciiCode = 65 + i//65+0=A
    let reqAlpha = String.fromCharCode(asciiCode);

    let div = document.createElement("div")
    div.classList.add("column-tag")
    div.innerText = reqAlpha;
    columnTagSection.append(div)
}

for (let i = 1; i <= 100; i++) {
    let rowDiv = document.createElement('div')
    rowDiv.classList.add("row");

    for (let j = 0; j < 26; j++) {
        let asciiCode = 65 + j;

        let reqAlpha = String.fromCharCode(asciiCode)
        let cellAddr = reqAlpha + i;//for i=1 =>a1...z1
        let cellDiv = document.createElement("div")
        cellDiv.setAttribute("contentEditable", true);
        cellDiv.classList.add("cell")
        cellDiv.setAttribute("data-address", cellAddr);
        cellDiv.addEventListener("click", function (e) {
            if (lastCell) {
                lastCell.classList.remove("cell-selected");
            }

            e.currentTarget.classList.add("cell-selected");

            lastCell = e.currentTarget;

            let currCellAddress = e.currentTarget.getAttribute("data-address");

            formulaBarSelectedCellArea.innerText = currCellAddress;
        });

        rowDiv.append(cellDiv)
    }

    cellSection.append(rowDiv)
}