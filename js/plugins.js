// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// Place any jQuery/helper plugins in here.

//ADDRESS HANDLE
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
})