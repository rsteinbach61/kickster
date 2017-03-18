
$(document).ready(function() {
  var Trackster = {};
$("#searchbtn").click(function(){
  //var titleString = $("#search_box").val();
  Trackster.searchTracksByTitle($("#search_box").val());
});






/*
  Given an array of track data, create the HTML for a Bootstrap row for each.
  Append each "row" to the container in the body to display all tracks.
*/
Trackster.renderTracks = function(tracks) {

};

/*
  Given a search term as a string, query the Spotify API.
  Render the tracks given in the API query response.
*/
Trackster.searchTracksByTitle = function(title) {
  console.log($.ajax({
    url: 'https://api.spotify.com/v1/search?type=track&q=' + title,
  }));
};
});
