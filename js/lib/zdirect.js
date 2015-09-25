function isSecure() {
   return window.location.protocol == 'https:';
}

function ReadHTTPParamURL() {
	httpParameterURL = "";
	// Create variable is_input to see if there is a ? in the url
	var is_input = document.URL.indexOf('?');

	// Check the position of the ? in the url
	if (is_input !== -1)
	{ 
		// Create variable from ? in the url to the end of the string
		httpParameterURL = document.URL.substring(is_input+1, document.URL.length);
	}
	return httpParameterURL;
}


var thisPage;
if (document.URL.indexOf('?') !== -1)
	thisPage = document.URL.substring(0, document.URL.indexOf('?'));
else
	thisPage = document.URL;

var httpParams = ReadHTTPParamURL();
if (httpParams !== "")
	httpParams = httpParams + "&";

zmailURL = "https://www.zdirect.com/app/new/"+zmailApp+"?remote=on&"+httpParams+"thisPage="+thisPage;
try {
	if (lang !== undefined && lang !== null && lang !== "")
		zmailURL = zmailURL + "&lang=" + lang;
} catch (exc) {}
try {
	if (pl !== undefined && pl !== null && pl !== "")
		zmailURL = zmailURL + "&pl=" + pl;
} catch (exc) {}
try {
	if (guestEmail !== undefined && guestEmail !== null && guestEmail !== "")
		zmailURL = zmailURL + "&guestEmail=" + guestEmail;
} catch (exc) {}
try {
	if (guestId !== undefined && guestId !== null && guestId !== "")
		zmailURL = zmailURL + "&guestId=" + guestId;
} catch (exc) {}
// try {
// 	if (!jQuery)
// 		document.write ('<script src="https://www.zdirect.net/zdirect/js/jquery-1.7.1.min.js" type="text/javascript"></script>');
// } catch (exc) {
// 	document.write ('<script src="https://www.zdirect.net/zdirect/js/jquery-1.7.1.min.js" type="text/javascript"></script>');
// }
// try {
// 	if (!jQuery.ui) {
// 		document.write("<script src='https://www.zdirect.net/zdirect/stylesheet/jquery-ui-1.8.6.custom.min.js'></script>");
// 		document.write('<link href="https://www.zdirect.net/zdirect/stylesheet/_v2_lookAndFeel/css/dialogs.css" rel="stylesheet" media="screen" type="text/css" />');
// 	}
// } catch (exc) {
// 	document.write("<script src='https://www.zdirect.net/zdirect/stylesheet/jquery-ui-1.8.6.custom.min.js'></script>");
// 	document.write('<link href="https://www.zdirect.net/zdirect/stylesheet/_v2_lookAndFeel/css/dialogs.css" rel="stylesheet" media="screen" type="text/css" />');
// }
//document.write ("<script language=\"JavaScript\" src=\""+zmailURL+"\"></script>");




