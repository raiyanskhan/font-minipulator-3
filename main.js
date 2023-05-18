function setup()
{
 video = createCapture(VIDEO)
video.size(550,500);

canvas = createCanvas(550,550);
canvas.position(560,150);
poseNet = ml5.poseNet(video,modelLoaded)
}

function modelLoaded()
{
console.log('poseNet is initialized');
}

function gotPoses(results)
{
  leftWristX = results[0].pose.leftWrist.x;
  rightWristX = results[0].pose.rightWrist.x;

  if(results.length > 0)
  {
    console.log(results);

    leftWristX = results[0].pose.leftWrist.x;
    rightWristX = results[0].pose.rightWrist.x;
    difference = floor(leftWristX - rightWristX);
  }
}

var Difference = leftWristX - rightWristX;

function draw()
{
    background('red');
    textSize(Difference);
    fill('#FFE787');
    text('Raiyan',50 , 400);
}
