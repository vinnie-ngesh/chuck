import React from 'react';
import './style.css';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
    static propTypes = {
        onSearch: PropTypes.func.isRequired,
    }
    
    constructor(props) {
        super(props);

        this.input = React.createRef();
    }
    
    componentDidMount() {
        this.input.current.focus();
    }
    
    onSubmit = (e) => {
        e.preventDefault();
        if (this.input.current.value.trim()) {
            this.props.onSearch(this.input.current.value);
        }
    }

    render() {
        return (
            <form className="search-bar" onSubmit={this.onSubmit}>
                <input type="text" className="search-bar__input" placeholder="Search a joke..." ref={this.input}/>
                <button type="submit" className="search-bar__btn" />
            </form>
        );
    }
}

export default SearchBar;