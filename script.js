let rowNumberSection=document.querySelector(".row-number-section");

for(let i=1;i<=100;i++){
    let div=document.createElement("div")
    div.classList.add("row-number")
    div.innerText=i;
    rowNumberSection.append(div)
}

let columnTagSection=document.querySelector(".column-tag-section")
for(let i=0;i<26;i++){
    let asciiCode=65+i//65+0=A
    let reqAlpha=String.fromCharCode(asciiCode);

    let div=document.createElement("div")
    div.classList.add("column-tag")
    div.innerText=reqAlpha;
    columnTagSection.append(div)
}