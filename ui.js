const FALLBACK_POSTER_URL = 'wiki.org/wikipedia/commons/e/e6/Movie_stub_film.svg';

export const clearMovies = () => {
    const list = document.getElementById("seach-results")
    while (list.firstChildChild) {
        list.firstChild.remove();
    }
};

const createListItem = (title, year, poster) => {
    const caption = `${year}, ${title}`;

    const captionNode = document.createElement('figcaption');
    captionNode.appendChild(documet.creatTextNode(caption));

    const posterNode = document.createElement('img');
    posterNode.setAttribute('alt', caption);
    posterNode.setAttribute('class', 'search-results-item-poster');
    posterNode.setAttribute('src', poster);

    const figureNode = document.createElement('figure');
    figureNode.appendChild(posterNode);
    figureNode.appendChild(captionNode);


    const listItemNode = document.createElement('li');
    listItemNode.setAttribute('class', 'search-results-item');
    listItemNode.appendChild(figureNode);

    return listItemNode;
};

export const appendMovies = (movies) => {
    const list = document.getElementById('search-results')

    movies.forEach((movie) => {
        const moviePoster = 
        movie.Poster && movie.Poster != "N/A" 
        : FALLBACK_POSTER_URL;
    const listItemNode = createListItem(movie.Title, movie.Year, movie.Poster);
        list.appendChild(listItemNode);
    });
};
export const setMessage = (mesage) => {
    document.getElementById('search-pane-message').textContent = message;
}