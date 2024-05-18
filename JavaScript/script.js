///By Thai Hak

document.addEventListener("DOMContentLoaded", function () {
  var contactsTable = document
    .getElementById("contactsTable")
    .getElementsByTagName("tbody")[0];
  var contactForm = document.getElementById("contactForm");

  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    var name = document.getElementById("name").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var currentDate = new Date().toISOString().slice(0, 10);

    var newRow = contactsTable.insertRow();

    var counterCell = newRow.insertCell(0);
    counterCell.textContent = contactsTable.rows.length;

    var nameCell = newRow.insertCell(1);
    nameCell.textContent = name;

    var phoneCell = newRow.insertCell(2);
    phoneCell.textContent = phone;

    var emailCell = newRow.insertCell(3);
    emailCell.textContent = email;

    var dateCell = newRow.insertCell(4);
    dateCell.textContent = currentDate;

    var editButtonCell = newRow.insertCell(5);
    var editButton = document.createElement("button");
    editButton.className = "btn btn-success";
    editButton.textContent = "Edit";
    editButtonCell.appendChild(editButton);
    editButton.addEventListener("click", function () {
      document.getElementById("name").value = name;
      document.getElementById("phone").value = phone;
      document.getElementById("email").value = email;
      newRow.remove();
    });

    var deleteButtonCell = newRow.insertCell(6);
    var deleteButton = document.createElement("button");
    deleteButton.className = "btn btn-danger";
    deleteButton.textContent = "Delete";
    deleteButtonCell.appendChild(deleteButton);
    deleteButton.addEventListener("click", function () {
      contactsTable.deleteRow(newRow.rowIndex - 1);
      reIndexTable(contactsTable);
    });

    contactForm.reset();
  });
});
function reIndexTable(table) {
  for (var i = 0, row; (row = table.rows[i]); i++) {
    // Cells[0] is the index cell, adjust as necessary for your setup
    row.cells[0].textContent = i + 1;
  }
}
