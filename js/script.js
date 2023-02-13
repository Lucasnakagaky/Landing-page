window.sr = ScrollReveal({
  reset: true,
});

 /* Home*/
sr.reveal(".home-img-css", { origin: "top", distance: "80px", duration: 3000 });
sr.reveal(".largura", { origin: "top", distance: "80px", duration: 3000 });
sr.reveal(".social", { display: 500, origin: "top", distance: "80px", duration: 3500  });
/* Front-End */
sr.reveal(".icon", { origin: "right", distance: "80px", duration: 4000 });
sr.reveal("p", { origin: "right", distance: "80px", duration: 3000 });
/* Desing grafico */
sr.reveal("h1", { origin: "top", distance: "80px", duration: 4000 });
sr.reveal("h2", { origin: "left", distance: "80px", duration: 4000 });
sr.reveal(".img_designer", { origin: "right", distance: "80px", duration: 4000 });
/* Rodape */
sr.reveal(".rodape_social", { display: 500, origin: "top", distance: "80px", duration: 5000 });



/* Menu Mobile */
function menuShow() {
  let menuMobile = document.querySelector('.mobile-menu');
  if (menuMobile.classList.contains('open')) {
      menuMobile.classList.remove('open');
      document.querySelector('.icon').src = "assets/img/menu_white_36dp.svg";
  } else {
      menuMobile.classList.add('open');
      document.querySelector('.icon').src = "assets/img/close_white_36dp.svg";
  }
}