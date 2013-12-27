/*!
 * 
 * SWFAddress Handle here
 *
 */
var title = document.title;
var log = function(msg) {
	var log = $('.log');
	if (!log.size()) {
		//log = $('<div class="log" />').appendTo('.footer');
	}
	log.append(msg.replace(/^([^:]*):(.*)$/, '<p><b>$1:</b> <span class="$1">$2</span></p>'))
		.attr({scrollTop: log.attr('scrollHeight')})
		.find('p:nth-child(even)').addClass('even');
};
var track = function() {
	log('track: ' + arguments[0]);
};
var serialize = function(obj, re) {
	var result = [];
	$.each(obj, function(i, val) {
		if ((re && re.test(i)) || !re)
			result.push(i + ': ' + (typeof val == 'object' ? val.join 
				? '\'' + val.join(', ') + '\'' : serialize(val) : '\'' + val + '\''));
	});
	return '{' + result.join(', ') + '}';
};

$.address.init(function(event) {
    
}).change(function(event) {
	log('change: ' + event.pathNames);
	
	selectPage(event.pathNames, event.parameters.back);
	
	if(event.parameters.sample!=undefined){
		$('.page2Output').html("Output "+event.parameters.sample)
	}
})

/*!
 * 
 * All your scripts insert here
 * 
 */
$(function() {
	console.log( "ready!" );
	$('#anime').animate({padding:75}, 500);
});

function selectPage(selectedPage){
	selectedPage=selectedPage==''?'home':selectedPage
	var pageCheck=selectedPage=='home'?'/':selectedPage
	var pageExist=false
	$('#navigation li').each(function(){
		$(this).removeClass('selected');
		var curRel=$(this).find('a').attr('rel');
		if(curRel.substring(9,curRel.length-1)==pageCheck){
			$(this).addClass('selected');
			pageExist=true
		}
	});
	if(pageExist){
		$('.mainContent').each(function(){
			$(this).hide();
		});
		$('.mainWrapper').find('#'+selectedPage).show();
	}
}