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
    const settingIcon = document.querySelector("#setting-icon");
    const caretUpIcon = document.querySelector("#caret-up-icon");
    settingsDropdown.classList.toggle('hidden');
    settingIcon.classList.toggle('rotate-90');
    caretUpIcon.classList.toggle('rotate-180');
  }

  function toggleSideInfo() {
    const sideInfo = document.querySelector("#sideInfo");
    sideInfo.classList.toggle('-right-full');
    sideInfo.classList.toggle('right-0');
  }
  

 