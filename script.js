const header = document.querySelector("header#top");

function setHeaderOffset() {
  const h = header.offsetHeight;
  document.documentElement.style.setProperty("--header-offset", `${h + 12}px`);
}

window.addEventListener("load", setHeaderOffset);
window.addEventListener("resize", setHeaderOffset);
setHeaderOffset();

const yearSpan = document.getElementById("year");

const currentYear = new Date().getFullYear();

yearSpan.textContent = currentYear;

document.querySelectorAll("nav a").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    document.querySelector(link.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});
