import React from 'react';
import {render} from 'react-dom';
import Navbar from './navbar.jsx';
import Sidenav from './sidenav.jsx';
import TestComponent from './testComponent.jsx';
import CommentBox from './commentBox.jsx';

// app styles
import '../styles/app.css';

// harmony ui components? try later
//import '../../vendor/harmony-ui-components/dist/css/hui.css';
//import '../../vendor/harmony-ui-components/dist/js/hui.js';

class App extends React.Component {

    componentDidMount() {
        // since we are using MDL
        componentHandler.upgradeDom();
    }

    componentDidUpdate() {
        // since we are using MDL
        componentHandler.upgradeDom();
    }

    render () {
        return (
            <div className="mdl-layout mdl-layout--fixed-header mdl-js-layout mdl-color--grey-100">
                <Navbar/>
                <Sidenav/>
                <main className="mdl-layout__content">
                    <div className="mdl-typography--text-left mdl-grid">
                        <div className="mdl-cell mdl-cell--12-col">
                            <h2>Hello React!</h2>
                            <TestComponent/>
                            <CommentBox/>
                        </div>
                    </div>
                </main>
            </div>
        );
    }
}

render(<App/>, document.getElementById('app'));