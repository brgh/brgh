/*

This script is to add event listeners to the checkboxes so that we can populate 
adjacent column with the timestamp. 

*/


const checkboxes = [];      // an empty array to hold the checkboxes in our table

// allCheckboxes gets us ALL the checkboxes including ones that come with the theme apparently 
const allCheckboxes = document.querySelectorAll('input[type=checkbox]')

// loop through the node list and push only the checkboxes in the table 
for (cb of allCheckboxes) {
    if (cb.id.startsWith("cb")) { // finding the relevant checkboxes by checking if starts with 'cb'; couldn't think of other way 
        checkboxes.push(cb); 
    }
}

// get the button element (id is reset)
const resetButton = document.getElementById("reset"); 

// add event listener to each checkbox element 
checkboxes.forEach((cb,i) => {
    cb.addEventListener("click", () => {
        getAdjTimestampCell(cb).innerText = getDateTime();
    })
});


resetButton.addEventListener("click", () => {
    checkboxes.forEach((cb,i) => {
        cb.checked = false; 
        getAdjTimestampCell(cb).innerText = "";
    }); 
    
  })

function getDateTime() {
  return new Date().toJSON();
}

function getAdjTimestampCell(checkbox) {
    const id = `${checkbox.id}-value`;
    console.log(id);
    const timestampCell = document.getElementById(id); 
    return timestampCell;
}