document.write ('<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">');
document.write ('<html xmlns="http://www.w3.org/1999/xhtml">');
document.write ('');
document.write ('<meta name="viewport" content="width=device-width"><meta http-equiv="content-type" content="text/html; charset=UTF-8">');
// var stateCA = new Array(13);
// stateCA[0] = "<option value='0'>Choose one...</option>";
// stateCA[1] = "<option value='AB'>Alberta</option>";
// stateCA[2] = "<option value='BC'>British Columbia</option>";
// stateCA[3] = "<option value='MB'>Manitoba</option>";
// stateCA[4] = "<option value='NB'>New Brunswick</option>";
// stateCA[5] = "<option value='NF'>Newfoundland</option>";
// stateCA[6] = "<option value='NW'>Northwest Territories</option>";
// stateCA[7] = "<option value='NS'>Nova Scotia</option>";
// stateCA[8] = "<option value='NU'>Nunavut</option>";
// stateCA[9] = "<option value='ON'>Ontario</option>";
// stateCA[10] = "<option value='PE'>Prince Edward Island</option>";
// stateCA[11] = "<option value='QC'>Quebec</option>";
// stateCA[12] = "<option value='SK'>Saskatchewan</option>";
// stateCA[13] = "<option value='YK'>Yukon</option>";
// var stateUS = new Array(54);
// stateUS[0] = "<option value='0'>Choose one...</option>";
// stateUS[1] = "<option value='AL'>Alabama</option>";
// stateUS[2] = "<option value='AK'>Alaska</option>";
// stateUS[3] = "<option value='AZ'>Arizona</option>";
// stateUS[4] = "<option value='AR'>Arkansas</option>";
// stateUS[5] = "<option value='CA'>California</option>";
// stateUS[6] = "<option value='CO'>Colorado</option>";
// stateUS[7] = "<option value='CT'>Connecticut</option>";
// stateUS[8] = "<option value='DC'>D.C.</option>";
// stateUS[9] = "<option value='DE'>Delaware</option>";
// stateUS[10] = "<option value='FL'>Florida</option>";
// stateUS[11] = "<option value='GA'>Georgia</option>";
// stateUS[12] = "<option value='HI'>Hawaii</option>";
// stateUS[13] = "<option value='ID'>Idaho</option>";
// stateUS[14] = "<option value='IL'>Illinois</option>";
// stateUS[15] = "<option value='IN'>Indiana</option>";
// stateUS[16] = "<option value='IA'>Iowa</option>";
// stateUS[17] = "<option value='KS'>Kansas</option>";
// stateUS[18] = "<option value='KY'>Kentucky</option>";
// stateUS[19] = "<option value='LA'>Louisiana</option>";
// stateUS[20] = "<option value='ME'>Maine</option>";
// stateUS[21] = "<option value='MD'>Maryland</option>";
// stateUS[22] = "<option value='MA'>Massachusetts</option>";
// stateUS[23] = "<option value='MI'>Michigan</option>";
// stateUS[24] = "<option value='MN'>Minnesota</option>";
// stateUS[25] = "<option value='MS'>Mississippi</option>";
// stateUS[26] = "<option value='MO'>Missouri</option>";
// stateUS[27] = "<option value='MT'>Montana</option>";
// stateUS[28] = "<option value='NE'>Nebraska</option>";
// stateUS[29] = "<option value='NV'>Nevada</option>";
// stateUS[30] = "<option value='NH'>New Hampshire</option>";
// stateUS[31] = "<option value='NJ'>New Jersey</option>";
// stateUS[32] = "<option value='NM'>New Mexico</option>";
// stateUS[33] = "<option value='NY'>New York</option>";
// stateUS[34] = "<option value='NC'>North Carolina</option>";
// stateUS[35] = "<option value='ND'>North Dakota</option>";
// stateUS[36] = "<option value='OH'>Ohio</option>";
// stateUS[37] = "<option value='OK'>Oklahoma</option>";
// stateUS[38] = "<option value='OR'>Oregon</option>";
// stateUS[39] = "<option value='PA'>Pennsylvania</option>";
// stateUS[40] = "<option value='RI'>Rhode Island</option>";
// stateUS[41] = "<option value='SC'>South Carolina</option>";
// stateUS[42] = "<option value='SD'>South Dakota</option>";
// stateUS[43] = "<option value='TN'>Tennessee</option>";
// stateUS[44] = "<option value='TX'>Texas</option>";
// stateUS[45] = "<option value='UT'>Utah</option>";
// stateUS[46] = "<option value='VT'>Vermont</option>";
// stateUS[47] = "<option value='VA'>Virginia</option>";
// stateUS[48] = "<option value='WA'>Washington</option>";
// stateUS[49] = "<option value='WV'>West Virginia</option>";
// stateUS[50] = "<option value='WI'>Wisconsin</option>";
// stateUS[51] = "<option value='WY'>Wyoming</option>";
// stateUS[52] = "<option value='AE'>ARMY Post Office, Area Europe</option>";
// stateUS[53] = "<option value='AP'>ARMY Post Office, Area Pacific</option>";
// stateUS[54] = "<option value='PR'>Puerto Rico</option>";
// jQuery(document).ready(function($) {
// $(".progressBar").each(function(index) {var currId = $(this).attr('id');
// $(this).wrap("<div class='progressBarWrapper' id='" + currId + "wrapper' style='display : block; border: solid 1px;'></div>");
// $(this).css("display", "block");$(this).css("width", "0%");});
// $("#birthday").datepicker({
// changeYear: true,
// dateFormat: "mm/dd/yy",
// minDate: "-100Y",
// maxDate: 0,
// yearRange: "1900:" + new Date().getFullYear()
// });});

//jQuery(document).ready(function($) {
/*******************************************************************************
 * Format answer blocks' width according to the question text width
 ******************************************************************************/
// $.formatAnswers = function() {
// var answerList = $("#surveyStart div.answerBlock");

// $.each(answerList, function(key, val) {
// if ($(val).prev().css("display") == "inline-block") {
// var questWidth = $(val).prev().css("width").replace("px", "");
// var containerWidth = $(val).closest("#surveyStart").css("width").replace("px", "");
// $(val).css("width", (parseInt(containerWidth) - parseInt(questWidth) - 70) + "px");// -70 because of the naviBar width
// }
// });
// }

