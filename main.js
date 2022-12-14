function preload() {

}

function setup() {
    canvas = createCanvas(640, 400);
    canvas.position(119, 250);
    video = createCapture(VIDEO)
    video.hide();

    tint_color = "";
}

function draw() {
    image(video, 0, 0, 640, 450);
    tint(tint_color);
}

function take_snapshot() {
    save('image.png');
}

createCanvas(){
    
}
