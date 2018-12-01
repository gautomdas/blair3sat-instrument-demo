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
var old = 0;
var square_dim = 150;
var slid = false;
var fake_timer = 0;
function draw() {
  fake_timer = fake_timer + 1;
  if (slid){
    rSlider = createSlider(0, fake_timer, 100);
    rSlider.position(w/2, h-50);
    
    timer = rSlider.value();
  }
  else{
    timer = fake_timer
  }
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
      if(delta-old>0){
        old = old + 0.01
        zeta = zeta + delta - old
      }
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
      delta = delta - 0.00008;
      if(timer>800){
        var k = 'Notice Speed of Antenna Starts to Slow'
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
  else if(timer >= 1400 && timer <= 1800){
      var k = 'Re-engagement'
      fill(0, 255, 0);
      textSize(40);
      textStyle(BOLD);
      textAlign(CENTER);
      text(k, 0, 100, w, h); // Text wraps within text boxThe
      fill(255);
      
      if(timer>1500){
        var k = 'Brake Engages'
        fill(255, 255, 255);
        textSize(20);
        textStyle(NORMAL);
        textAlign(CENTER);
        text(k, 0, 150, w, h); // Text wraps within text boxThe
        zeta = zeta+delta;
        if(delta<1){
          delta = delta +0.0008
        }
      }
      scale(zoom);
      spec_w = window.innerWidth/zoom;
      spec_h = window.innerHeight/zoom;
      old = 0;
  }
  else if(timer > 1800 && timer <=2200){
      if(delta-old>0){
          old = old + 0.01
          zeta = zeta + delta - old
      }
      var k = 'Disengagement'
      fill(255, 0, 0);
      textSize(40);
      textStyle(BOLD);
      textAlign(CENTER);
      text(k, 0, 100, w, h); // Text wraps within text boxThe
      fill(255);
      
      if(timer>1500){
        var k = 'The brake will disengage again when the antenna is taut.'
        fill(255, 255, 255);
        textSize(20);
        textStyle(NORMAL);
        textAlign(CENTER);
        text(k, 0, 150, w, h); // Text wraps within text boxThe
      }
      scale(zoom);
      
      delta = delta - 0.00008;
      spec_w = window.innerWidth/zoom;
      spec_h = window.innerHeight/zoom;
  }
  else if(timer > 2200){
      var k = 'Re-engagement'
      fill(0, 255, 0);
      textSize(40);
      textStyle(BOLD);
      textAlign(CENTER);
      text(k, 0, 100, w, h); // Text wraps within text boxThe
      fill(255);
      
      if(timer>1500){
        var k = 'This process of engangement and disengangement will continue for the life of the cubesat.'
        fill(255, 255, 255);
        textSize(20);
        textStyle(NORMAL);
        textAlign(CENTER);
        text(k, 0, 150, w, h); // Text wraps within text boxThe
        zeta = zeta+delta;
        if(delta<1){
          delta = delta +0.0008
        }
        var k = 'Fin. Go to different time: '
        fill(255, 255, 255);
        textSize(40);
        textStyle(ITALIC);
        textAlign(CENTER);
        text(k, 0, h-150, w, h);
        
        slid = true;
      }
      scale(zoom);
      spec_w = window.innerWidth/zoom;
      spec_h = window.innerHeight/zoom;
      old = 0;
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
