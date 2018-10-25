"use strict"

function renderFeed ( feedData ) {
    var amountOfPosts  = feedData.length,
        HTML           = '';
        
        //checking if feedData is not empty
        if ( amountOfPosts > 0 ) {
            //render posts
            for (var i=0; i<amountOfPosts; i++) {
                //render top of a post --------------------------
                HTML += '<section class="feed-post">\
                            <div class="feed-post-top">\
                                <img src="'+feedData[i].postTop.user.profilePicture+'">\
                                <div>\
                                    <p>\
                                        <a href="'+feedData[i].postTop.user.profileLink+'">'+feedData[i].postTop.user.name+'</a>\
                                        <span>action(update/share/etc.)</span>\
                                    </p>\
                                    <p>'+feedData[i].postTop.time+''+' '+''+feedData[i].postTop.postReach[1].reach+'</p>\
                                    <i class="fa fa-ellipsis-h"></i>\
                                </div>'
                    HTML +='</div>';
                HTML += '</section>';   
                
                //render content      --------------------------                
               // HTML += '<div class="feed-post"'
                    //text 
                    // var postTextLength = feedData[i].postContetn.text.length;
                    // if ( postTextLength <= 130 || ) {

                    }
               // HTML += '</div>'
            }                        
        $('.feed-content').append(HTML);
        console.log(feedData[0].postContent.background);
    
        
    return;
}