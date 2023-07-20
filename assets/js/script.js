
const body = document.querySelector('body');

function toggleClass(element, className) {
  if (element.classList.contains(className)) {
    element.classList.remove(className);
  } else {
    element.classList.add(className);
  }
}

const toggleElementDisplay = function(hiddenElement, transitionDuration) {
  if (getComputedStyle(hiddenElement).display === 'none') {
    hiddenElement.classList.add('open');
    hiddenElement.style.display = 'block';
    setTimeout(() => {
      hiddenElement.style.opacity = '1';
    }, 100); // Delay the transition for 100 milliseconds for display change to take effect
  } else {
    hiddenElement.classList.remove('open');
    hiddenElement.style.opacity = '0';
    setTimeout(() => {
      hiddenElement.style.display = 'none';
    }, transitionDuration); // Wait for the transition to complete before changing display back to none
  }
};

// Tabs Scripts ************************
// each tabset has a .tabs-js class, first find all tabsets and then 
// create tabs for each tabset, each tabset has a .tabs-container class
const tabSets = document.querySelectorAll(".tabset-js");

tabSets.forEach(tabSet => {
  const tabsContainer = tabSet.querySelector(".tabs-container");
  const tabsList = tabsContainer.querySelector("ul");
  const tabButtons = tabsList.querySelectorAll("a");
  const tabPanels = tabsContainer.querySelectorAll(".tabs-panels > div");

  tabsList.setAttribute("role", "tablist");

  tabsList.querySelectorAll("li").forEach((listitem) => {
    listitem.setAttribute("role", "presentation");
  });

  tabButtons.forEach((tab, index) => {
    tab.setAttribute("role", "tab");
    if (index === 0) {
      tab.setAttribute("aria-selected", "true");
      // we'll add something here
    } else {
      tab.setAttribute("tabindex", "-1");
      tabPanels[index].setAttribute("hidden", "");
    }
  });

  tabPanels.forEach((panel) => {
    panel.setAttribute("role", "tabpanel");
    panel.setAttribute("tabindex", "0");
  });

  tabsContainer.addEventListener("click", (e) => {
    const clickedTab = e.target.closest("a.tab-item");

    if (!clickedTab) return;
    e.preventDefault();

    switchTab(clickedTab);
  });

  tabsContainer.addEventListener("keydown", (e) => {
    switch (e.key) {
      case "ArrowLeft":
        moveLeft();
        break;
      case "ArrowRight":
        moveRight();
        break;
      case "Home":
        e.preventDefault();
        switchTab(tabButtons[0]);
        break;
      case "End":
        e.preventDefault();
        switchTab(tabButtons[tabButtons.length - 1]);
        break;
    }

  });


  function moveRight() {
    const currentTab = document.activeElement;
    if (!currentTab.parentElement.previousElementSibling) {
      switchTab(tabButtons[tabButtons.length - 1]);
    } else {
      switchTab(
        currentTab.parentElement.previousElementSibling.querySelector("a")
      );
    }
  }

  function moveLeft() {
    const currentTab = document.activeElement;
    if (!currentTab.parentElement.nextElementSibling) {
      switchTab(tabButtons[0]);
    } else {
      switchTab(currentTab.parentElement.nextElementSibling.querySelector("a"));
    }
  }

  function switchTab(newTab) {
    const activePanelId = newTab.getAttribute("href");
    const activePanel = tabsContainer.querySelector(activePanelId);

    tabButtons.forEach((button) => {
      button.setAttribute("aria-selected", false);
      button.setAttribute("tabindex", "-1");
    });

    tabPanels.forEach((panel) => {
      panel.setAttribute("hidden", true);
    });

    activePanel.removeAttribute("hidden", false);

    newTab.setAttribute("aria-selected", true);
    newTab.setAttribute("tabindex", "0");
    newTab.focus();
  }

});


// Sticky header ************************
var header = document.querySelector('.header');


onScroll = () => {
  var scrolledPage = Math.round(window.pageYOffset);
  if (scrolledPage > 60) {
    header.classList.add('sticky');
  } else {
    header.classList.remove('sticky');
  }
}

document.addEventListener('scroll', onScroll);


