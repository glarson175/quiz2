// write jQuery or vanilla javascript to do the following:
//  - loop through the list itmes in the <ol> and change their text and color to be different from what it is now
//  - use js and html to create at least one custom accordion (by yourself, no copy paste)
//  - create a button in the html that, once clicked, will fire off the function described in the next buller point
//  - write a function that will fade out all of the html inside the body tag and replace it with a custom goodbye message when you click the button
//  - finally, write a function that makes you happy :D (as in, have some fun a write something cool, it's up to you!)

$(document).ready(function(){
    console.log( "ready!" );
		changeOLcolor();
		$('.messagesent').hide();
		function close_accordion_section() {
        $('.accordion .accordion-section-title').removeClass('active');
        $('.accordion .accordion-section-content').slideUp(300).removeClass('open');
    }
 
    $('.accordion-section-title').click(function(e) {
        // Grab current anchor value
        var currentAttrValue = $(this).attr('href');
 
        if($(e.target).is('.active')) {
            close_accordion_section();
        }else {
            close_accordion_section();
 
            // Add active class to section title
            $(this).addClass('active');
            // Open up the hidden content panel
            $('.accordion ' + currentAttrValue).slideDown(300).addClass('open'); 
        }
 
        e.preventDefault();
    });
});

function fadeOutHtml(){
	$('#mainSection').hide('slow');
	$('#secondarySection').hide('slow');
	$('#lonely').hide('slow');
	$('h1').hide('slow');
	$('#clear').hide('slow');
	$('.messagesent').show();
}

function changeOLcolor()
{
	var ol = document.getElementById("ol");
	var items = ol.getElementsByTagName("li");
	for (var i = 0; i < items.length; ++i) {
		items[i].style.color = 'red';
		$(document).delay(5000);
	}
}

$(document).ready(function() {
    
});

function Happy(){
	fadeOutHtml();
	$('.messagesent').hide();
	$('#clear').hide();
	$('#happy').hide();
  $('body').css('background-image','url(./img/marvel.jpg)');
	
}
	

(function($){
	$('.links li a').on('click', function(e) {
		e.preventDefault()
		console.log('you clicked a link, good for you');
	});
	alert('test');
	console.log("this is a message for you!!!")
})(jQery);

$('#form').submit(function () {
		if(document.getElementById('firstname').attributes)
		$('#mainSection').hide();
		$('.messagesent').show();
		$('p').hide();
		$('h1').hide();
		return false;
});