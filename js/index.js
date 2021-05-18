/* main style */
/* header */
const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('nav');
hamburger.addEventListener('click', () => {
    nav.classList.toggle('show');
})


/* hero */
/* about */
/* services */
/* statistics */
/* education and experience */
/* hire me */
/* our work */
/* testimonials */
/* trusted (logos) */
/* subscribe */
/* blog */
/* contact */

/* footer */
const year = new Date().getFullYear();
const date = `${year} &copy DeVi Planners.`
document.getElementById('datejs').innerHTML = date;