// update the random fortune page using AJAX
//
$("#random-fortune").on("click", function(event) {
  event.preventDefault();
  $.get("/fortunes/random.json", function(newFortune) {
    $("#fortune").text(newFortune.content);
  });
});

// create a new fortune and update the page
//
$("#fortune-form").on("submit", function(event) {
  event.preventDefault();
  var newFortuneContent = $('#fortune-content').val();
  // alert("yo");

  var request = $.ajax({
    method: "POST",
    data: { content: newFortuneContent },
    url: "/fortunes.json"
  });

  request.success(function() {
    // var req = new XMLHttpRequest();
    // req.open('POST', document.location, false);
    // req.send(null);
    // var headers = req.getAllResponseHeaders().toLowerCase();
    // alert(headers);

    $("ul.fortunes").append("<li>id: " + "content: " + newFortuneContent + "</li>");
    $('#fortune-content').val() = "";
  });
});
