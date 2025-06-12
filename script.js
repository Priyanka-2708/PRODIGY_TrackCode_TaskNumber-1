// Optional: Change navbar style on scroll
window.addEventListener("scroll", () => {
  const nav = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    nav.style.boxShadow = "0 4px 12px rgba(0,0,0,0.2)";
  } else {
    nav.style.boxShadow = "none";
  }
});
