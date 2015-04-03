//build album thumbnail
var buildAlbumThumbnail = function() {
  var template =
      '<div class="collection-album-container col-md-2">'
    + '  <img src="/images/album-placeholder.png"/>'
    + '  <div class="caption album-collection-info">'
    + '    <p>'
    + '      <a class="album-name" href="/album.html"> Album Name </a>'
    + '      <br/>'
    + '      <a href="/album.html"> Artist name </a>'
    + '      <br/>'
    + '      X songs'
    + '      <br/>'
    + '      X:XX total length'
    + '      <br/>'
    + '    </p>'
    + '  </div>'
    + '</div>';
 
  return $(template);
};

//generate X number of thumbnails
var updateCollectionView = function() {
  var $collection = $(".collection-container .row");
  $collection.empty();

  var albumTotal = Math.floor((Math.random() * (100-25)) + 25);
  for (var i=0; i<albumTotal; i++) {
    var $newThumbnail = buildAlbumThumbnail();
    $collection.append($newThumbnail);
    console.log(albumTotal);
  }
};

if (document.URL.match(/\/collection.html/)) {
  // Wait until the HTML is fully processed.
  $(document).ready(function() {

    //run collection view
    updateCollectionView();
  });
 }