window.onscroll = function() {
    var headerBot = document.querySelector('.header-bot');
    var headerTop = document.querySelector('.header-top');
    var sticky = headerTop.offsetHeight;

    if (window.pageYOffset > 0) {
        headerBot.style.top = "0";
    } else {
        headerBot.style.top = sticky + "px";
    }
};
