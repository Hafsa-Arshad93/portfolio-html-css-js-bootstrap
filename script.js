fetch("../components/navbar.html")
    .then(response => response.text())
    .then(data => {
        document.getElementById("navbar").innerHTML = data;
    });

    // ----------------------Contact Form----------------------//
 

const contactForm = document.getElementById("contactForm");
if (contactForm) {
    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();
        let name = document.getElementById("name").value.trim();
        let email = document.getElementById("email").value.trim();
        let message = document.getElementById("message").value.trim();
        let formMessage = document.getElementById("formMessage");
        if (name === "" || email === "" || message === "") {
            formMessage.textContent = "Please fill in all fields.";
            return;
        }
        formMessage.textContent = "Your message has been submitted!";
        contactForm.reset();
    });
}
// ---------------------back to top button ---------------------


const backToTop = document.getElementById("backToTop");
if (backToTop) {
    window.addEventListener("scroll", function() {
        if (window.scrollY > 200) {
            backToTop.style.display = "block";
        } else {
            backToTop.style.display = "none";
        }
    });
    backToTop.addEventListener("click", function() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}
