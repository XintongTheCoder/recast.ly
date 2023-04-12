import exampleVideoData from '../data/exampleVideoData.js';
import Search from './Search.js';
import VideoListEntry from './VideoListEntry.js';
import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';
import searchYouTube from '../lib/searchYouTube.js';
const { useState } = React;

var App = (props) => {
  const handleSubmission = (data) => {
    setVideos(data);
  };
  var startData;

  // searchYouTube('', (data) => {
  //   console.log('DATA: ', data);
  //   startData = data.slice(0, 5);
  //   console.log('###', startData);
  // });

  console.log('###');
  const [videos, setVideos] = useState([]);
  const [currentVideo, setCurrentVideo] = useState(exampleVideoData[0]);
  const getClick = (video) => {
    console.log('click');
    setCurrentVideo(video);
  };

  console.log(
    'search youtube',
    searchYouTube('', (data) => {
      handleSubmission(data);
    })
  );
  return (
    <div>
      <nav className="navbar">
        <div className="col-md-6 offset-md-3">
          <div>
            <h5>
              <em>search</em> view goes here
            </h5>
            <Search onClick={handleSubmission} />
          </div>
        </div>
      </nav>
      <div className="row">
        <div className="col-md-7">
          <div>
            <h5>
              <em>videoPlayer</em> view goes here
            </h5>
          </div>
          <VideoPlayer video={currentVideo} />
        </div>
        <div className="col-md-5">
          <div>
            <h5>
              <em>videoList</em> view goes here
            </h5>
          </div>
          <VideoList videos={videos} onClick={getClick} />
        </div>
      </div>
    </div>
  );
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
