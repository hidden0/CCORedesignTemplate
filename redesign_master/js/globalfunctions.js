// JavaScript Document
// Functions to be available to the entire site
/* Global Jquery */
// All *Document Ready* functionaility here (Please split up different segments by comments)
$(document).ready(function(){
						 
						 
	/* Read More links - Begin */
	// Be sure to initially hide all readmore elements
	/* Format for readmore content on pages
		<a class="read" id="read###" data-id="###" data-text-after="text" data-text-before="text">Read more >></a>
		<div id="rm###" class="readMore">
		Replace "###" with a number (it could be anything...really..)
		The <a> tag data-id ties the link with the content that is hidden.
		One link could open many hidden divs, or two separate links could open
		a single div. It is up to you.
		
		Added a data-text-after="text" and data-text-before="text" element to the script to override the Read Less << and Read More >>
	*/
	$(".readMore").hide();
	
	$('.read').click(function(){
		var id = $(this).data('id');
		var textBefore = $(this).data('text-after');
		var textAfter = $(this).data('text-before');
		$("#rm"+id).slideToggle(function() {
			if(textBefore===undefined && textAfter===undefined) {
				$("#read"+id).text($(this).is(':visible') ? "Read Less <<" : "Read More >>");
			}
			else {
				$("#read"+id).text($(this).is(':visible') ? textAfter : textBefore);
				textAfter = undefined;
				textBefore = undefined;
			}
		});
	});
	/* Read More links - End */	
});
/* End Global Jquery */
/* Plain javascript functions */
//These two paired functions allow reading/writing of cookies
function createCookie(name,value,days) {
	if (days) {
		var date = new Date();
		//date.setTime(date.getTime()+(days*24*60*60*1000));
		date.setTime(date.getTime()+(days));
		var expires = "; expires="+date.toGMTString();
	}
	else {
		expires = "";
	}
	document.cookie = name+"="+value+expires+"; path=/";
}

function readCookie(name) {
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');
	for(var i=0;i < ca.length;i++) {
		var c = ca[i];
		while (c.charAt(0)==' ') c = c.substring(1,c.length);
		if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
	}
	return null;
}
/* End Plain javascript functions */