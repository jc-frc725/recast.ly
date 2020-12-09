import VideoListEntry from './VideoListEntry.js';

var VideoList = (props) => (
  // props.videos is the array of video data
  // have a function that iterates thru props.videos for each video data
  <div className="video-list">
    {props.videos.map(videoentry =>
      <VideoListEntry video={videoentry} clickHandler={props.clickHandler} />
    )}
  </div>
);

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoList.propTypes = {
  // The line <VideoList videos={exampleVideoData} /> exists where {exampleVideoData}
  // is an array of video objects, assigned to prop 'videos' for VideoList
  videos: PropTypes.array.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
export default VideoList;
