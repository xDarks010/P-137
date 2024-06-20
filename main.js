video = "";

function setup(){
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550,550);
    canvas.position(560, 150);

}

function draw(){
    if(status != ""){
        objectDetector.detect(video, gotResult);
        for (i = 0; i < objects.length; i++){
            document.getElementById("status").innerHTML = "Status : Objects Detected";
            document.getElementById("number_of_objects").innerHTML = "Number Of Objects Are:" + object.length;
            
            fill("#FF0000");
            percent = floor(objects[i].confidence * 100);
            text(objects[i].label + " " + percent + "%", objects[i].x + 15, objects[i].y + 15);
            noFill();
            stroke("#FF0000");
            rect(objects[i].x, objects[i].y , objects[i].width, objects[i].height); 
                       } 
    };
}

function start(){
    objectDetector = ml5.objectDetector('cocossd' , modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
    textinp = document.getElementById("input").value

    if(objects[i].label == textinp){
        videoLiveView.stop
        objectDetector.detect(gotResult);
        document.getElementById("Danger").innerHTML = "Object Mentioned Found"
    }
    else{
        document.getElementById("Danger").innerHTML = "Object Mentioned Not Found"
    }
}

function modelLoaded(){
    console.log("Model loaded!")
    status = true;
    video.speed(1);
    video.volume(0);
    video.loop();
}

function gotResult(error, results){
    if(error){
        console.log(error);
    }
    console.log(results);
    objects = results;
}
