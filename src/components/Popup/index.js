import React from 'react';
import './style.css';
import PropTypes from 'prop-types';

const Popup = ({ visible, type }) => {
    if (!visible)
    {
        return null;
    }

    const className = 'popup ' + (type === 'LIKE' ? 'popup--like' : 
                                                               'popup--dislike');

    return (
        <div className={className} />
    );
};

Popup.propTypes = {
    visible: PropTypes.bool.isRequired,
    type: PropTypes.oneOf(['LIKE', 'DISLIKE']),
};

export default Popup;
