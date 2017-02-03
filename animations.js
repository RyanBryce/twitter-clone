$(document).ready(function() {
  $('#tweet-controls').addClass('tweet-controls-hidden')
    $('.tweet-compose').on('click', function() {
        $(this).addClass('tweet-compose-dubH');
        $('#tweet-controls').removeClass('tweet-controls-hidden');
    })
    $('#tweet-submit').attr('disabled', 'disabled'); //static button kaputt
    $('#area').keyup(function() {
        var chars = $(this).val().length; //gets length of texarea

        $('#char-count').text(140 - chars);
        if (chars >= 130) { //sets text warning perams
            $('#char-count').attr('style', 'color:red');
        } else {
            $('#char-count').attr('style', 'color:#999');
        };

        if (chars > 140 || chars <= 0) { //button eneable, dissable
            $('#tweet-submit').attr('disabled', 'disabled');
        } else {
            $('#tweet-submit').removeAttr('disabled');
        };
    });
    $('#tweet-submit').on('click', function() {
        $('#tweet-controls').addClass('tweet-controls-hidden');
        $('.tweet-compose').removeClass('tweet-compose-dubH');
        var message = $('#area').val();
        $('#stream').prepend(
            '<div class="tweet">' +
              '<div class="content">' +
                '<img class="avatar" src="img/alagoon.jpg" />' +
                '<strong class="fullname">Crazy Ted</strong>' +
                '<span class="username">@mCrazyTed</span>' +
                '<p class="tweet-text">' + message + '</p>' +
              '<div class="tweet-actions">' +
              '<ul>' +
                '<li>' + '<span class="icon action-reply">' + '</span>' + " " + 'Reply' + " " + '</li>' +
                '<li>' + '<span class="icon action-retweet">' + '</span>' + " " + 'Retweet' + " " + '</li>' +
                '<li>' + '<span class="icon action-favorite">' + '</span>' + " " + 'Favorite' + " " + '</li>' +
                '<li>' + '<span class="icon action-more">' + '</span>' + " " + 'More' + " " + '</li>' +
                '</ul>' +
            '</div>' +
            '<div class="stats">' +
              '<div class="retweets">' +
                '<p class="num-retweets">30</p>' +
                '<p>RETWEETS</p>' +
              '</div>' +
              '<div class="favorites">' +
                '<p class="num-favorites">6</p>' +
                '<p>FAVORITES</p>' +
              '</div>' +
              '<div class="users-interact">' +
                '<div>' +
                  '<img src="img/alagoon.jpg" />' +
                  '<img src="img/vklimenko.jpg" />' +
                '</div>' +
              '</div>' +
              '<div class="time">' +
                '1:04 PM - 19 Sep 13' +
              '</div>' +
            '</div>' +
            '<div class="reply">' +
              '<img class="avatar" src="img/alagoon.jpg" />' +
              '<textarea class="tweet-compose" placeholder="Reply to @mybff"/></textarea>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</div>'
        );
        $('#area').val('');
        $('.tweet').click(function(){
          $(this).find('.stats').show();
          $(this).find('.reply').show();
        })
    });
    $('.tweet').click(function(){
      $(this).find('.stats').show();
      $(this).find('.reply').show();
      $('#tweet-controls').addClass('tweet-controls-hidden');
      $('.tweet-compose').removeClass('tweet-compose-dubH');
    })
    // $('.tweet').mouseout(function(){
    //   $(this).find('.stats').show();
    //   $(this).find('.reply').show();
    // })

});
