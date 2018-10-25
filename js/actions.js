"use strict"
$(document).ready(function (){    
    $('.userPhoto').attr("src", adminInfo.photo );
    $('#userName').html( adminInfo.userName );

    renderFeed( feedData );
});