// const checkbox1 = document.querySelector("#cb1");
// const checkbox2 = document.querySelector("#cb2");

const checkboxes = []; 
const allCheckboxes = document.querySelectorAll('input[type=checkbox]')
for (cb of allCheckboxes) {
    if (cb.id.startsWith("cb")) {
        checkboxes.push(cb); 
    }
}


const timestampCells = document.querySelectorAll('.timestamp');

const resetButton = document.getElementById("reset"); 


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