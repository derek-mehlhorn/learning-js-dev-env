import {getUsers} from './api/userApi';

getUsers().then((result) => {
  let table = window.document.getElementById("users");
  let tableHtml = "";
  result.forEach(user => {
    tableHtml += `<tr>
    <td>${user.id}</td>
    <td>${user.firstName}</td>
    <td>${user.lastName}</td>
    <td>${user.email}</td>
    </tr>`
  });
  table.innerHTML = tableHtml;
});
