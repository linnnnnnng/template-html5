/*!
 * 
 * All your scripts insert here
 * 
 */
var isTablet, isMobile;
$(function() {
	console.log( "ready!" );
	
	isTablet = (/ipad|android|android 3.0|xoom|sch-i800|playbook|tablet|kindle/i.test(navigator.userAgent.toLowerCase()));
	//mobile and tablet detection
	if($.browser.mobile || isTablet){
		//if is mobile or tablet
	}
});