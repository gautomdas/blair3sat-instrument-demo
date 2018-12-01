// Where is the circle
var x, y;
var w = window.innerWidth;
var h = window.innerHeight;

var spec_w = w;
var spec_h = h;
function setup() {
  createCanvas(w, h);
  // Starts in the middle
  scale(1.0);
}
var thetha = 45;
var delta = 0;
var zoom = 1.0;
var timer = 0;
var growth = 50;
var circ_rad = 100;
var flag;
var old;
var square_dim = 150;
function draw() {
  timer = timer + 1;
  console.log(timer);
  console.log(delta)
  background(0);
  // Draw a circle
  var s = 'Blair3Sat Radio Instrument Demonstration';
  fill(255);
  textSize(50);
  textStyle(BOLD);
  textAlign(CENTER);
  text(s, 0, 50, w, h); // Text wraps within text boxThe
  
  if (timer>200 && timer<700){
    var k = 'Deployment'
    fill(0, 255, 0);
    textSize(40);
    textStyle(BOLD);
    textAlign(CENTER);
    textAlign(CENTER);
    text(k, 0, 100, w, h); // Text wraps within text boxThe
    fill(255);
    growth = growth + 0.6;
    square_dim = square_dim - 0.05;
    circ_rad = circ_rad - 0.05;
    delta = 1;
    zeta = thetha;
    zoom = zoom - 0.0008;
    scale(zoom);
    spec_w = window.innerWidth/zoom;
    spec_h = window.innerHeight/zoom;
  }
  else if(timer>=700 && timer <1400){
    if((thetha%45)==0 || flag){
      flag = true;
      console.log("NOW!");
    }
    else{
      zeta = thetha;
      console.log("WAITING");
      console.log(thetha);
      console.log(thetha % 45);
      console.log("___________");
    }
    if(flag){
      flag = true;
      console.log("Triggered");
      var k = 'Disengagement'
      fill(255, 0, 0);
      textSize(40);
      textStyle(BOLD);
      textAlign(CENTER);
      text(k, 0, 100, w, h); // Text wraps within text boxThe
      fill(255);
      spec_w = window.innerWidth/zoom;
      spec_h = window.innerHeight/zoom;
      delta = delta - 0.00008
      if(timer>800){
        var k = 'Notice Speed Starts to Slow'
        fill(255, 255, 255);
        textSize(20);
        textStyle(NORMAL);
        textAlign(CENTER);
        text(k, 0, 150, w, h); // Text wraps within text boxThe
      }
    }
    scale(zoom);
    spec_w = window.innerWidth/zoom;
    spec_h = window.innerHeight/zoom;
  }
  else if(timer >= 1400){
      var k = 'Re-engagement'
      fill(0, 255, 0);
      zeta = thetha;
      delta = 1;
      textSize(40);
      textStyle(BOLD);
      textAlign(CENTER);
      text(k, 0, 100, w, h); // Text wraps within text boxThe
      fill(255);
      spec_w = window.innerWidth/zoom;
      spec_h = window.innerHeight/zoom;
      delta = delta - 0.0008
      scale(zoom);
      spec_w = window.innerWidth/zoom;
      spec_h = window.innerHeight/zoom;
  }
  else{
      zeta = thetha;
      console.log("Eror");
  }
  noStroke()
  
  fill(9, 132, 227);
  thetha = thetha + delta;
  quad(sin(radians(zeta))*square_dim+(spec_w)/2, cos(radians(zeta))*square_dim+(spec_h)/2,
       sin(radians(zeta+90))*square_dim+(spec_w)/2, cos(radians(zeta+90))*square_dim+(spec_h)/2,
       sin(radians(zeta+180))*square_dim+(spec_w)/2, cos(radians(zeta+180))*square_dim+(spec_h)/2,
       sin(radians(zeta+270))*square_dim+(spec_w)/2, cos(radians(zeta+270))*square_dim+(spec_h)/2);
  
  fill(255, 118, 117);
  noStroke();
  ellipse(spec_w/2, spec_h/2, circ_rad);
  strokeWeight(4);
  stroke(85, 239, 196);
  
  line(sin(radians(thetha+45))*growth+(spec_w)/2, cos(radians(thetha+45))*growth+(spec_h)/2, sin(radians(thetha+180+45))*growth+(spec_w)/2, cos(radians(thetha+180+45))*growth+(spec_h)/2)
  noStroke();
  strokeWeight(1);
  
  fill(255, 234, 167);
  rad = 10
  ellipse(sin(radians(thetha+45))*(growth+rad)+(spec_w)/2, cos(radians(thetha+45))*(growth+rad)+(spec_h)/2, 20);
  ellipse(sin(radians(thetha+180+45))*(growth+rad)+(spec_w)/2, cos(radians(thetha+180+45))*(growth+rad)+(spec_h)/2, 20);
}
