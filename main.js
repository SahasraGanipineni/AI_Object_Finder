Status = "";
objectName = "";

function setup() {
    canvas = createCanvas(400 , 400);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
}

function start() {
    objectDetector = ml5.objectDetector('cocossd' , modelLoaded);

    document.getElementById('status').innerHTML = "Status : Detecting Objects";
    objectName = document.getElementById('object_name_input');
}

function modelLoaded() {
    console.log("Model Loaded");
    Status = true;
}

function draw() {
    image(video , 0 , 0 , 400 , 400);
}