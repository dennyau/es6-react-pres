var React = require('react');
//var omdb = require('omdb-client');
var omdb = require('./fake-omdb-client');  // mock because conference wifi won't work for omdb-client

class MovieContainer extends React.Component {
    constructor(props) {  // replaces getInitialState again
        super(props);

        this.state = {
            movie: {}  // empty dataset before the API is called and data is filled - thus visually the UI loads before the data is there
        };
    }

    componentDidMount(){
        omdb.get({id: this.props.id},(err, data) => {
            this.setState({ movie: data });   
            // don't use this.state.movie = data; --- because the event that triggers React to reload won't be called
        });
    }

    render() {
        return (
            //<img src={`public/img/${this.state.movie.Poster}`} />
            // replaced by MovieTile below with "spread operator"
            <this.props.layout
                {...this.state.movie}
            />
        );
    }
}

module.exports = MovieContainer;
