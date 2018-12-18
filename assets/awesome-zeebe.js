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
  $.getJSON("https://api.github.com/repos/zeebe-io/awesome-zeebe/git/trees/HEAD")
    .done(function(data){
      for (var i = data.tree.length - 1; i >= 0; i--) {
        if(data.tree[i].path == "README.md") {
          getFileData(data.tree[i].url);
          break;
        }
      };
    })
    .fail(function() {
        $("#content").html(errorMsg);
    });
});
