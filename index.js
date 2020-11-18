import dotenv from './api';
import { appendMovies, clearMovies, setMessage} from "./ui";


(() => {
    const handleSearchButtonClick = () => {
        const searchTerm = document.getElementById('search-pane-input').value;

        clearMoviews();
        setMessage('searching for movies, please wait...');
        search(searchTerm)
        .then((response) => {
            if (response.Response === "True") {
                appendMovies(response.Search);  
            }else{
                setMessage('Could not find any matche, please try again.');
            }
          
        })
        .catch((error) => {
            setMessage('Unexpected error occurred, please try again later');
        });
    };

    window.addEventListener("load", () => {
        document
            .getElementById("search-pane-button")
            .addEventListener("click", handleSearchButtonClick);
    });
}) ();