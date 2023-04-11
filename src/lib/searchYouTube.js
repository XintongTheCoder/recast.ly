import { API_KEY, YOUTUBE_API_KEY } from '../config/config.js';
const ENDPOINT = 'https://app-hrsei-api.herokuapp.com/api/recastly/videos';
const DATALENGTH = 5;
$.ajaxPrefilter(function (settings, _, jqXHR) {
  jqXHR.setRequestHeader('Authorization', API_KEY);
});

var searchYouTube = (query, callback) => {
  // TODO
  $.ajax({
    url: `${ENDPOINT}?q=${query}`,
    type: 'GET',
    contentType: 'application/json',
    success: (data) => {
      console.log('response:', data);
      var newData = data.slice(0, DATALENGTH);
      callback(newData);
    },
    error: function (error) {
      console.error('chatterbox: Failed to fetch messages', error);
    },
  });
};

export default searchYouTube;
