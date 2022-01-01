function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    background("white");
canvas.mouseReleased(classifyCanvas);
synth=window.speechSynthesis;
}
function clearCanvas(){
    background("white");
    
}
function preload(){
    classifier=ml5.imageClassifier('DoodleNet')
}
function draw(){
    strokeWeight(10);
    stroke('black');
    if(mouseIsPressed){
        line(pmouseX,pmouseY,mouseX,mouseY);
    }
}
function classifyCanvas(){
    classifier.classify(canvas,gotResult);
}
function gotResult(error,results){
    if(error){
        console.error(error);
    }
    else{
    console.log(results);
    document.getElementById('label').innerHTML='label: '+results[0].label;
    document.getElementById('Confidence').innerHTML='confidence: '+Math.round(results[0].confidence*100)+'%';
    utterThis=new SpeechSynthesisUtterance(results[0].label);
    synth.speak(utterThis);
}}