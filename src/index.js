import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';

const API_KEY = 'AIzaSyDgmBCopkIf8l5Jjnavj2XtilYmdCp17DE';



class App extends Component {
	constructor(props) {
		super(props);

		this.state = { videos: [] };

		YTSearch({ key: API_KEY, term: 'surfboards' }, videos => {
			this.setState({ videos });
		});
	}

	render() {
		return (
			<div>
				<SearchBar />
				<VideoList videos = {this.state.videos} />
			</div>
		);
	}
}

// <App /> is an instance of App Component / Class
// .container class is the target location.
ReactDOM.render(<App />, document.querySelector('.container'));
