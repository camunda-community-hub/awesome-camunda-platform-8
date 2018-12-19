var errorMsg = '<h2 style="text-align: center">Failed to fetch the awesome-zeebe list. Please visit <a href="https://github.com/zeebe-io/awesome-zeebe">https://github.com/zeebe-io/awesome-zeebe</a></h2>';

var getFileData = function(url) {
  $.ajax({
    url: url,
    headers: {
      "Accept": "application/vnd.github.v3.raw"
    }
  }).done(function(data) {
    $("#content").html(marked(data));
  })
  .fail(function() {
    $("#content").html(errorMsg);
  });
};

$(document).ready(function(){
  getFileData("https://raw.githubusercontent.com/zeebe-io/awesome-zeebe/master/README.md");
});
