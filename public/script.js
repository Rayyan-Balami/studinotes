function toggleSideNav() {
    const sideNav = document.querySelector("#sideNav");
    const hamburgerIcon = document.querySelector("#hamburger i");
  
    // Toggle the "max-lg:-left-[16rem]" class to show/hide the side navigation
    sideNav.classList.toggle("max-lg:-left-[16rem]");
    // Toggle the "max-sm:-left-full" class to show/hide the side navigation
    sideNav.classList.toggle("max-sm:-left-full");

  
    // Toggle the icon class between "fa-bars" and "fa-square-xmark"
    hamburgerIcon.classList.toggle("fa-bars");
    hamburgerIcon.classList.toggle("fa-xmark-large");
  }

  function toggleSettingsDropdown() {
    const settingsDropdown = document.querySelector("#settingsDropdown");
    const settingsIcon = document.querySelector("#settingsIcon");
    const moreIcon = document.querySelector("#moreIcon");
    settingsDropdown.classList.toggle('hidden');
    settingsIcon.classList.toggle('rotate-90');
    moreIcon.classList.toggle('rotate-180');
  }

 