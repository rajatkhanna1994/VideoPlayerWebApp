import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = '';

// Create a new component and this component produces
// some HTML
class App extends Component {
  constructor(props) {
    super(props);

    this.state = { videos: [] };

    this.videoSearch('Books');
  }

  videoSearch(term) {
    YTSearch({key: API_KEY, term}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
       }); // this.setState({ videos: videos });
    });
  }

  render() {
    const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);

    return <div>
    <SearchBar onSearchTermChange={videoSearch}/>
    <VideoDetail video={this.state.selectedVideo} />
    <VideoList
      onVideoSelect={selectedVideo => this.setState({selectedVideo})}
      videos={this.state.videos} />
    </div>;
  }
}

// Take this component's generated HMTL and put it on
// the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container')); // Used to interact with DOM
