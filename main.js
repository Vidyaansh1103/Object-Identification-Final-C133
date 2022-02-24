img = "";
status = "";
objects = [];

function preload()
{
    img = loadImage('dog_cat.jpg');
}

function setup()
{
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function modelLoaded()
{
    console.log('Model Loaded!');
    status = true;
    objectDetector.detect(img, gotResults);
}
function gotResults(error, resluts)
{
    if (error) {
        console.error(error);
    }
    console.log(resluts);
    objects = resluts;
}

function draw()
{
    image(img, 0, 0, 640, 420)
    
    if (status != "") {
        for(i = 0; i < objects.length; i++ ) {
            ocument.getElementById("status").innerHTML = "Status : Detecting Objects";
            percent = floor(objects[i].confidence * 100);
            text(objects[i].label + " " + percent + "%" + objects[i].x + 15, bobjects[i].y + 15);
            noFiil();
            stroke("#FF0000");
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
        }
    }
}