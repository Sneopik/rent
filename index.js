const show_btn = document.querySelector(".navbar-btn");
const modal_form = document.querySelector(".modal-form");
const close_form = document.querySelector(".close");

show_btn.addEventListener("click", () => {
  modal_form.style.display = "block";
  setTimeout(() => {
    modal_form.style.opacity = "1";
  }, 500);
});

close_form.addEventListener("click", () => {
  modal_form.style.opacity = "0";
  setTimeout(() => {
    modal_form.style.display = "none";
  }, 1000);
});
