/* main style */
/* header */
const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('nav');
hamburger.addEventListener('click', () => {
    nav.classList.toggle('show');
})



/* footer */
const year = new Date().getFullYear();
const date = `${year} &copy DeVi Planners.`
document.getElementById('datejs').innerHTML = date;