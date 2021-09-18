import React from 'react';
import './style.css';
import PropTypes from 'prop-types';

const Joke = ({ value, onClick }) => 
(
    <li className="joke" onClick={onClick}>
        {value}
    </li>
);

Joke.propTypes = {
    value: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
};

export default Joke;
