function work(name){


  visible(".work-wrapper");
  var workhtml;
  workhtml ="";

  if(name=='jueun'){
    workhtml +="<div id='workClose' onclick='workClose();'>×</div><div id='work'><iframe src='http://dalbada007.dothome.co.kr' scrolling='yes'></iframe></div>"
  }else if(name=="h1"||name=="h2"||name=="h3"||name=="h4"){workhtml +="<div id='workClose' onclick='workClose();'>×</div><div id='work'><iframe src='work/hyeonseo/"+name+".html' scrolling='yes'></iframe></div>"}else if(name=="daeseop"){workhtml +="<div id='workClose' onclick='workClose();'>×</div><div id='work'><iframe src='http://onehertz.dothome.co.kr/ds' scrolling='yes'></iframe></div>"}else if(name=="sh1"){
    workhtml +="<div id='workClose' onclick='workClose();'>×</div><div id='work'><iframe src='https://sorry-not-sorry.glitch.me/' scrolling='yes'></iframe></div>"
  }else if(name=="sh2"){
    workhtml +="<div id='workClose' onclick='workClose();'>×</div><div id='work'><iframe src='https://i-got-the-juice.glitch.me/' scrolling='yes'></iframe></div>"
  }else if(name=="sh3"){
    workhtml +="<div id='workClose' onclick='workClose();'>×</div><div id='work'><iframe src='https://tokai.glitch.me' scrolling='yes'></iframe></div>"
  }else{






  workhtml +="<div id='workClose' onclick='workClose();'>×</div><div id='work'><iframe src='work/"+name+"/index.html' scrolling='yes'></iframe></div>"
}

$(".work-wrapper").append(workhtml);


}

function workClose(){
  $("#work").remove();
  invisible(".work-wrapper");
}
