import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyDgmBCopkIf8l5Jjnavj2XtilYmdCp17DE';

// Create a new component. This component should produce some HTML
// App is a Component / Class and we can have many instances of an App Class
class App extends Component {
    render() {
        return <div><SearchBar /></div>;
    }
}

// <App /> is an instance of App Component / Class
// .container class is the target location.
ReactDOM.render(<App />, document.querySelector('.container'));
