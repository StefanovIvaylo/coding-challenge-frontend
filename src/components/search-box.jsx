import React, { Component } from 'react';
import '../styles/search-box.css';

class SearchBox extends Component {
    
    render() { 
        return ( 
            <div className="search-box">
                <form>
                  <input className="search-input" value={this.props.inputValue} onChange={(e) => this.props.onInput(e)} type="text" />
                  <input className="search-input" type="text" />
                </form>
              </div>
         );
    }
}
 
export default SearchBox;