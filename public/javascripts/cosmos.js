const form = document.getElementById('addPageForm'); //The whole form ID
const tableBody = document.getElementById('tableBody'); // Selecting tbody 
const button = document.querySelector('button');

//Select all input values
var addPageText = document.getElementById("addPageTitle");
var addPageBody = document.getElementById("addPageBody");
var addPageChecked = document.getElementById("addPageChecked");
var addPageMeta = document.getElementById("addPageMeta");
var addPageDes = document.getElementById("addPageDes");

let pagesValues = {
    addPageText: addPageText,
    addPageTextBody: addPageBody,
    addPageChecked: addPageChecked,
    addpageMeta: addPageMeta,
    addPageDes: addPageDes
}



//create tr
function createTrTd(text) {
    const tr = document.createElement("tr");
    const td = document.createElement("td");
    td.textContent = text;
    tr.appendChild(td);
}

//console.log(tableBody);

function addpageBtn() {
    var createTd = createTrTd(pagesValues.value);


}