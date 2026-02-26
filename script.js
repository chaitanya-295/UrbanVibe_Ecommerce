window.addEventListener("scroll",()=>{
  document.querySelector(".navbar").classList.toggle(
    "nav-scroll", window.scrollY > 50
  );
});