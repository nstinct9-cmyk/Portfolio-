// 1. Select the 3 buttons
const aboutBtn = document.getElementById("about-btn");
const coursesBtn = document.getElementById("courses-btn");
const contactBtn = document.getElementById("contact-btn");

// 2. Select the 3 content sections
const aboutSection = document.getElementById("about");
const coursesSection = document.getElementById("courses");
const contactSection = document.getElementById("contact");

// 3. Function to hide everything first
function hideAll() {
    aboutSection.classList.remove("show");
    coursesSection.classList.remove("show");
    contactSection.classList.remove("show");

    aboutBtn.classList.remove("active");
    coursesBtn.classList.remove("active");
    contactBtn.classList.remove("active");
}

// 4. When About is clicked
aboutBtn.addEventListener("click", function() {
    hideAll();
    aboutSection.classList.add("show");
    aboutBtn.classList.add("active");
});

// 5. When Courses is clicked
coursesBtn.addEventListener("click", function() {
    hideAll();
    coursesSection.classList.add("show");
    coursesBtn.classList.add("active");
});

// 6. When Contact is clicked
contactBtn.addEventListener("click", function() {
    hideAll();
    contactSection.classList.add("show");
    contactBtn.classList.add("active");
});