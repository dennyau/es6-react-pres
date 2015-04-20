var React = require('react');

class Header extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            term: '',
        };
    }
    handleClearEvent(e) {
        this.props.clearTerm();
    }

    handleTermSubmit(e) {
        e.preventDefault();  // stop the browser from refreshing the page before React.js does
        this.props.search(this.state.term);
        this.setState({term:''});  // clear out term after search is submitted
    }

    handleTermEvent(e) {
        this.setState({term:e.target.value});
    }

    handleLayoutEvent(e) {
        // changeLayout must be the parents callback because a child can't change state
        this.props.changeLayout(e.target.value);
    }
    render() {
        var searchBox;
        if (this.props.term) {
            searchBox = (
                <h3 className="app-header__term">
                    {this.props.term} <a href="#" onClick={this.handleClearEvent.bind(this)} ><i className="fa fa-times" /></a>
                </h3>
            );
        } else {
            searchBox = (
                    <form onSubmit={this.handleTermSubmit.bind(this)} >
                        <input
                            value={this.state.term}
                            className="app-header__search"
                            type="text"
                            placeholder="Search"
                            onChange={this.handleTermEvent.bind(this)}
                        />
                    </form>
            );
        }

        return (
            <header className="app-header">
                <div className="app-header__inner">
                    <h1 className="app-header__title">FluentFlix App</h1>
                    <select onChange={this.handleLayoutEvent.bind(this)} value={this.props.layout} className="app-header__display-select"> 
                        <option value="tile">Tile</option>
                        <option value="list">List</option>
                    </select>
                    {searchBox}
                </div>
            </header>
        );
    }
}

module.exports = Header;

// Add Event handlers because the form won't change without them.  React is not two-way data-bound

