class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      options:{
        key: 'AIzaSyD4_z5xrVmMjhk9yTeCx2OZRSfPjb2RzZA',
        max: 10,
        query: 'cats',
        part: 'snippet'
      },
      currentVideo: window.exampleVideoData[0],
      checkStateChanged: false,
      results: window.exampleVideoData,
      search: () => {
        return searchYouTube( this.options, (results) => {
          this.setState('results', results);
          // return results;
        });
      },
    };
    this.updateVideo = this.updateVideo.bind(this);
    this.searchYouTube = this.searchYouTube.bind(this);
    this.searchYouTube();
  }

  updateVideo(vid){
    this.setState({currentVideo: vid});
  }

  searchYouTube(searchQuery){
    var data = this.state.options;
    if (searchQuery !== '' && searchQuery !== undefined ) {
      data.query = searchQuery;
    }
    return searchYouTube( data, (query) => {
      this.setState({results: query.items});
      this.updateVideo(query.items[0]);
    });
  }


  render() {

    return (
      <div>
        <Nav query={this.searchYouTube}/>
        <div className="col-md-7">
          <VideoPlayer video={this.state.currentVideo}/>
        </div>
        <div className="col-md-5">
          <VideoList videos={this.state.results} updateVideo={this.updateVideo}/>
        </div>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App; //need this for global scope. Weird.


//APP.jsx --> babel --> compiled app.js <----> live server --> page
// Functionality--> virtual dom <-- real DOm
// 1 - 100000000
// 1 -  343234234
