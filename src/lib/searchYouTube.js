var searchYouTube = (options, callback) => {
  // TODO:

  // 'options' is an object w/
  // query: 'string to search for'
  // max: maximum # of vids to get, defaults to 5 if no max given
  // key: authorized Youtube Data API Key
  options.max = options.max || 5;

  // use jQuery to send GET request to Youtube's Search:list endpoint
  // should only GET embeddable videos
  $.get({
    url: 'https://www.googleapis.com/youtube/v3/search',
    data: {
      q: options.query,
      maxResults: options.max,
      key: options.key,
      part: 'snippet',
      videoEmbeddable: 'true',
      type: 'video'
    },
    success: (data) => {
      //console.log(data);
      callback(data.items);
    },
    error: (data) => {
      console.error('Something went wrong. ' + data);
    },
  });
  // invoke 'callback' with videos array that Youtube gives back from hitting endpoint

};

export default searchYouTube;
