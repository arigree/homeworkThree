function initListeners() {
  $("#submit").on("click", (e) => {
    let students = JSON.parse(localStorage.getItem("students")) || [];
    function addStudent(event) {
      event.preventDefault();

      let name = document.getElementById("name").value;
      let age = document.getElementById("age").value;
      let phone = document.getElementById("phone").value;
      let email = document.getElementById("email").value;
      let classes = document.getElementById("classes").value.split(",");

      let student = { name, age, phone, email, classes };

      students.push(student);

      localStorage.setItem("students", JSON.stringify(students));
    }

    function displayStudents() {
      let output = document.getElementById("output");
      output.innerHTML = "";

      let storedStudents = JSON.parse(localStorage.getItem("students")) || [];

      storedStudents.forEach((s, index) => {
        output.innerHTML += `
                <div class="studentCard">
                <p>Age: ${s.age}</p>
                <p>Phone: ${s.phone}</p>
                <p>Email: ${s.email}</p>
                <p>Classes ${s.classes.join(", ")}</p>
                </div>
                `;
      });
    }
  });

  $("#showLocal").on("click", (e) => {
    getStudents();
  });
}

$(document).ready(function () {
  initListeners();
});
