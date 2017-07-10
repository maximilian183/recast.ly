class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      search: searchYouTube(
        {
          key: 'AIzaSyD4_z5xrVmMjhk9yTeCx2OZRSfPjb2RzZA',
          max: 10,
          query: 'cats',
        }, function() {
        return;
      }),
    };
  }
  render() {
    this.state.search;
    //console.log(JSON.stringify(this.props));
    return (
      <div>
        <Nav />
        <div className="col-md-7">
          <VideoPlayer video={this.props.searchYoutube}/>
        </div>
        <div className="col-md-5">
          <VideoList videos={this.props.searchYoutube}/>
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
