var VideoList = (props) => {
  // console.log(props);
  if (props !== undefined && props.videos !== undefined) {
    return (
      <div className="video-list media">
        {
          props.videos.map(function(key) {
            return <VideoListEntry video={props} key={key}/>;
          })
        }
      </div>
    );
  } else {
    return (
      <div className="video-list media">
        <VideoListEntry video={props}/>
      </div>
    );
  }

};

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoList.propTypes = {
  videos: React.PropTypes.array.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
window.VideoList = VideoList;
