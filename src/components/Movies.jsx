import React from 'react'

const Movies = ({ movies }) => {

    return (
        <div>
            {movies.map(({title}) =><h2>{title}</h2> )}
        </div>
    )
}

export default Movies
