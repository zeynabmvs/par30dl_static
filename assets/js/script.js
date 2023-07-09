
// Tabs Scripts ************************
const tabSets = document.querySelectorAll(".tabs-js");

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

// Swiper scripts ************************
const swiperNews = new Swiper('#swiper-news', {
  slidesPerView: 6,
  spaceBetween: 24,
  pagination: {
    // el: ".swiper-pagination",
    clickable: true,
  },
});

// Sticky header ************************
var header = document.querySelector('.header');


onScroll = () => {
  var scrolledPage = Math.round(window.pageYOffset);
  if(scrolledPage > 60) {
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
const darkModeToggle = document.querySelector('#dark-mode-toggle');

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
if ((darkMode === 'enabled') ){
  enableDarkMode();
}

// When someone clicks the button
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

// an event listener for when preferred color scheme changes
window.matchMedia('(prefers-color-scheme: dark)')
    .addEventListener('change', (event) => {
        event.matches ? enableDarkMode() : disableDarkMode();
    });

// Search form show/hide toggle
const searchButton = document.querySelector('#search-form-toggle');
const searchBox = document.querySelector('#search-box');

searchButton.addEventListener('click', () => {
  if (searchBox.classList.contains('hidden')){
    searchBox.classList.remove('hidden')
    searchBox.classList.add('block')
  } else if (searchBox.classList.contains('block')){
    searchBox.classList.remove('block')
    searchBox.classList.add('hidden')
  }

});