function addStudent(e) {
  e.preventDefault();

  let students = JSON.parse(localStorage.getItem("students")) || [];

  let name = document.getElementById("name").value;
  let age = document.getElementById("age").value;
  let phone = document.getElementById("phone").value;
  let email = document.getElementById("email").value;
  let classes = document.getElementById("classes").value.split(",");

  let student = { name, age, phone, email, classes };

  students.push(student);

  localStorage.setItem("students", JSON.stringify(students));

  document.getElementById("studentForm").reset();
}

function displayStudents() {
  let output = document.getElementById("output");
  output.innerHTML = " ";

  let storedStudents = JSON.parse(localStorage.getItem("students")) || [];

  storedStudents.forEach((s, index) => {
    output.innerHTML += `
      <div class="studentCard">
        <p><b>Name: </b> ${s.name}</p>
        <p><b>Age:</b> ${s.age}</p>
        <p><b>Phone:</b> ${s.phone}</p>
        <p><b>Email:</b> ${s.email}</p>
        <p><b>Classes:</b> ${s.classes.join(", ")}</p>
      </div>
    `;
  });
}

function initListeners() {
  $("#studentForm").on("submit", addStudent);

  $("#showStudents").on("click", displayStudents);
}

$(document).ready(function () {
  initListeners();
});
