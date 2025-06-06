const linkNav = document.querySelectorAll('.nav-link');
// console.log(linkNav);
linkNav.forEach(link => {
  link.addEventListener('click', function () {
    linkNav.forEach((l) => {
      l.classList.remove('fw-bold');
    });
    link.classList.add('fw-bold');
  })
});