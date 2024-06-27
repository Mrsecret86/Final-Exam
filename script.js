var news = document.querySelectorAll
('.news')

news.forEach(news => {
    news.dataset.aos = 'fade-down';
    news.dataset.aosDuration = 1500;
})

var jumbotron = document.querySelectorAll
('.jumbotron')

jumbotron.forEach(jumbotron => {
    jumbotron.dataset.aos = 'fade-right';
    jumbotron.dataset.aosDuration = 1500;
})

var heroesJumbotron = document.querySelectorAll
('.heroes-jumbotron')

heroesJumbotron.forEach(heroesJumbotron => {
    heroesJumbotron.dataset.aos = 'fade-right';
    heroesJumbotron.dataset.aosDuration = 1500;
})

var hero = document.querySelectorAll
('.hero')

hero.forEach(hero => {
    hero.dataset.aos = 'flip-up';
    hero.dataset.aosDuration = 1500;
})

var chip = document.querySelectorAll
('.chip')

chip.forEach(chip => {
    chip.dataset.aos = 'flip-up';
    chip.dataset.aosDuration = 1500;
})

var skills = document.querySelectorAll
('.skills')

skills.forEach(skills => {
    skills.dataset.aos = 'fade-up';
    skills.dataset.aosDuration = 1500;
})

var maps = document.querySelectorAll
('.maps')

maps.forEach(maps => {
    maps.dataset.aos = 'flip-up';
    maps.dataset.aosDuration = 1500;
})

var contactContainer = document.querySelectorAll
('.contact-container')

contactContainer.forEach(contactContainer => {
    contactContainer.dataset.aos = 'fade-right';
    contactContainer.dataset.aosDuration = 1500;
})

AOS.init()


