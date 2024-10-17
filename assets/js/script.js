'use strict';

// Element toggle function
const elementToggleFunc = function (elem) { 
    elem.classList.toggle("active"); 
}

// Sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// Sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { 
    elementToggleFunc(sidebar); 
});

// Testimonials variables
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// Modal variables
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

// Modal toggle function
const testimonialsModalFunc = function () {
    modalContainer.classList.toggle("active");
    overlay.classList.toggle("active");
}

// Add click event to all modal items
testimonialsItem.forEach(item => {
    item.addEventListener("click", function () {
        modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
        modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
        modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
        modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;

        testimonialsModalFunc();
    });
});

// Add click event to modal close button
modalCloseBtn.addEventListener("click", testimonialsModalFunc);
overlay.addEventListener("click", testimonialsModalFunc);

// Custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-select-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

// Select toggle functionality
select.addEventListener("click", function () { 
    elementToggleFunc(this); 
});

// Add event to all select items
selectItems.forEach(item => {
    item.addEventListener("click", function () {
        let selectedValue = this.innerText.toLowerCase();
        selectValue.innerText = this.innerText;
        elementToggleFunc(select);
        filterFunc(selectedValue);
    });
});

// Filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

// Filter function
const filterFunc = function (selectedValue) {
    filterItems.forEach(item => {
        if (selectedValue === "all" || selectedValue === item.dataset.category) {
            item.classList.add("active");
        } else {
            item.classList.remove("active");
        }
    });
}

// Add event to all filter button items for large screen
let lastClickedBtn = filterBtn[0];

filterBtn.forEach(btn => {
    btn.addEventListener("click", function () {
        let selectedValue = this.innerText.toLowerCase();
        selectValue.innerText = this.innerText;
        filterFunc(selectedValue);

        lastClickedBtn.classList.remove("active");
        this.classList.add("active");
        lastClickedBtn = this;
    });
});

// Contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// Add event to all form input fields
formInputs.forEach(input => {
    input.addEventListener("input", function () {
        formBtn.disabled = !form.checkValidity();
    });
});

// Page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// Add event to all nav links
navigationLinks.forEach((link, index) => {
    link.addEventListener("click", function () {
        const clickedLink = this.innerText.toLowerCase().trim();

        pages.forEach((page, i) => {
            if (clickedLink === page.dataset.page) {
                page.classList.add("active");
                navigationLinks[i].classList.add("active");
                window.scrollTo(0, 0);
            } else {
                page.classList.remove("active");
                navigationLinks[i].classList.remove("active");
            }
        });
    });
});
