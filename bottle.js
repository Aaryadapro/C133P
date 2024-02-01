img = "";
status1 = "";
objects= [];

function preload()
{
    img = loadImage("bottles.jpg");
}

function setup()
{
    canvas = createCanvas(400, 400);
    canvas.center();

    objectDetector = ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status").innerHTML = "Status : OBJECTS DETECTED BY COCOSSD"; 
}

function modelLoaded()
{
    console.log("model loaded");
    status1 = true;
    objectDetector.detect(img, gotResults);
}

function draw()
{
    image(img, 0, 0, 400, 400);

    fill("#FF0000");
    text("BOTTLE", 315, 106)
    noFill();
    stroke("#FF0000");
    rect(300, 91, 90, 290);

    fill("#FF0000");
    text("CUP", 170, 13)
    noFill();
    stroke("#FF0000");
    rect(150, 0, 80, 380);

    fill("#FF0000");
    text("BOTTLE", 315, 106)
    noFill();
    stroke("#FF0000");
    rect(300, 91, 90, 290);

    if(status1 != "")
    {
        for(i = 0; i > objects.length; i++)
        {
            fill("#FF0000");
            percent = floor(objects[i].confidence * 100);
            text(objects[i].label + " " + percent + "%", objects[i].x + 15, objects[i].y + 15);
            noFill();
            stroke("FF0000");
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);  
        }
    }
}

function gotResults(error, results)
{
    if(error)
    {
        console.error(error);
    }
    else
    {
        console.log(results);
        objects = results;
    }
}

function home(){
    window.location = "index.html";
}