import searchYouTube from '../lib/searchYouTube.js';
const { useState } = React;

var Search = (props) => {
  const [query, setQuery] = useState('');
  // const handleSubmission = (event) => {
  //   if (query !== '') {
  //     //event.preventDefault();
  //     console.log('props', props);
  //     console.log('###', event);
  //     //  console.log('***', props.setVideos);
  //     // searchYoutube(query, props.setVideos);
  //   }
  // };

  return (
    <div className="search-bar form-inline">
      <input
        className="form-control"
        type="text"
        placeholder="Search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button
        className="btn hidden-sm-down"
        type="submit"
        onClick={(event) => {
          if (query !== '') {
            //event.preventDefault();
            searchYouTube(query, props.onClick);
          }
        }}
      >
        <span className="glyphicon glyphicon-search"></span>
      </button>
    </div>
  );
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default Search;

// click button ==> send request to server ==> wait server to response ==> setVideos()
