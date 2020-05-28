var ARTICLEAPP = (function () {
    const modeToggleButton = document.querySelector(".btn-mode-toggle");

    let toggleMode = () => {
        console.log("hi");
    };

    return {
        toggleMode
    };
});

(() => {
    console.log("hello");
    document.querySelector(".btn-mode-toggle").addEventListener("click", () => {
        document.querySelector('body').classList.toggle("dark");
        document.querySelector(".fas").classList.toggle("fa-moon");
        document.querySelector(".fas").classList.toggle("fa-sun");
    });
})();

window.onscroll = function () {
    showProgress()
};

function showProgress() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("progress-bar").style.width = scrolled + "%";
}