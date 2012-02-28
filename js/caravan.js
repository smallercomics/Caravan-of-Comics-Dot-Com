
/**
 Callback function for the tumblr API
*/
function show_tumblr(data){

	if (!data['posts-total']){
		return;
	}
  
  switch(data.posts[0].type){
    case "link":
			var post_html   = data.posts[0]['link-description'] ? data.posts[0]['link-description'] : '',
					post_url    = data.posts[0]['url'],
					post_date   = new Date(data.posts[0]['unix-timestamp'] * 1000),
					post_title  = data.posts[0]['link-text'] ? data.posts[0]['link-text'] : '',
					date_string = ['Monday ','Tuesday','Wednesday ','Thursday ','Friday ','Saturday ','Sunday '][post_date.getDay()] + post_date.getDate() + [' January',' February',' March',' April',' June',' July',' August',' September',' October',' November',' December'][post_date.getMonth()];
				
    break;
    case "text":
			var post_html   = data.posts[0]['regular-body'],
					post_url    = data.posts[0]['url'],
					post_date   = new Date(data.posts[0]['unix-timestamp'] * 1000),
					post_title  = data.posts[0]['regular-title'] ? data.posts[0]['regular-title'] : '',
					date_string = ['Monday ','Tuesday','Wednesday ','Thursday ','Friday ','Saturday ','Sunday '][post_date.getDay()] + post_date.getDate() + [' January',' February',' March',' April',' June',' July',' August',' September',' October',' November',' December'][post_date.getMonth()];
				
    
    break;
  }
	if (post_html){			
		$('#blog-preview').append( '<div class="date">' + 
															 date_string +
															 '</div><div class="title">' +
															 post_title +
															 '</div>' +
															 post_html + 
															 '<a class="more-link" href="'+ post_url+'">See more</a>');
	}
}

$(function(){
    $("#artist-content-image .slides").slides();
    $('.slides_container a').lightBox({
      imageLoading:'/images/lightbox-ico-loading.gif',
      imageBtnClose:'/images/lightbox-btn-close.gif',
      imageBtnPrev:'/images/lightbox-btn-prev.gif',
      imageBtnNext:'/images/lightbox-btn-next.gif',
    });
});
