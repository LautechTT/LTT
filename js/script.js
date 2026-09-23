/* =========================================================
   LAUTECH TABLE TENNIS
   GLOBAL JAVASCRIPT
========================================================= */

const menuToggle =
    document.getElementById("menuToggle");

const navLinks =
    document.getElementById("navLinks");


/* =========================================================
   MOBILE MENU
========================================================= */

if (menuToggle && navLinks) {

    menuToggle.addEventListener(
        "click",
        function () {

            navLinks.classList.toggle("active");

            const isOpen =
                navLinks.classList.contains("active");

            menuToggle.textContent =
                isOpen ? "×" : "☰";

            menuToggle.setAttribute(
                "aria-expanded",
                isOpen
            );

        }
    );


    /* Close menu after clicking a link */

    navLinks
        .querySelectorAll("a")
        .forEach(function (link) {

            link.addEventListener(
                "click",
                function () {

                    navLinks.classList.remove("active");

                    menuToggle.textContent = "☰";

                    menuToggle.setAttribute(
                        "aria-expanded",
                        "false"
                    );

                }
            );

        });

}


/* =========================================================
   CURRENT PAGE
========================================================= */

const currentPage =
    window.location.pathname.split("/").pop();

document
    .querySelectorAll(".nav-links a")
    .forEach(function (link) {

        const linkPage =
            link.getAttribute("href");

        if (
            linkPage === currentPage ||
            (
                currentPage === "" &&
                linkPage === "index.html"
            )
        ) {

            link.classList.add("active");

        }

    });
