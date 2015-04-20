

var React = require('react');
var preload = require('./netflix'); // these are local JS files
var _ = require('lodash');  // these are node modules
var MovieContainer = require('./MovieContainer');
var MovieTileLayout = require('./MovieTileLayout');

class App extends React.Component {
    constructor(props) {
        // replaces getInitialState - ES6 wuz here
        super(props);  // always put this line immediate first in the constructor

        this.state = {
            results: _.clone(preload.Search)
        }
    }
    render() {
        return (
           <div className="app-container">
                <div className="movies-list">
                    {
                    this.state.results.map( el => {
                        return (
                            <MovieContainer
                                id={el.imdbID}
                                key={el.imdbID}
                                layout={MovieTileLayout}
                            />
                        );
                    })
                    /* Replaced by MovieContainer
                    this.state.results.map( el => {
                        return (   // don't need the return statement if you don't have {} because it's an implicit return
                            <h1>{el.Title}</h1>
                        );
                    })
                    */
                    }
                </div>
            </div> 
        );
    }
}

module.exports = App;
