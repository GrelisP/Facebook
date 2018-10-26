"use strict"

function renderFeed ( feedData ) {
    let amountOfPosts  = feedData.length,
    HTML               = '';        
    //checking if feedData is not empty
    if ( amountOfPosts > 0 ) {
        //render posts
        
        for (let i=0; i<amountOfPosts; i++) {
            let iterations = feedData[i],
                textLength           = feedData[i].postContent.text.length,
                backgroundLength     = feedData[i].postContent.background.length,
                imgLength  = feedData[i].postContent.img.length;
            //render top of a post --------------------------
            HTML += '<section class="feed-post">\
                        <div class="feed-post-top">\
                            <img src="'+iterations.postTop.user.profilePicture+'">\
                            <div>\
                                <p>\
                                    <a href="'+iterations.postTop.user.profileLink+'">\
                                        '+iterations.postTop.user.name+'\
                                    </a>\
                                    <span>action(update/share/etc.)</span>\
                                </p>\
                                <p>'+iterations.postTop.time+''+' '+'\
                                    '+iterations.postTop.postReach[1].reach+'\
                                </p>\
                            </div>\
                            <i class="fa fa-ellipsis-h"></i>'                               
                HTML +='</div>';             
            //render content      --------------------------  
            if (imgLength === 0 && textLength > 0) {                   
                if ( backgroundLength === 0 ){
                HTML +='<div class="feed-post-content">'
                } else if (textLength <= 130 && backgroundLength !==0 ){
                HTML +='<div class="feed-post-content bg-'+ iterations.postContent.background+'">'  
                }
                HTML += '<p>'+iterations.postContent.text+'</p>'      
                HTML +='</div>';
            };
            //render post bottom     --------------------------     
                HTML += '<div class="post-bottom-top">\
                            <span><i class="fa fa-plane"></i>Like</span>\
                            <span><i class="fa fa-plane"></i>Comment</span>\
                            <span><i class="fa fa-plane"></i>Share</span>'
                HTML += '</div>';
                HTML += '<div class="post-bottom-bottom">\
                            <img src="img/'+adminInfo.photo+'">\
                            <div>\
                                <i class="fa fa-plane"></i>\
                                <i class="fa fa-plane"></i>\
                                <i class="fa fa-plane"></i>\
                            </div>';
                HTML += '</div>';
            HTML += '</section>';
        }                        
        $('.feed-content').append(HTML);  
        return;
    }
}

// HTML += '<div class="feed-post"'
// //text 
// var postTextLength = feedData[i].postContent.text.length;
// if ( postContent.text.length <= 130 && postContent.img.length === 0 ) {

// }
// HTML += '</div>'


// postContentLength    = feedData.postContent.length,



// for (let i=0; i<amountOfPosts; i++ ){
//     let iterations           = feedData[i];
//         textLength           = feedData[i].postContent.text.length,
//         backgroundLength     = feedData[i].postContent.background.length,
//         imgLength            = feedData[i].postContent.img.length,
//         imgDescriptionLength = feedData[i].postContent.imgDescription.length;
//     //post without img
//     if ( iterations.textLength === 0 ) {
//         console.log('aaaa');
//     }                
// }