var App = () => {
  return (
    <div>
      <Nav />
      <div className="col-md-7">
        <VideoPlayer/>
      </div>
      <div className="col-md-5">
        <VideoList/>
      </div>
    </div>
  );
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App; //need this for global scope. Weird.


//APP.jsx --> babel --> compiled app.js <----> live server --> page
// Functionality--> virtual dom <-- real DOm
// 1 - 100000000
// 1 -  343234234
