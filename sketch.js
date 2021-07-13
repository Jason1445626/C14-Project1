function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  fill (ball.color[2])
  circle(ball.x,ball.y,ball.r)
  ball.xspeed=1
  ball.x=ball.x+ball.xspeed
}
var ball={
  x:40,
  y:60,
  r:10,
  xspeed:0,
  yspeed:0,
  color:["blue","red", "green"]
}