let popularDirectors = [{
        name: 'Стивен Спилберг',
        career: 'Продюсер, Режиссёр, Актёр, Сценарист, Монтажёр',
        films: 'https://ru.wikipedia.org/wiki/%D0%A4%D0%B8%D0%BB%D1%8C%D0%BC%D0%BE%D0%B3%D1%80%D0%B0%D1%84%D0%B8%D1%8F_%D0%A1%D1%82%D0%B8%D0%B2%D0%B5%D0%BD%D0%B0_%D0%A1%D0%BF%D0%B8%D0%BB%D0%B1%D0%B5%D1%80%D0%B3%D0%B0',
        top_rated_film: 'Список Шиндлера'
    },
    {
        name: 'Кристофер Нолан',
        career: 'Сценарист, Продюсер, Режиссёр, Оператор, Монтажёр, Актёр, Композитор',
        films: 'https://www.film.ru/compilation/vse-filmy-kristofera-nolana-ot-luchshego-k-horoshemu',
        top_rated_film: 'Начало'
    },
    {
        name: 'Мартин МакДона',
        career: 'Сценарист, Режиссёр, Продюсер',
        films: 'https://www.film.ru/person/martin-makdonah',
        top_rated_film: 'Три билборда на границе Эббинга, Миссури'
    },
    {
        name: 'Алексей Балабанов',
        career: 'Режиссёр, Сценарист, Актёр, Продюсер',
        films: 'https://www.film.ru/person/aleksey-balabanov',
        top_rated_film: 'Брат'
    },
    {
        name: 'Питер Фаррелли',
        career: 'Продюсер, Режиссёр, Сценарист, Актёр',
        films: 'https://www.film.ru/person/piter-farrelli',
        top_rated_film: 'Зелёная книга'
    },
    {
        name: 'Юрий Быков',
        career: 'Актёр, Режиссёр, Сценарист, Композитор, Монтажёр, Продюсер',
        films: 'https://www.film.ru/person/yuriy-bykov',
        top_rated_film: 'Дурак'
    },
    {
        name: 'Жан-Марк Валле',
        career: 'Режиссер, Продюсер, Монтажёр, Актёр, Сценарист',
        films: 'https://www.film.ru/person/zhan-mark-valle',
        top_rated_film: 'Далласский клуб покупателей'
    },
];

const topFilmsContainer = document.createElement('div');

//topFilmsList.forEach(item => {
//  const listItem = document.createElement('p');
//listItem.textContent = `Purchase: ${item}`;
//topFilmsContainer.append(listItem);
//});



//const topFilmsList = popularDirectors.map(popularDirector =>
//  return popularDirector.top_rated_film);

popularDirectors.forEach(popularDirector => {
    const popularDirectorInfo = `Имя: ${popularDirector.name}\n` + `Career: ${popularDirector.career}\n` + `films: ${popularDirector.films}`;
    const directorInfo = document.createElement('p');
    //link.href = popularDirector.films;
    directorInfo.textContent = popularDirectorInfo;
    const br = document.createElement('br');
    let container = document.createElement('div');
    container.appendChild(directorInfo);
    document.body.appendChild(container);
    document.body.appendChild(br);
});


const topFilmsList = popularDirectors.map(function (popularDirector) {
    return popularDirector.top_rated_film;
});

let topRatedFilmsBlock = '<div class="topRatedFilmsBlock">';
topRatedFilmsBlock += '<h1>' + 'Лучшие фильмы этих режиссёров' + '</h1>' + 'div';
//topRatedFilmsBlock.append(topFilmsList);
for (let i = 0; i < 7; i++) {
    topRatedFilmsBlock += '<p>' + topFilmsList[i] + '</p>' + '<br>';
}
topRatedFilmsBlock += '</div>';

console.log(topFilmsList);
console.log(topRatedFilmsBlock);
console.log(topFilmsContainer);