import React, { Component } from 'react';
import 'font-awesome/css/font-awesome.min.css';
import '../styles/movie-filter.css'; 


class MovieFilter extends Component {

    render() {

        return (
            <React.Fragment>
            <div className="movie-filter">
                <h6 className="movie-text-color">Movie</h6>
                <a href="#select-genre" onClick={(e) => this.props.onToggleClass(e)} data-toggle="collapse"><i className={this.props.clicked[0] ? 'fa fa-plus' : 'fa fa-minus'} aria-hidden="true"></i>
                   <span id="0" className="push-right">Select genre(s)</span></a>

                <div id="select-genre" className="collapse">
                    <ul style={{ listStyleType: "none" }}>
                        <li><input type="checkbox" /> Action</li>
                        <li><input type="checkbox" /> Adventure</li>
                        <li><input type="checkbox" /> Animation</li>
                        <li><input type="checkbox" /> Comedy</li>
                        <li><input type="checkbox" /> Crime Film</li>
                        <li><input type="checkbox" /> Documentary</li>
                        <li><input type="checkbox" /> Drama</li>
                        <li><input type="checkbox" /> Erotic</li>
                        <li><input type="checkbox" /> Family</li>
                        <li><input type="checkbox" /> Fantasy</li>
                        <li><input type="checkbox" /> History</li>
                        <li><input type="checkbox" /> Horror</li>
                    </ul>
                </div>

                <br/>

                <a href="#select-min-vode" onClick={(e) => this.props.onToggleClass(e)} data-toggle="collapse"><i className={this.props.clicked[1] ? 'fa fa-plus' : 'fa fa-minus'} aria-hidden="true"></i>
                   <span id="1" className="push-right">Select min. vote</span></a>

                <div id="select-min-vode" className="collapse">
                    <ul>
                        <li>item 1</li>
                        <li>item 1</li>
                        <li>item 1</li>
                        <li>item 1</li>
                        <li>item 1</li>
                        <li>item 1</li>
                    </ul>
                </div>

                <br/>
                
                <a href="#select-language" onClick={(e) => this.props.onToggleClass(e)} data-toggle="collapse"><i className={this.props.clicked[2] ? 'fa fa-plus' : 'fa fa-minus'} aria-hidden="true"></i>
                   <span id="2" className="push-right">Select language</span></a>

                <div id="select-language" className="collapse">
                    <ul>
                        <li>item 1</li>
                        <li>item 1</li>
                        <li>item 1</li>
                        <li>item 1</li>
                        <li>item 1</li>
                        <li>item 1</li>
                    </ul>
                </div> 
            </div>
             </React.Fragment>
         );
    }
}
 
export default MovieFilter;