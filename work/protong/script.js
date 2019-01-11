// target elements with the "draggable" class
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

interact('.draggable')
  .draggable({
    // enable inertial throwing
    inertia: true,
    // keep the element within the area of it's parent
    restrict: {
      restriction: "parent",
      endOnly: true,
      elementRect: { top: 0, left: 0, bottom: 1, right: 1 }
    },
    // enable autoScroll
    autoScroll: true,

    // call this function on every dragmove event
    onmove: dragMoveListener,
    // call this function on every dragend event
    onend: function (event) {
      var textEl = event.target.querySelector('p');

      textEl && (textEl.textContent =
        'moved a distance of '
        + (Math.sqrt(Math.pow(event.pageX - event.x0, 2) +
                     Math.pow(event.pageY - event.y0, 2) | 0))
            .toFixed(2) + 'px');
    }
  });

  function dragMoveListener (event) {
    var target = event.target,
        // keep the dragged position in the data-x/data-y attributes
        x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx,
        y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

    // translate the element
    target.style.webkitTransform =
    target.style.transform =
      'translate(' + x + 'px, ' + y + 'px)';

    // update the posiion attributes
    target.setAttribute('data-x', x);
    target.setAttribute('data-y', y);
  }

  // this is used later in the resizing and gesture demos
  window.dragMoveListener = dragMoveListener;

  // $("#toOne").click(function(){
  //     $('#drag').css({"transform":"translate(100px,100px)"});​
  // });
  function ififif(url){
    visible(".iframe-wrapper");
    var workhtml;
    workhtml ="";
      workhtml +="<div id='iframeClose' onclick='iframeClose();'>×</div><div id='ififif'><iframe src='"+url+"' scrolling='yes'></iframe></div>"
    $(".iframe-wrapper").append(workhtml);
    }

    function ififif2(url){
      visible(".iframe-wrapper");
      var workhtml;
      workhtml ="";
        workhtml +="<div id='iframeClose' onclick='iframeClose();'>× 클릭하거나 드래그하세요.</div><div id='ififif'><iframe src='"+url+"' scrolling='yes'></iframe></div>"
      $(".iframe-wrapper").append(workhtml);


      }


    function iframeClose(){
      $("#ififif").remove();
      $("#iframeClose  ").remove();
      invisible(".iframe-wrapper");
    }
