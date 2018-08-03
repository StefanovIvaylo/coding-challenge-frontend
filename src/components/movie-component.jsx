import React, { Component } from 'react';
import '../styles/movie-component.css';

class MovieComponent extends Component {

    render() {
        const {genres,name, poster, rating, description} = this.props;

        return (
                <div key={name} className="movie-component row">
                    <img className="col-md-3" src={poster} />
                    <div className="col-md-8">
                        <h4>{name}</h4>
                        <br/>
                        <ul>
                            {genres && genres.map((elm, i) => <li className="genres" key={i}> {elm} {i < genres.length-1 ? "|" : null}</li>)}
                        </ul>
                        <p> {description} </p>
                    </div>
                    <div className="col-md-1">
                        <span className="movie-rating">
                            {rating}
                        </span>
                    </div>
                </div> 
        );
    }
}
 
export default MovieComponent;