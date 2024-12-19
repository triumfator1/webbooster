window.addEventListener("scroll", () => {
    const header = document.querySelector("header");
    if (window.scrollY && !header.classList.contains("bg-dark")) {
        header.classList.add("bg-dark");
    } else if (!window.scrollY) {
        header.classList.remove("bg-dark");
    }
});

new Swiper(".swiper", {
    direction: "horizontal",
    loop: true,
    navigation: {
        nextEl: ".brands-button-prev",
        prevEl: ".brands-button-next",
    },
    slidesPerView: 1,
    spaceBetween: 18,
    setWrapperSize: true,

});

new Houdini("[data-houdini-group]", {
    isAccordion: true,
    collapseOthers: true,
    icon: 1,
    iconClass: "houdini-toggle-icon",
    iconAttribute: "data-houdini-icon",
    iconShow: '<img src="img/down-arrow.svg">',
    iconHide: '<img src="img/up-arrow.svg">'
});
