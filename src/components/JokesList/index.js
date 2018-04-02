import React from 'react';
import './style.css';
import PropTypes from 'prop-types';
import Joke from '../Joke';

const JokesList = ({ jokes, onJokeClick }) => (
    <ul className="jokes-list">
        {jokes.map((joke, index) => <Joke
                                        key={index}
                                        value={joke}
                                        onClick={() => onJokeClick(joke)}
                                    />)}
    </ul>
);

JokesList.propTypes = {
    jokes: PropTypes.array.isRequired,
    onJokeClick: PropTypes.func.isRequired,
};

export default JokesList;