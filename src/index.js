import {getUsers, deleteUser} from './api/userApi';

getUsers().then((result) => {
  let table = window.document.getElementById("users");
  let tableHtml = "";
  result.forEach(user => {
    tableHtml += `<tr>
    <td><a href="#" data-id="${user.id}" class="deleteUser">x</a></td>
    <td>${user.id}</td>
    <td>${user.firstName}</td>
    <td>${user.lastName}</td>
    <td>${user.email}</td>
    </tr>`
  });
  table.innerHTML = tableHtml;

  // Register click handlers for each delete button.
  const deleteLinks = window.document.getElementsByClassName("deleteUser");
  Array.from(deleteLinks, link => {
    link.onclick = function(event) {
      const element = event.target;
      // Handle click event.
      event.preventDefault();

      // Delete element from server
      deleteUser(element.attributes["data-id"].value);

      // Update UX
      const row = element.parentNode.parentNode;
      row.parentNode.removeChild(row);
    };
  });
});
