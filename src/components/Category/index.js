import React from 'react';
import './style.css';
import PropTypes from 'prop-types';

const Category = ({ title, onClick }) => (
    <li className="category" onClick={onClick}>
        { title }
    </li>
);

Category.propTypes = {
    title: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
};

export default Category;