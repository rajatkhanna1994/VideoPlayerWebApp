import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyDgo3-T4DtyB5eJrqgkKe72Lff-b2VXW94';

// Create a new component and this component produces
// some HTML
class App extends Component {
  constructor(props) {
    super(props);

    this.state = { videos: [] };

    YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
      this.setState({ videos }); // this.setState({ videos: videos });
    });
  }

  render() {
    return <div>
    <SearchBar />
    <VideoDetail video={this.state.videos[0]} />
    <VideoList videos={this.state.videos} />
    </div>;
  }
}

// Take this component's generated HMTL and put it on
// the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container')); // Used to interact with DOM
