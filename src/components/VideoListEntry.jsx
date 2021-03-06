import exampleVideoData from '../data/exampleVideoData.js';
var VideoListEntry = ({video, clickHandler}) => (
  <div className="video-list-entry media">
    <div className="media-left media-middle">
      <img className="media-object" src={video.snippet.thumbnails.default.url} alt="" />
    </div>
    <div className="media-body">
      {/* when VideoListEntry title is clicked, that video is displayed in Player
        event handler
      */}
      <div className="video-list-entry-title" onClick={ () => { clickHandler(video); } }>
        {video.snippet.title}
      </div>
      <div className="video-list-entry-detail" >
        {video.snippet.description}
      </div>
    </div>
  </div>
);

// declaring event listener outside of component works somehow?
// var clickHandler = (e) => {
//   e.preventDefault();
//   console.log('life is pain :)))))');
// };

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoListEntry.propTypes = {
  video: PropTypes.object.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default VideoListEntry;
