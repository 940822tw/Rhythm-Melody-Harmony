var state = 1;
function toggleFullScreen(elem) {
    // ## The below if statement seems to work better ## if ((document.fullScreenElement && document.fullScreenElement !== null) || (document.msfullscreenElement && document.msfullscreenElement !== null) || (!document.mozFullScreen && !document.webkitIsFullScreen)) {
    if ((document.fullScreenElement !== undefined && document.fullScreenElement === null) || (document.msFullscreenElement !== undefined && document.msFullscreenElement === null) || (document.mozFullScreen !== undefined && !document.mozFullScreen) || (document.webkitIsFullScreen !== undefined && !document.webkitIsFullScreen)) {
        if (elem.requestFullScreen) {
            elem.requestFullScreen();
        } else if (elem.mozRequestFullScreen) {
            elem.mozRequestFullScreen();
        } else if (elem.webkitRequestFullScreen) {
            elem.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
        } else if (elem.msRequestFullscreen) {
            elem.msRequestFullscreen();
        }
    } else {
        if (document.cancelFullScreen) {
            document.cancelFullScreen();
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if (document.webkitCancelFullScreen) {
            document.webkitCancelFullScreen();
        } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
        }
    }
}
function invisible(){
  for(var i in arguments) {
    $(arguments[i]).addClass('invisible');
    $(arguments[i]).removeClass('visible');
  }
}

function visible(){
  for(var i in arguments) {
    $(arguments[i]).addClass('visible');
    $(arguments[i]).removeClass('invisible');
  }
}
function invisibleLang(){
  for(var i in arguments) {
    $(arguments[i]).addClass('invisibleLang');
    $(arguments[i]).removeClass('visibleLang');
  }
}

function visibleLang(){
  for(var i in arguments) {
    $(arguments[i]).addClass('visibleLang');
    $(arguments[i]).removeClass('invisibleLang');
  }
}
function underline(){
  for(var i in arguments) {
    $(arguments[i]).addClass('underline');
    // $(arguments[i]).removeClass('underline');
  }
}

function noline(){
  for(var i in arguments) {
    // $(arguments[i]).addClass('underline');
    $(arguments[i]).removeClass('underline');
  }
}

function toggle(i){

invisible(".l-template-1",".l-template-2",".l-template-3",".l-template-4",".l-template-5");
noline(".menu_1",".menu_2",".menu_3",".menu_4",".menu_5")
visible(".l-template-"+i);
underline(".menu_"+i);
color2(i);
}

function korean(){
  invisibleLang("[data-lang='eng']");
  visibleLang("[data-lang='kor']");
  underline("#korean div");
  noline("#english div");
  if(state==5 || state==2){$('.underline').animate({"border-color" : '#ffffff'}, '0');}else  {$('.underline').animate({"border-color" : '#000000'}, '0');}
}
function english(){
  invisibleLang("[data-lang='kor']");
  visibleLang("[data-lang='eng']");
  underline("#english div");
  noline("#korean div");
  if(state==5 || state==2){underlineColor("#fff");}else{underlineColor("#000");}
}

function color2(i){
  state = i;
  if(i==1){$('body').animate({backgroundColor: '#FFFFFF', color:'#000000'}, 0); underlineColor("#000000"); $('body').css("background-image", "url()");}else
  if(i==2){$('body').animate({backgroundColor: '#0000FF', color:'#ffffff'}, 'slow'); underlineColor("#ffffff");  $('body').css("background-image", "url('img/bg.jpg')");}else
  if(i==3){$('body').animate({backgroundColor: '#FFFF00', color:'#000000'}, 'slow'); underlineColor("#000000"); $('body').css("background-image", "url('img/bg.jpg')");}else
  if(i==4){$('body').animate({backgroundColor: '#01a89e', color:'#000000'}, 'slow'); underlineColor("#000000");$('body').css("background-image", "url('img/bg.jpg')");}else
  if(i==5){$('body').animate({backgroundColor: '#333333', color:'#ffffff'}, 'slow'); underlineColor("#ffffff"); $('body').css("background-image", "url('img/bg.jpg')")}
}

function underlineColor(color){
var wrapper = document.querySelector('body');
wrapper.style.setProperty("--underline", color);
}



var activityTimeout = setTimeout(inActive, 60000);

function resetActive(){
    $(document.body).attr('class', 'active');
    clearTimeout(activityTimeout);
    activityTimeout = setTimeout(inActive, 60000);
}

// No activity do something.
function inActive(){
if(state==5){location.reload();}
 toggle(eval(state+1));
 resetActive()
}

// Check for mousemove, could add other events here such as checking for key presses ect.
$(document).bind('mousemove', function(){resetActive()});
