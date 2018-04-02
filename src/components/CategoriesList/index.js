import React from 'react';
import './style.css';
import PropTypes from 'prop-types';
import { getCategories } from '../../API';
import Category from '../Category';
import Spinner from '../Spinner';

class CategoriesList extends React.Component {
    state = {
        categories: [],
        fetching: false,
    }

    static propTypes = {
        onCategoryClick: PropTypes.func.isRequired,
    };

    componentDidMount() {
        this.setState({
            fetching: true,
        }, () => {
            getCategories()
                .then((categories) => this.setState({
                    categories,
                    fetching: false,
                }));
        });
    }

    render() {
        const { categories, fetching } = this.state;
        const { onCategoryClick } = this.props;

        return (
            <div className="categories">
                <h2 className="categories__heading">Random a joke from the following categories:</h2>
                    { fetching ? <Spinner /> :
                                 <ul className="categories__list">
                                    { categories.map((category, index) => <Category
                                                                key={index}
                                                                title={category}
                                                                onClick={() => onCategoryClick(category)}
                                                            />) }
                                 </ul> }
            </div>
        );
    }
}
export default CategoriesList;