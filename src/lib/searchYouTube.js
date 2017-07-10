var searchYouTube = (options, callback) => {
  // options has query, max, and key
  console.log('This is options: ', options.key);

  $.ajax({
    data: {
      key: options.key,
      q: options.query,
      maxResults: options.max,
      part: 'contentDetails',
    },
    dataType: 'json',
    type: 'GET',
    options: options,
    url: 'https://www.googleapis.com/youtube/v3/search',
    success: function(data) {
      console.log(data);
    },
    error: function(request, status, error) {
      console.log(request.responseText);
    }
  }).done( function(result) {
      console.log(result);
    });
};

window.searchYouTube = searchYouTube;
