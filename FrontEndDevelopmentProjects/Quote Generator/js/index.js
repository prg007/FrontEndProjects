$(document).ready(function() {
//fade-in body on page load
  $("#body").addClass("load");
  //starts page with quote
  importQuote();
  //button click
  var btn = document.getElementById("a");
  btn.addEventListener("click", function() {
    //fade out
    $("#quote-box").fadeOut("fast");
    importQuote();
    //fade in after quote loaded - doesn't always work, but slow fadeIn helps
    $("#quote-box").fadeIn(1000);
  });
  //API call
  function importQuote() {
    $.ajax({
      url:
        "https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?",
      data: {},
      dataType: "json",
      success: function(data) {
        theQuote = data.quoteText;
        theAuthor = data.quoteAuthor;
        //filters long quotes that mess with formatting
        splitQuote = data.quoteText.split(" ");
        if (splitQuote.length > 15) {
          importQuote();
          //adds "Unknown" if no author specified
        } else if (data.quoteAuthor === "") {
          document.getElementById("quote").innerHTML = '"' + theQuote;
          document.getElementById("author").innerHTML = "-- Unknown";
        } else {
          //full quote, if applicable
          document.getElementById("quote").innerHTML = '"' + theQuote;
          document.getElementById("author").innerHTML = "--" + theAuthor;
        }
        //tweet quote with hashtags - opens in separate tab
        $("#twitter-button").click(function() {
          $("#twitter-button").attr({
            href:
              "https://twitter.com/intent/tweet?text=" +
              theQuote.replace(/\n/g, " ").replace(/\s\s/g, " ") +
              "-" +
              theAuthor +
              "&hashtags=randomQuoteGenerator,byPrasun",
            target: "_blank"
          });
        });
        //email quote with subject line
        $("#email-button").click(function() {
          $("#email-button").attr(
            "href",
            "mailto:?subject=Check out this cool quote I found on Random Quote Generator byPrasun!&body=" +
              theQuote.replace(/\s/g, "%20") +
              "%0A-%20" +
              theAuthor
          );
        });
      }
    });
  }
});