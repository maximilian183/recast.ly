var searchYouTube = (options, callback) => {
  // options has query, max, and key

  if (options !== undefined) {
    $.ajax({
      data: {
        key: options.key,
        q: options.query,
        maxResults: options.max,
        part: 'snippet',
      },
      dataType: 'json',
      type: 'GET',
      options: options,
      url: 'https://www.googleapis.com/youtube/v3/search',
      success: function(data) {
        callback(data);
      },
      error: function(request, status, error) {
        console.log(request.responseText);
      }
    }).done( function (data) {
      callback(data);
    });
  }
};

window.searchYouTube = searchYouTube;
