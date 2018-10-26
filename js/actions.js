"use strict"
$(document).ready(function (){    
    $('.userPhoto').attr("src", 'img/'+adminInfo.photo );
    $('#userName').html( adminInfo.userName );

    renderFeed( feedData );
});