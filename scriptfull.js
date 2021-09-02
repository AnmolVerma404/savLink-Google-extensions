// function btnClick(){
//We use this by inserting onclick inside html better to use bellow code via add event listener
//     console.log("Botton Clicked!!!");
// }

let btnEl = document.getElementById("input-btn");
// const myLeads = ["www.ex1.com", "www.ex2.com", "www.ex3.com"];
const myLeads = [];
const inputEl = document.getElementById("input");
const ulEl = document.getElementById("ul");

btnEl.addEventListener("click", function () {
  // let inputVal = document.getElementById("input").value;
  // console.log("Botton Clicked via event listener!!!");
  myLeads.push(inputEl.value);
  // console.log(myLeads);
  
  inputEl.value = "";
  localStorage.setItem("myLeads", JSON.stringify(myLeads));

  renderLeades();
  console.log(myLeads);
  console.log(typeof myLeads);
});

function renderLeades() {
  let listItems = "";
  for (let i = 0; i < myLeads.length; i++) {
    // console.log(myLeads[i]);
    // ulEl.innerHTML += "<li>"+ (myLeads[i]) + "</li>";//Or
    // const li = document.createElement("li");
    // li.textContent = myLeads[i];
    // ulEl.append(li);
    listItems += `
    <li>
      <a href ='${myLeads[i]}' target = '_blank'> 
          ${myLeads[i]}
      </a>
    </li>`;
  }
  ulEl.innerHTML = listItems;
}

// localStorage.clear();
function getLeads() {
  let leadsFromStorage = JSON.parse(localStorage.getItem("myLeads"));
  console.log(leadsFromStorage);
}
getLeads();
