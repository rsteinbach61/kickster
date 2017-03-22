
$(document).ready(function() {
  var Trackster = {};
  var preview_array = [];

$("#searchbtn").click(function(){
  Trackster.searchTracksByTitle($("#search_box").val());
});
$("#play_button").click(function(){
  window.open( 'https://p.scdn.co/mp3-preview/22bf10aff02db272f0a053dff5c0063d729df988?cid=null');
});

/*
  Given an array of track data, create the HTML for a Bootstrap row for each.
  Append each "row" to the container in the body to display all tracks.
*/
Trackster.renderTracks = function(tracks1) {
$("#song_row").empty();
  console.log(tracks1);
  for (var i = 0; i < tracks1.tracks.items.length; i++){

    var row_code =
    '<div class = "container-fluid song_list">' +
      '<div class = "row col_row">' +
        '<div class = "col-md-1 col play_btn">' +
          '<a href=' + '"' + tracks1.tracks.items[i].preview_url + '"' + 'target=' + '"blank"' + 'id = ' + '"play_button"' + 'class = ' + '"btn btn-default"' + 'role =' + '"button"' + '>' +
           '<i class="fa fa-play-circle-o fa-2x"></i></a>' +
        '</div>' +
        '<div class = "col-md-3 col">' +
          '<p>' + tracks1.tracks.items[i].track_number + ' ' + tracks1.tracks.items[i].name + '</p>' +
        '</div>' +
        '<div class = "col-md-3 col">' +
          '<p>' + tracks1.tracks.items[i].artists[0].name + '</p>' +
        '</div>' +
        '<div class = "col-md-3 col">' +
          '<p>' + tracks1.tracks.items[i].album.name + '</p>' +
        '</div>' +
        '<div class = "col-md-1 col">' +
          '<p>' + tracks1.tracks.items[i].popularity + '</p>' +
        '</div>' +
        '<div class = "col-md-1 col">' +
          '<p>' + tracks1.tracks.items[i].duration_ms + '</p>' +
        '</div>' +
      '</div>' +
    '</div>';
    $("#song_row").append(row_code);
}
};
/*
  Given a search term as a string, query the Spotify API.
  Render the tracks given in the API query response.
*/
Trackster.searchTracksByTitle = function(title) {
    var temp = $.ajax({
    url: 'https://api.spotify.com/v1/search?type=track&q=' + title,
    datatype: "json",
    success: function(data){
      Trackster.renderTracks(data);
    }


  });
};
  });
  //Trackster.renderTracks(temp);
//};

/*Trackster.searchTracksByTitle = function(title) {
  getTracks = function(title, callback){
    ($.ajax({
    url: 'https://api.spotify.com/v1/search?type=track&q=' + title + "&limit=1",
    datatype: "jsonp",
    success: callback
    //success: Trackster.renderTracks(response)
  }));
};
  getTracks(title, Trackster.renderTracks);
};*/

/*Trackster.searchTracksByTitle = function(title) {
    var temp = $.ajax({
    url: 'https://api.spotify.com/v1/search?type=track&q=' + title + "&limit=1",
    datatype: "json",
    //success: Trackster.renderTracks()
    //success: Trackster.renderTracks(response)

  });
  Trackster.renderTracks(temp);
};*/
