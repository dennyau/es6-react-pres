var React = require('react');

class MovieTileLayout extends React.Component {
    render() {
        // don't need constructor because it's just a layout... because we dont' need state
        var img = (this.props.Poster && this.props.Poster !== 'N/A') ? this.props.Poster : `public/img/fake${Math.floor(Math.random() * 5) + 1}.jpg`
        // shitty hack to prepend local img reference
        img = '/empty/public/img/' + img;

        // really shitty syntax/hack for img below
        return (
            <div className='movie-tile'>
                <div className='movie-tile__img-container'>
                    <div className='movie-tile__img' style={{'backgroundImage':`url(${img})`}} />
                </div>
                <div className="movie-tile__info">
                    <h1 className="movie-tile__info">{this.props.Title}</h1>
                    <h2 className='movie-tile__year'>({this.props.Year})</h2>
                    <div className="movie-tile__stars" >
                        STARZ
                    </div>
                </div>
            </div>
        );
    }
}

module.exports = MovieTileLayout;
