import React, { Component } from 'react';
import MovieComponent from './movie-component';
import '../styles/movie-components.css';

class MovieComponents extends Component {
    
    render() {
        const { movieContent } = this.props;
        return (
            <React.Fragment>
                <p className="movie-count">{movieContent.length} movies</p>
                {movieContent.map((content, i) => (
                    <MovieComponent
                     key={i}
                     poster={content.poster}
                     name={content.name}
                     rating={content.rating}
                     genres={content.genres}
                     description={content.description}
                     />
                ))}
            </React.Fragment>
        );
    }
}
 
export default MovieComponents;