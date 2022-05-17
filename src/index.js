
import { companiesData } from "./companies-data";

const extraRecord = {
  title: "JS in FM Training",
  type: "Binge Mode",
  cohort: "2",
  startDate: "2022-04-12",
};

const before = document.getElementById("before");
const after = document.getElementById("after");


//TODO: Extract an element from the array.
// const manipulatedData = companiesData[0];
// const manipulatedData = companiesData.length;

//TODO: Add elements to beginning and end of array.
// const manipulatedData = companiesData.pop();

//TODO: Remove Elements from end of array.
// const manipulatedData = companiesData.shift();
// const manipulatedData = companiesData.unshift(extraRecord); //start
// const manipulatedData = companiesData.push(extraRecord); //end

//TODO: Create a new array from old data.

// const manipulatedData = companiesData.map(mapOverData);

//TODO: Filter for a certain state.
// const filterForState = function (company) {
//   return company.fieldData.State === "OR";
// };
// const manipulatedData = companiesData.filter(filterForState);

//TODO: Find the first element with a certain name.
// const manipulatedData = companiesData.find(filterForState);

//TODO: Create a new array with just elements of a certain state.
// const manipulatedData = companiesData.filter(filterForState).map(mapOverData);

//TODO: Create buttons for each record.

//functions are here

const mapOverData = function (data) {
  return {
  company: data.fieldData.CompanyName, 
  state: data.fieldData.State,
};
};

const filterForState = function (company) {
  return company.fieldData.State === "TX";
};

const sortBy = (a, b) => 
  a.fieldData.CompanyName > b.fieldData.CompanyName ? 1 : -1;

const doForEach = function (company, i) {
  const button = document.createElement("button");
  button.innerHTML = company.fieldData.CompanyName;
  button.className = "btn btn-sm btn-warning m-1 col-5";
  button.id = company.fieldData.Id;
  button.addEventListener("click", function () {
    // alert("Howdy");
    console.log(this.id);
  });
  after.appendChild(button);

};

companiesData.sort(sortBy).forEach(doForEach);
// companiesData.filter(filterForState).forEach(doForEach);

// after.innerHTML = JSON.stringify(manipulatedData, null, 2);
// before.innerHTML = JSON.stringify(companiesData, null, 2);
