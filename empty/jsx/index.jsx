

var React = require('react');
var preload = require('./netflix'); // these are local JS files
var _ = require('lodash');  // these are node modules
var MovieContainer = require('./MovieContainer');
var MovieTileLayout = require('./MovieTileLayout');
var MovieListLayout = require('./MovieListLayout');

var Header = require('./Header');
//var omdb = require('omdb-client');
var omdb = require('./fake-omdb-client');  //added that because this data must be accessible to this object

class App extends React.Component {
    constructor(props) {
        // replaces getInitialState - ES6 wuz here
        super(props);  // always put this line immediate first in the constructor

        this.state = {
            layout: 'tile',
            results: _.clone(preload.Search),
            term: ''
        }
    }
    clearTerm() {
        this.setState({ term:'', results: _.clone(preload.Search)});
        // we don't pass in preload because it could be modifed - we don't want that
    }
    searchTerm(term) {
        this.setState({
            term
            // should be equiv to: "term: term"
        });
        omdb.search({ query: term }, (err,data) => {
            this.setState({
                results: data.Search
            });
        });
    }
    changeLayout(name) {
        this.setState({layout:name});
    }
    render() {

        var layout;
        if (this.state.layout === 'tile' ) {
            layout = MovieTileLayout;
        } else {
            layout = MovieListLayout;
        }

        return (
           <div className="app-container">
                <Header
                    layout={this.state.layout}
                    changeLayout={this.changeLayout.bind(this)}
                    search={this.searchTerm.bind(this)}
                    clearTerm={this.clearTerm.bind(this)}
                    term={this.state.term}
                />
                <div className="movies-list">
                    {
                    this.state.results.map( el => {
                        return (
                            <MovieContainer
                                id={el.imdbID}
                                key={el.imdbID}
                                layout={layout}
                            />
                        );
                    })
                    }
                </div>
            </div> 
        );
    }
}

module.exports = App;
