import React, { Component } from 'react';
import SearchBox from './search-box';
import MovieFilter from './movie-filter';

class AsideRight extends Component {
    render() { 
        return (
            <React.Fragment>
                <SearchBox inputValue={this.props.inputValue} onInput={this.props.onInput} />
                <MovieFilter onToggleClass={this.props.onToggleClass} clicked={this.props.clicked} />
            </React.Fragment>
         );
    }
}
 
export default AsideRight;