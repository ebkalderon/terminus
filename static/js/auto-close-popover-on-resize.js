const menu = document.querySelector("[popover]");
const query = matchMedia("(min-width: 684px)");

query.addEventListener("change", (event) => {
    if (event.matches && menu.checkVisibility()) {
        menu.hidePopover();
    }
})