// $.applyInlineForIE7 = function() {
// $.each($("#surveyStart > div > div"), function(key, val) {
// if ($(val).prev().css("display") == "inline-block")
// $(val).prev().addClass("inlineIE7");
// });
// }


//$.formatAnswers();
//$.applyInlineForIE7();

/*******************************************************************************
 * Registration fields logic
 ******************************************************************************/
// $('#surveyStart .datepicker').each(function() {
// if ($(this).val() != "") {
// // Converts Java date format back to datepicker format
// var myDate = new Date($(this).val());
// var month = (myDate.getMonth()+1);
// var day = myDate.getDate();
// if (month < 10)
// month = "0" + month;
// if (day < 10)
// day = "0" + day;
// $(this).val(month + "/" + day + "/" + myDate.getFullYear());
// }

// var options = {
// changeYear: true
// };

// if ($(this).hasClass("showAlways"))
// options.altField = 'input#date' + $(this).attr('id');

// if ($(this).closest('.packageBlock').length > 0)
// options.minDate = +1;

// $(this).datepicker(options);
// });

// $('#surveyStart select#country').change(function(){
// selectedCountry = $('#surveyStart #country :selected').val();
// if (selectedCountry == 'CA') {
// var newHtmlCA = "<select name='state' id='state'>";
// stateCA.forEach(function(state){
// newHtmlCA += state;
// });
// newHtmlCA += "</select>";
// $('#surveyStart #fieldBlockstate > div.fieldBlockInput').html(newHtmlCA);

// } else if (selectedCountry == 'US') {
// var newHtmlUS = "<select name='state' id='state'>";
// stateUS.forEach(function(state){
// newHtmlUS += state;
// });
// newHtmlUS += "</select>";
// $('#surveyStart #fieldBlockstate > div.fieldBlockInput').html(newHtmlUS);

// } else {
// var newHtml = "<input type='text' name='state'>";
// $('#surveyStart #fieldBlockstate > div.fieldBlockInput').html(newHtml);
// }
// });

// $("#surveyStart [id^=homePhone]").keyup(function(){
// if(this.value.length == $(this).attr('maxlength')) {
// var inputs = $(this).closest('form').find(':input');
// inputs.eq( inputs.index(this)+ 1 ).focus();
// }
// });

// $("#surveyStart [id^=officePhone]").keyup(function(){
// if(this.value.length == $(this).attr('maxlength')) {
// var inputs = $(this).closest('form').find(':input');
// inputs.eq( inputs.index(this)+ 1 ).focus();
// }
// });

// $("#surveyStart [id^=cellPhone]").keyup(function(){
// if(this.value.length == $(this).attr('maxlength')) {
// var inputs = $(this).closest('form').find(':input');
// inputs.eq( inputs.index(this)+ 1 ).focus();
// }
// });

// $("#surveyStart [id^=faxNumber]").keyup(function(){
// if(this.value.length == $(this).attr('maxlength')) {
// var inputs = $(this).closest('form').find(':input');
// inputs.eq( inputs.index(this)+ 1 ).focus();
// }
// });


/*******************************************************************************
 * Add a selectAll and DeselectAll button for multiple Answer questions
 ******************************************************************************/
// $("#surveyStart .selectAll").click(function() {
// $(this).parent().find("input[type='checkbox']").attr("checked", true);
// });
// $("#surveyStart .deselectAll").click(function() {
// $(this).parent().find("input[type='checkbox']").attr("checked", false);
// });



/*******************************************************************************
 * Remove all the hidden questions to not submit them to the form controller
 ******************************************************************************/
//  $("#surveyStart > #submitButton > input[type='submit'], #surveyStart > #submitButton > button[type='submit']").click(function() {
//   $.each($("#surveyStart > div.questionBlock"), function(key, val) {
//   if ($(val).css("display") == "none")
//   $(val).remove();
//   });
//  });

//  $("#surveyStart > #unsubscribeButton > input[type='submit'], #surveyStart > #unsubscribeButton > button[type='submit']").click(function() {
//   $.each($("#surveyStart > div.questionBlock"), function(key, val) {
//   if ($(val).css("display") == "none")
//   $(val).remove();
//   });
//   $("<input type='hidden' name='unsubscribe' value='true'/>").appendTo('form');
// });

/*******************************************************************************
 * Trigger the click event on each of the checked inputs to unhide questions 
******************************************************************************/
// $("#surveyStart input:checked").each(function() {
// $(this).trigger("click");
// $(this).prop('checked', true);
// }
// );

/*******************************************************************************
 * Check / Uncheck radio buttons
 ******************************************************************************/
// $('#surveyStart :radio').click(function() {
//     var previousValue = $(this).attr('previousValue');
    
