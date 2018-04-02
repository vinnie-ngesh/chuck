import React from 'react';
import './App.css';
import CategoriesList from './components/CategoriesList';
import Header from './components/Header';
import { getRandomJoke, searchJoke, getLikedJokes, addLikedJoke, removeLikedJoke } from './API';
import JokesList from './components/JokesList';
import Spinner from './components/Spinner';
import Popup from './components/Popup';


class App extends React.Component {
    state = {
        jokes: [],
        likedJokes: [],
        fetching: false,
        popupVisible: false,
        likedJokesOpen: false, // there are 2 kinds of page: with random jokes and with liked jokes,
                               // they determine whether jokes should be liked or disliked on click event.
    }

    componentDidMount() {
        getRandomJoke()
        .then(({ value }) => this.setState({
            jokes: [ value ],
            likedJokes: getLikedJokes(),
        }));
    }

    // fetches jokes according to likedJokesOpen state
    // if it's true, fetches liked jokes from local storage
    // otherwise a random joke
    // fetchJokes() {
    //     this.setState({
    //         fetching: true,
    //     }, () => {
    //         this.state.likedJokesOpen ? this.setState({
    //                                         likedJokes: getLikedJokes(),
    //                                         fetching: false,
    //                                     }) :
    //                                     getRandomJoke()
    //                                     .then(({ value }) => this.setState({
    //                                         jokes: [ value ],
    //                                         fetching: false,
    //                                     }))
    //     });
    // }

    onCategoryClick = (category) => {
        this.setState({
            fetching: true,
        }, () => {
            getRandomJoke(category)
            .then(({ value }) => this.setState({
                jokes: [ value ],
                fetching: false,
                likedJokesOpen: false,
            }));
        });
    }

    onSearch = (query) => {
        this.setState({
            fetching: true
        }, () => {
            searchJoke(query)
            .then(({ result }) => this.setState({
                jokes: result.map(({value}) => value),
                fetching: false,
                likedJokesOpen: false,
            }));
        });
    }

    onJokeClick = (joke) => {
        (this.state.likedJokesOpen ?  removeLikedJoke : addLikedJoke)(joke);

        this.setState({
            popupVisible: true,
            likedJokes: getLikedJokes(),
        }, () => {
            setTimeout(() => {
                this.setState({
                    popupVisible: false,
                });
            }, 1000);
        });
    }

    onPageSwitch = () => {
        this.setState((prevState) => ({
            likedJokesOpen: !prevState.likedJokesOpen,
        }));
    }

    render() {
        const { jokes, likedJokes, fetching, likedJokesOpen, popupVisible } = this.state;
        const popupType = likedJokesOpen ? 'DISLIKE' : 'LIKE';

        return (
            <React.Fragment>
                <Header onLikeClick={this.onPageSwitch} onSearch={this.onSearch} likedActive={likedJokesOpen}/>
                <Popup type={popupType} visible={popupVisible} />
                <div className="content container">
                    <main className="main">
                        { fetching ? <Spinner /> :
                                     <JokesList jokes={likedJokesOpen ? likedJokes : jokes} onJokeClick={this.onJokeClick} /> }                        
                    </main>
                    <aside className="sidebar">
                        <CategoriesList onCategoryClick={this.onCategoryClick}/>
                    </aside>
                </div>
            </React.Fragment>
        );
    }
}

export default App;
