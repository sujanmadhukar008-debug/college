const searchInput = document.getElementById("searchInput");
const books = document.querySelectorAll("#bookList li");


 document.body.style.backgroundColor = "#f5f5f5";
 document.querySelector("h1").style.color = "#0d6efd";

searchInput.addEventListener("keyup", () => {

    let value = searchInput.value.toLowerCase();

    books.forEach(book => {

        if (book.textContent.toLowerCase().includes(value)) {
            book.style.display = "block";
        } else {
            book.style.display = "none";
        }

    });

});

document.getElementById("regForm").addEventListener("submit", function(e){

    e.preventDefault();

    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let gender = document.getElementById("gender").value;

    alert("Registration successful, " + name + " (Age: " + age + ", Gender: " + gender + ")");

    this.reset();

});
