var VideoListEntry = (props) => {
  { var video = props.video.snippet;
    if (video !== undefined) {
      var thumbNail = video.thumbnails.default.url;
      var title = video.title;
      var description = video.description;
    }
  }

  return (
    <div className="video-list-entry">
      <div className="media-left media-middle">
        <img className="media-object" src={thumbNail} alt="" />
      </div>
      <div className="media-body">
        <div onClick={() => { props.updateVideo(props.video); } } className="video-list-entry-title">{title}</div>
        <div className="video-list-entry-detail">{description}</div>
      </div>
    </div>
  );
};


// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoListEntry.propTypes = {
  video: React.PropTypes.object.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.VideoListEntry = VideoListEntry;
