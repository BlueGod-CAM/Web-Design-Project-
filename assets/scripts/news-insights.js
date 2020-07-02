(() => {
    AOS.init();
    document.addEventListener('aos:in', ({
        detail
    }) => {
        setTimeout(() => {
            detail.removeAttribute("data-aos");
        }, 300);
    });

    window.addEventListener('resize', () => {
        const highlightBtns = document.querySelectorAll(".highlight .text-container button");
        const newsItems = document.querySelectorAll(".news-item");
        highlightBtns.forEach(btn => btn.classList.add('block-transition'));
        newsItems.forEach(item => item.classList.add('block-transition'));

        setTimeout(() => {
            highlightBtns.forEach(btn => btn.classList.remove('block-transition'));
            newsItems.forEach(item => item.classList.remove('block-transition'));
        }, 100);
    });
})();