// Dark/Light mode switch using a button ************************

// check for saved 'darkMode' in localStorage
let darkMode = localStorage.getItem('darkMode');
const htmlElement = document.querySelector('html');
const darkModeToggles = document.querySelectorAll('.dark-mode-toggle');

if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
  var preferredTheme = 'dark'
} else {
  var preferredTheme = 'light'
}

const enableDarkMode = () => {
  // 1. Add the class to the html tag
  htmlElement.classList.add('dark');
  // 2. Update darkMode in localStorage
  localStorage.setItem('darkMode', 'enabled');
}

const disableDarkMode = () => {
  // 1. Remove the class from the html tag
  htmlElement.classList.remove('dark');
  // 2. Update darkMode in localStorage 
  localStorage.setItem('darkMode', null);
}

// If the user already visited and enabled darkMode 
// start things off with it on
if ((darkMode === 'enabled')) {
  enableDarkMode();
}

// When someone clicks the button
darkModeToggles.forEach(darkModeToggle => {
  darkModeToggle.addEventListener('click', () => {

  // get their darkMode setting
  darkMode = localStorage.getItem('darkMode');

  // if it not current enabled, enable it
  if (darkMode !== 'enabled') {
    enableDarkMode();
    // if it has been enabled, turn it off  
  } else {
    disableDarkMode();
  }
});
});


// an event listener for when preferred color scheme changes
window.matchMedia('(prefers-color-scheme: dark)')
  .addEventListener('change', (event) => {
    event.matches ? enableDarkMode() : disableDarkMode();
  });

// Search form show/hide toggle ************************************
const searchButton = document.querySelectorAll('.search-form-toggle')[0];
const searchBox = document.getElementById(searchButton.getAttribute('data-target-box'));

searchButton.addEventListener('click', () => {

  toggleElementDisplay(searchBox, 300);
});



// Mega menu show/hide toggle ************************************
const megaButton = document.querySelector('#mega-menu-toggle');
const megaMenu = document.querySelector('#mega-menu');
const headerMain = document.getElementById('header-main');

megaButton.addEventListener('click', () => {
  toggleElementDisplay(megaMenu, 300);
});

// Open modal to play trailer ************************************
// Get all open and close buttons
const openButtons = document.querySelectorAll('.open-modal-btn');
const closeButtons = document.querySelectorAll('.close-modal');
const modals = document.querySelectorAll('.modal')

// Function to handle outside click events for each modal
function handleOutsideClick(event) {
  const modalId = event.target.dataset.modalTarget;
  const modal = document.getElementById(modalId);
  const modalContent = modal.querySelector('.modal-content');

  if (!modalContent.contains(event.target)) {
    closeModal();
  }
}

// Function to open the modal 
function openModal(event) {
  const modalId = event.target.dataset.modalTarget;
  const modal = document.getElementById(modalId);

  modal.style.display = 'block';
  const videoElem = modal.querySelector('video');
  videoElem.play();
}

// Function to close the modal
function closeModal(modalId) {
  const modal = document.getElementById(modalId);

  modal.style.display = 'none';

  // Pause the video
  const videoElem = modal.querySelector('video');
  videoElem.pause();
}

// Attach click event listeners to each open button
openButtons.forEach(button => {
  button.addEventListener('click', openModal);
});

closeButtons.forEach(button => {
  button.addEventListener('click', () => {
    closeModal(button.closest('.modal').id)
  });
});

// Open drawer ************************************

const drawer = document.querySelector('.drawer')
const headerMobile = document.querySelector('.header-mobile')

document.querySelector('#jsbtnHamburgur').addEventListener('click', function () {
  toggleClass(headerMobile, 'open')
  toggleClass(body, 'body-scroll-lock')
  drawer.style.top = headerMobile.offsetHeight + 'px'
});


// In drawer: open list items ************************************
const listTitles = document.querySelectorAll('.drawer .list-title');

listTitles.forEach(title => {
  title.addEventListener('click', () => {
    const subMenu = title.nextElementSibling;

    if (subMenu.style.display === 'none') {
      subMenu.style.display = 'block';
    } else {
      subMenu.style.display = 'none';
    }
  });
});
