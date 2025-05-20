let arrowBtn = document.getElementById("btn-back-to-top");

window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        arrowBtn.style.display = "block";
    } else {
        arrowBtn.style.display = "none";
    }
}

arrowBtn.addEventListener("click", backToTop);

function backToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

Array.from(document.querySelectorAll('#anchor'))
    .forEach(item => {
        item.addEventListener('click', event => {
            new bootstrap.Collapse(document.getElementById("navbarNavDropdown")).hide();
        })
    });




  












