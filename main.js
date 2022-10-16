function preload()
{

}

function setup()
{
canvas = createCanvas(390 , 300);
canvas.center();
video = createCapture(VIDEO);
video.size(350,300);
poseNet = ml5.poseNet(video,modelLoaded);
poseNet.on('pose', gotPoses);
}


function draw() 
{
  
}

function modelLoaded(){
    console.log('PoseNet Is Initialised!');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
    }
}

