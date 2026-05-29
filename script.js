const searchInput = document.getElementById("searchInput");
const books = document.querySelectorAll("#bookList li");

const themeColors = ["#f5f5f5", "#fff4e5", "#eef7ff", "#fff0f5"];
let themeIndex = 0;

setInterval(() => {
    document.body.style.backgroundColor = themeColors[themeIndex];
    document.querySelector("h1").style.color = themeIndex % 2 === 0 ? "#0d6efd" : "#198754";
    themeIndex = (themeIndex + 1) % themeColors.length;
}, 2000);

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