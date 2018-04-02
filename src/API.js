const API_BASE = 'https://api.chucknorris.io/jokes';

export const getCategories = () => fetch(`${API_BASE}/categories`)
                                   .then(d => d.json());

export const getRandomJoke = (category) => {
    const query = category ? `?category=${category}` : '';

    return fetch(`${API_BASE}/random${query}`).then(d => d.json());
};

export const searchJoke = (query) => fetch(`${API_BASE}/search?query=${query}`)
                                     .then(d => d.json());

                                     
// local storage api                                  
export const getLikedJokes = () => {
    let jokes;

    jokes = JSON.parse(localStorage.getItem('jokes'));

    return jokes === null ? [] : jokes;
};

export const setLikedJokes = (jokes) => {
    localStorage.setItem('jokes', JSON.stringify(jokes));
};

export const addLikedJoke = (joke) => {
    const jokes = getLikedJokes();
    
    if (jokes.includes(joke)) return;
    
    jokes.push(joke);
    setLikedJokes(jokes);
};

export const removeLikedJoke = (joke) => {
    const jokes = getLikedJokes();
    const jokeIndex = jokes.indexOf(joke);

    if (jokeIndex === -1) return;

    jokes.splice(jokeIndex, 1);
    setLikedJokes(jokes);
};
