const addExpenseButton = document.getElementById("addExpenseButton");
const tableBodyElement = document.getElementById("tableBody");
const entireTable = document.querySelector("table")
const allInputs = document.querySelectorAll("input");

//when 'add expense' button is clicked, table is populated with inputs
addExpenseButton.addEventListener("click", function () {
    const nameInputField = document.getElementById("nameInputField").value;

    const dateInputField = document.getElementById("dateInputField").value;

    const amountInputField = document.getElementById("amountInputField").value;

    //calls function to proplery format html date and stores value as 'reformatedDate'
    let reformatedDate = changeFormat(dateInputField)

    //checks to make sure all input fields are filled correctly before creating new table row
    if (dateInputField == '' || nameInputField == '' || amountInputField == '') {
        alert('Please fill in all fields before submitting.')
    } else {
        tableBodyElement.innerHTML += `
        <tr>
            <td>${nameInputField}</td>
            <td>${reformatedDate}</td>
            <td>${'$' + amountInputField}</td>
            <td><button class="deleteBtn">Delete</button></td>
        </tr>
    `;  
    }

    //calls function to reset input fields after clicking 'add expense' button
    resetInputFields();
})

//adjusts date from abnormal format (stored value in javascript) to proper HTML format
function changeFormat(date) {
    let numberToString = Array.from(String(date), Number); 

    let dayArray = numberToString.slice(5, 7)
    
    let monthArray = numberToString.slice(8, 10)

    let yearArray = numberToString.slice(0, 4)

    let dayStringWithCommas = dayArray.toString();
    let dayStringNoCommas = dayStringWithCommas.replace(/,/g, '');

    let monthStringWithCommas = monthArray.toString();
    let monthStringNoCommas = monthStringWithCommas.replace(/,/g, '');

    let yearStringWithCommas = yearArray.toString();
    let yearStringNoCommas = yearStringWithCommas.replace(/,/g, '');

    return `${dayStringNoCommas}-${monthStringNoCommas}-${yearStringNoCommas}`
}

function resetInputFields() {
    allInputs.forEach(function (input) {
        return input.value = '';
    })
}

//clicking the delete button removes table row
entireTable.addEventListener('click', function (e) {
    if (!e.target.classList.contains("deleteBtn")) {
        return;
    } 
    e.target.closest("tr").remove();
});