import VideoPlayer from './VideoPlayer.js';
import VideoList from './VideoList.js';
import exampleVideoData from '../data/exampleVideoData.js';
//import searchYoutube from './lib/searchYoutube.js';

// var App = () => (
//   <div>
//     <nav className="navbar">
//       <div className="col-md-6 offset-md-3">
//         <div><h5><em>search</em> view goes here</h5></div>
//       </div>
//     </nav>
//     <div className="row">
//       <div className="col-md-7">
//         <VideoPlayer video={exampleVideoData[0]} />
//       </div>
//       <div className="col-md-5">
//         <VideoList videos={exampleVideoData} />
//       </div>
//     </div>
//   </div>
// );

class App extends React.Component {
  constructor(props) {
    super(props);
    // this.state should keep track of all videos in vid list + current vid in player
    this.state = {
      videoList: exampleVideoData,
      currentlyPlaying: exampleVideoData[0] // this works for now?
    };
  }

  // create a click handler and pass all the way down to VideoListEntry via props?
  // takes in a video, sets currentlyPlaying as that video
  titleClickHandler(video) {
    this.setState({
      currentlyPlaying: video
    });
  }

  componentDidMount() {
    // call searchYoutube here?
  }

  initializeApp() {

  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><h5><em>search</em> view goes here</h5></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={this.state.currentlyPlaying} />
          </div>
          <div className="col-md-5">
            <VideoList videos={this.state.videoList} clickHandler={this.titleClickHandler.bind(this)} />
          </div>
        </div>
      </div>
    );
  }
}


// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
