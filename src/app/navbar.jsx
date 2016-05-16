import React from 'react';

class Navbar extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <header className="mdl-layout__header mdl-layout__header--scroll">
                <div className="mdl-layout__header-row">
                    <span className="mdl-layout-title">React Simple</span>
                    <div className="mdl-layout-spacer"></div>
                    <div className="mdl-textfield mdl-js-textfield mdl-textfield--expandable">
                        <label className="mdl-button mdl-js-button mdl-button--icon" for="search">
                            <i className="material-icons">search</i>
                        </label>
                        <div className="mdl-textfield__expandable-holder">
                            <input className="mdl-textfield__input" type="text" id="search"/>
                            <label className="mdl-textfield__label" for="search">Enter your query...</label>
                        </div>
                    </div>
                    <nav className="mdl-navigation mdl-layout--large-screen-only">
                        <a className="mdl-navigation__link" href="">Link</a>
                    </nav>
                </div>
            </header>
        );
    }

}

export default Navbar;