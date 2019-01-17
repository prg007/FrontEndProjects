// This will run after the document is ready
function getWiki() {
  var api = 'https://en.wikipedia.org/w/api.php?origin=*&format=json&action=query&generator=search&gsrnamespace=0&gsrlimit=10&inprop=fullurl&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch=';
  var question = $('input').val();

  $.ajax({
    method: "GET",
    url: api + question,
    success: function(data) {
      var results = data.query.pages; // assign the JSON array to a variable
      var ul = $('.thewiki');
      var list_items = ''; // create an empty html var for the following $.each() function
      
      console.log(results);

      ul.html(''); // clear the results list before we restart the $.each() function

      // loop through the JSON array
      $.each(results, function(key, val) {
        list_items +=
          '<a class="box" target="_blank" style="display:none" href="https://en.wikipedia.org/?curid=' + val.pageid + '">' +
          '<div>' +
          '<article class="media">';
        if (val.thumbnail) {
          list_items += '<figure class="media-left">' +
            '<p class="image is-64x64">' +
            '<img src="' + val.thumbnail.source + '">' +
            '</p></figure>'
        }
        list_items +=
          '<div class="media-content"><div class="content"><p><strong>' + val.title + '</strong><br>' + val.extract + '</p></div></div></div></article></div></a>';

      });
      ul.html(list_items); // insert results into DOM
      $('.box').fadeIn('slow'); // fade in animation for the results

      // ToDo: complete lopping the array then animate individually items

    },
    error: function(errorMessage) {
      //$('.error').html('Uhh, this is strange. Would you like to try again?');
      console.log('Something went wrong. Can you retry please? :D');
    }
  });

}

// When document is ready
$(document).ready(function() {

  $('#getWiki').on('click', function(event) {
    // ToDo: check if there are only white spaces in the query. if so, do not allow search   
    var current_val = $('input').val().trim();

    if (!current_val) {
      
      $('input').prop('placeholder', 'Just type something :) ');
      
    } else {
      if (current_val === $('input').attr('data-last-search')) {
        event.preventDefault();
      } else {
        $('input').attr('data-last-search', current_val );
        getWiki();
      }
    }

  });

  $('input').focus(function(e) {
    if (!$('input').val()) {
      $('input').prop('placeholder', '');
    };
  }).blur(function(e) {
    if (!$('input').val()) {
      $('input').prop('placeholder', 'Type something over here :)');
    };
  }).keypress(function(e) {
    if(e.which == 13){
      $('#getWiki').click();
    }
  });  

});