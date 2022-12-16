function crazyWorm(){
    TweenLite.defaultEase = Linear.easeNone;

    var svgns = "http://www.w3.org/2000/svg";
    var ease = 0.75;

    var pointer = { 
        x: window.innerWidth  / 2, 
        y: window.innerHeight / 2 
    };

    window.addEventListener("mousemove", function(event) {
        pointer.x = event.clientX;
        pointer.y = event.clientY;
    });

    var leader = pointer;

    //length of line
    for (var i = 0; i < total; i++) {
        leader = createLine(leader, i);
    }

    function createLine(leader, i) {

        var line = document.createElementNS(svgns, "line");
        root.appendChild(line);

        TweenLite.set(line, { x: -15, y: -15, alpha: 1 });

        var pos = line._gsTransform;

        TweenMax.to(line, 1000, {
            x: "+=1",
            y: "+=1",
            repeat: -1,
            modifiers: {
                x: function() {        
                    var x = pos.x + (leader.x - pos.x) * ease;
                    line.setAttribute("x2", leader.x - x);
                    return x;
                },
                y: function() {        
                    var y = pos.y + (leader.y - pos.y) * ease;
                    line.setAttribute("y2", leader.y - y);
                    return y;
                }
            }
        });  

        return pos;

    }  
}

var root = document.querySelector("#svg1");
var total = 70;
crazyWorm();

var root = document.querySelector("#svg2");
var total = 60;
crazyWorm();

var root = document.querySelector("#svg3");
var total = 50;
crazyWorm();

var root = document.querySelector("#svg4");
var total = 40;
crazyWorm();

var root = document.querySelector("#svg5");
var total = 30;
crazyWorm();

var root = document.querySelector("#svg6");
var total = 20;
crazyWorm();

var root = document.querySelector("#svg7");
var total = 10;
crazyWorm();


$('a').hover(
  function() {
    $('body').addClass('cursor')
  }, function() {
    $('body').removeClass('cursor')
  }
);


$(document).ready(function(){
    generateBinary();
      setInterval('updateBinary()', 5);
  });
  
  function generateBinary(){
    str = "";
    for ( var i = 0; i < 3500; i++ ) {
      str = str + Math.round(Math.random());
    }
    $(".bin").html(str);
  }
  
  function updateBinary() {
    str = $(".bin").html();
    n = str.length;
    r = Math.floor(Math.random() * n + 1)
    $(".bin").html(str.substring(0, r) + Math.round(Math.random()) + str.substring(r + 1));
  }