img = "";
status1 = "";
objects= [];

function preload()
{
    img = loadImage("IMG_E0111.JPG")
}

function setup()
{
    canvas = createCanvas(400, 400);
    canvas.center();

    objectDetector = ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status").innerHTML = "Status : NO OBJECTS WERE DETECTED BY COCOSSD THESE ARE MANUAL"; 
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
    text("TV", 120, 200)
    noFill();
    stroke("#FF0000");
    rect(110, 180, 122, 100);

    fill("yellow");
    text("AC", 160, 50  )
    noFill();
    stroke("yellow");
    rect(150, 30, 100, 50);

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