// breakpoint where swiper will be destroyed
// and switches to a dual-column layout
const breakpoint = window.matchMedia('(min-width:768px)');
// keep track of swiper instances to destroy later
let mySwiper;
//////////////////////////////////////////////////////////////////
const breakpointChecker = function () {
    // if larger viewport and multi-row layout needed
    if (breakpoint.matches === true) {
        // clean up old instances and inline styles when available
        if (mySwiper !== undefined){
         mySwiper.destroy(true, true);
        }
        
        if (swiperNews !== undefined){
         swiperNews.destroy(true, true);
        }
        if (swiperTabs !== undefined){
         swiperTabs.destroy(true, true);
        }

        // also remove any swiper classes from DOM
        // removeSwiperFromDom();

        // or/and do nothing
        return;
        // else if a small viewport and single column layout needed
    } else if (breakpoint.matches === false) {
        // fire small viewport version of swiper
        return enableSwiper();
    }
};
//////////////////////////////////////////////////////////////////
const enableSwiper = function () {
    mySwiper = new Swiper('#swiper-tiles', {
        slidesPerView: 'auto',
        spaceBetween: 16,
        keyboardControl: true,
    });

    swiperNews = new Swiper('#swiper-news', {
        slidesPerView: 'auto',
        spaceBetween: 24,
    });

    swiperTabs = new Swiper('#tabs-swiper', {
        slidesPerView: 'auto',
        spaceBetween: 16,

      });


}

const removeSwiperFromDom = function () {
    const swiperElements = document.querySelectorAll('.swiper, .swiper-wrapper, .swiper-slide');
    swiperElements.forEach(element => {
      element.classList.remove('swiper', 'swiper-wrapper', 'swiper-slide');
    });
}

//////////////////////////////////////////////////////////////////
// keep an eye on viewport size changes
breakpoint.addListener(breakpointChecker);
// kickstart
breakpointChecker();

