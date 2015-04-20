var React = require('react');

class RatingStars extends React.Component {
    render() {
        var filled = Math.floor(this.props.score);  // this could be undef
        var hasHalf = this.props.score - filled >= .5; // Identified if there's a half star
        var empty = this.props.max - filled; // Total amount of stars they could have

        var stars = []; // this will be an array of React Components

        // "let" is a block scope instead of function scope feature of ES6
        for (let i = 0; i < filled; i++ ) {
            stars.push( // use Font awesome classes
                <i className="fa fa-star" />
            );
        }

        if (hasHalf) {
            empty--;
            stars.push(
                <i className="fa fa-star-half-o" />
            );
        }
        for (var i = 0; i < empty; i++ ) {
            stars.push(
                <i className="fa fa-star-o" />
            );
        }

        return (
            <div className="rating-stars">
                { stars.map( (el) => el ) }
            </div>
        );
    }
}

module.exports = RatingStars;