//     if(previousValue == 'true' || previousValue == 'checked')
//         $(this).attr('checked', false).attr('previousValue', false);
//     else {
//     $(this).closest(".radioGroup").find(':radio').attr('previousValue', false);
//     $(this).attr('previousValue', true);
//     }
// });

//});
document.write('');
document.write ('<style type="text/css">');
document.write ('/*');
document.write (' * This is your RAW CSS');
document.write (' */');
document.write ('*#submitButton button { box-shadow:none; }');
document.write ('');
document.write ('*#fieldBlocklastNameinput { width:228px; }');
document.write ('');
document.write ('*#fieldBlockfirstNameinput { width:228px; }');
document.write ('');
document.write ('* {');
document.write ('  padding:0;');
document.write ('  outline:0;');
document.write ('  list-style:none;');
document.write ('}');
document.write ('');
document.write ('*#surveyStart {');
document.write ('  padding:20px;');
document.write ('  margin:0 auto;');
document.write ('  width:auto;');
document.write ('  font-family:Arial;');
document.write ('}');
document.write ('');
document.write ('*.inlineIE7 {}');
document.write ('');
document.write ('*.questionText {');
document.write ('  vertical-align:top;');
document.write ('  display:block;');
document.write ('  width:20%;');
document.write ('  font-size:14px;');
document.write ('}');
document.write ('');
document.write ('*#surveyStart *.fieldBlock input[type="text"] { width:100%; }');
document.write ('');
document.write ('div.clear { clear:both; }');
document.write ('');
document.write ('div.fieldBlockInput { display:inline-block; }');
document.write ('');
document.write ('div.fieldBlockInput>input,');
document.write ('div.fieldBlockInput>select { width:100%; }');
document.write ('');
document.write ('div.answerBlock {');
document.write ('  display:inline-block;');
document.write ('  width:100%;');
document.write ('}');
document.write ('');
document.write ('div.progressBar {');
document.write ('  display:block;');
document.write ('  white-space:nowrap;');
document.write ('}');
document.write ('');
document.write ('*.isMandatory {');
document.write ('  background-repeat:no-repeat;');
document.write ('  background-position:left 20px;');
document.write ('  padding-left:8px;');
document.write ('  margin-left:-8px;');
document.write ('}');
document.write ('');
document.write ('*.isMandatory.fieldBlock { background-position:left 5px; }');
document.write ('');
document.write ('*#policy,');
document.write ('*#submitButton {');
document.write ('  margin-top:15px;');
document.write ('  margin-bottom:15px;');
document.write ('}');
document.write ('');
document.write ('input[type="submit"],');
document.write ('button {');
document.write ('  font-size:12px;');
document.write ('  padding:2px;');
document.write ('  padding-left:7px;');
document.write ('  padding-right:7px;');
document.write ('}');
document.write ('');
document.write ('*#policy input[type="checkbox"] { margin-right:5px; }');
document.write ('');
document.write ('*.fieldBlockText {');
document.write ('  width:20%;');
document.write ('  display:inline-block;');
document.write ('  margin-top:5px;');
document.write ('}');
document.write ('');
document.write ('*.errorString { color:rgb(204,0,0); }');
document.write ('');
document.write ('*#fieldBlockemailinput { width:228px; }');
document.write ('');
document.write ('*#ui-datepicker-div.ui-helper-hidden-accessible { display:none; }');
document.write ('');
document.write ('*#submitButton { text-align:left; }');
document.write ('');
document.write ('#date27492 { width:250px; }');
document.write ('');
document.write ('</style>');
document.write ('');
document.write ('');
document.write ('<form name="surveysubmit9977" action="https://www.zdirect.com/forms/survey/9977?optinCheckbox=on&amp;thisPage=http://hotel-hotel.com.au/fixandmake/wordpress/" method="post"> ');
document.write (' <input name="surveyId" value="13246" type="hidden" /> ');
document.write (' <input name="landingPageId" value="9977" type="hidden" /> ');
document.write (' <div class="survey" id="surveyStart">');
document.write ('  <div class="fieldBlock isMandatory" id="fieldBlockemail">');
document.write ('   <div class="fieldBlockInput" id="fieldBlockemailinput">');
document.write ('    <input placeholder="" type="text" name="email" />');
document.write ('   </div>');
document.write ('   <div class="clear"></div>');
document.write ('  </div>');
document.write ('  <div class="submitButton" id="submitButton">');
document.write ('   <button type="submit"> Subscribe </button>');
document.write ('  </div>');
document.write (' </div> ');
document.write ('</form>');
document.write ('');
document.write ('');