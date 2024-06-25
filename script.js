var news = document.querySelectorAll
('.news')

news.forEach(news => {
    news.dataset.aos = 'fade-down';
    news.dataset.aosDuration = 100;
})

AOS.init()