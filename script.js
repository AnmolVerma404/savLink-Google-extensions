let myLeads = [];
const btnEl = document.getElementById("input-btn");
const inputEl = document.getElementById("input");
const ulEl = document.getElementById("ul");
const leadsFromStorage = JSON.parse(localStorage.getItem("myLeads"));
const deleteBtn = document.getElementById("delete-btn");
deleteBtn.addEventListener("dblclick", function () {
  localStorage.clear();
  myLeads = [];
  ulEl.innerHTML = "";
});
const tabBtnEl = document.getElementById("tab-btn");

// console.log(leadsFromStorage);
if (leadsFromStorage) {
  myLeads = leadsFromStorage;
  render(myLeads);
}

tabBtnEl.addEventListener("click", function () {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    myLeads.push(tabs[0].url);
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    render(myLeads);
  });
});

function render(leads) {
  let listItems = "";
  for (let i = 0; i < leads.length; i++) {
    listItems += `
    <li>
      <a href ='${leads[i]}' target = '_blank'> 
          ${leads[i]}
      </a>
    </li>`;
  }
  ulEl.innerHTML = listItems;
}

btnEl.addEventListener("click", function () {
  myLeads.push(inputEl.value);
  inputEl.value = "";
  localStorage.setItem("myLeads", JSON.stringify(myLeads));

  render(myLeads);
  // console.log(myLeads);
  // console.log(typeof myLeads);
});
