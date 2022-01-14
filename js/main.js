var elList = document.querySelector('.list');

function createrFilms(film) {

    item = document.createElement('li');
    poster = document.createElement('img');
    title = document.createElement('h3');
    id = document.createElement('h4');
    overview = document.createElement('i');
    gender = document.createElement('h4');
    relase = document.createElement('h5');


    poster.src = film.poster;
    title.textContent = film.title;
    id.textContent = film.id;
    overview.textContent = film.overview;
    gender.textContent = film.genres;
    relase.textContent = film.release_date;






    elList.appendChild(item);
    item.appendChild(poster);
    item.appendChild(title);
    item.appendChild(id);
    item.appendChild(overview);
    item.appendChild(relase);
    item.appendChild(gender);
    item.appendChild(poster);


    poster.classList.add('poster__style');
    item.classList.add('item__style');
    overview.classList.add('over__style')


}



for (var i = 0; i < films.length; i++) {

    createrFilms(films[i])

}
var elSelect = document.querySelector('.select__gender')

var genresType = ["Action"];


films.forEach(element => {

    element.genres.forEach((type) => {

        if (!genresType.includes(type)) {

            genresType.push(type);

            var elOption = document.createElement('option')
            elOption.textContent = type;
            elSelect.appendChild(elOption);
            elOption.classList.add('option__list')

        }



    })



});