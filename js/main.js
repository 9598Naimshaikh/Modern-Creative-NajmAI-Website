const navbar = document.querySelector("nav");
const hamburger = document.querySelector(".hamburger");
const question = document.querySelectorAll(".question");


hamburger.addEventListener("click", () => {
    navbar.classList.toggle("active");
})



question.forEach((item) => {
    item.addEventListener("click", () => {
        item.classList.toggle("active");
    })
});


// ---- cursor effect-----
const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", (e) => {
    cursor.style.left = e.x + "px";
    cursor.style.top = e.y + "px";
});

