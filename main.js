lipX= 0;
lipY= 0;
function preload()
{
   moustache= loadImage('https://i.postimg.cc/Hk1dG6hp/moustache.png')
}
function setup()
{
    canvas= createCanvas(300,300);
    canvas.center();
    video= createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function gotPoses(results)
{
    if (results.length > 0)
    {
        console.log(results);
        lipX= results[0].pose.lip.x;
        lipY= results[0].pose.lip.y;
        console.log("lip x = " + lipX);
        console.log("lip y = " + lipY);
        console.log("lip x = " + results[0].pose.nose.x);
        console.log("lip y = " + results[0].pose.nose.y);
    }
}
function modelLoaded()
{
    console.log('PoseNet is initialised')
}
function draw()
{
    image(video, 0, 0, 300, 300);
    image(moustache_filter, lipX, lipY, 30, 30)    
}
function take_snapshot()
{
    save('myfilterimage.png');
}