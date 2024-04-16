// fill in javascript code here
document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const tableBody = document.querySelector("tbody");
  
    form.addEventListener("submit", function (e) {
      e.preventDefault();
  
      const name = document.getElementById("name").value;
      const employeeID = document.getElementById("employeeID").value;
      const department = document.getElementById("department").value;
      const experience = parseInt(document.getElementById("exp").value);
      const email = document.getElementById("email").value;
      const mobileNumber = document.getElementById("mbl").value;
      const role = getEmployeeRole(experience);
  
      // Create a new row in the table
      const row = document.createElement("tr");
  
      // Create table data (td) elements for each column
      const nameCell = createTableCell(name);
      const employeeIDCell = createTableCell(employeeID);
      const departmentCell = createTableCell(department);
      const experienceCell = createTableCell(experience);
      const emailCell = createTableCell(email);
      const mobileNumberCell = createTableCell(mobileNumber);
      const roleCell = createTableCell(role);
      const deleteCell = createDeleteButton();
  
      row.appendChild(nameCell);
      row.appendChild(employeeIDCell);
      row.appendChild(departmentCell);
      row.appendChild(experienceCell);
      row.appendChild(emailCell);
      row.appendChild(mobileNumberCell);
      row.appendChild(roleCell);
      row.appendChild(deleteCell);
  
      tableBody.appendChild(row);
  
      form.reset();
    });
  
    function getEmployeeRole(experience) {
      if (experience > 5) {
        return "Senior";
      } else if (experience >= 2) {
        return "Junior";
      } else {
        return "Fresher";
      }
    }
  
    function createTableCell(content) {
      const cell = document.createElement("td");
      cell.textContent = content;
      return cell;
    }
  
    function createDeleteButton() {
      const deleteCell = document.createElement("td");
      const deleteButton = document.createElement("button");
      deleteButton.textContent = "Delete";
      deleteButton.addEventListener("click", function () {
        const row = deleteButton.closest("tr");
        row.remove();
      });
      deleteCell.appendChild(deleteButton);
      return deleteCell;
    }
  });