    let lastScrollTop = 0;
    const header = document.querySelector('.header');

    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (scrollTop > lastScrollTop) {
            // Scroll down
            header.style.top = '-100px'; // Adjust based on your header height
        } else {
            // Scroll up
            header.style.top = '0';
        }
        lastScrollTop = scrollTop;
    });

    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

      // JavaScript to load the navbar content
      fetch('../Components/Navbar.html')
          .then(response => response.text())
          .then(data => {
              document.getElementById('navbar-placeholder').innerHTML = data;
          });

// Footer

fetch('../Components/Footer.html')
.then(response => response.text())
.then(data => {
    document.getElementById('footer-placeholder').innerHTML = data;
});

// Footer

    // const hambuger = document.querySelector('.hambuger');
    // // const navMenu = document.querySelector('.nav-menu');

    // // hambuger.addEventListener("click", mobileMenu);

    // // function mobileMenu() {
    // //   hambuger.classList.toggle("active");
    // //   navMenu.classList.toggle("active");
    // // }

    // // const navLink = document.querySelectorAll('.nav-link');
    // // navLink.forEach((n) => n.addEventListener("click", closeMenu));

    // // function closeMenu() {
    // //   hambuger.classList.remove("active");
    // //   navMenu.classList.remove("active");
    // // }