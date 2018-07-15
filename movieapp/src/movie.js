import React from 'react';
import './movie.css';
import PropTypes from 'prop-types';
import LinesEllipsis from 'react-lines-ellipsis'



function Movie({title, poster, genres, synopsis}) {
    return (
        <div className="Movie">
            <div className="Movie__columns">
                <MoviePoster poster = {poster} alt = {title}/>
            </div>
            <div className="Movie__columns">
                <h1> {title} </h1>
                <div className="Movie__genre">
                    {genres.map((genre,index) => <MovieGenre genre={genre} key = {index} />)}
                </div>
                <p className = "Movie__synopsis">
                    <LinesEllipsis
                        text={synopsis}
                        maxLine='3'
                        ellipsis='...'
                        trimRight
                        basedOn='letters'
                    />
                </p>
            </div>

        </div>
    );
}

function MoviePoster({poster, alt}) {
    return (
        <img src={poster} alt = {alt} title = {alt} className="Movie__poster"/>
    );
}

function MovieGenre({genre}) {
    return (
        <span className="Movie__genre"> {genre} </span>
    )
}

function MovieSynopsis({synopsis}) {
    return (
        <p className="Movie__synopsis"> {synopsis} </p>
    )
}

Movie.propTypes = {
    title : PropTypes.string.isRequired,
    poster : PropTypes.string.isRequired
};

MovieGenre.propTypes = {
    genre : PropTypes.string.isRequired
};

MoviePoster.propTypes = {
    poster : PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired
};

MovieSynopsis.propTypes = {
    synopsis : PropTypes.string.isRequired
};

export default Movie;