Webcam.set({

width:310,
height:300,
image_format: 'jpeg',
jpeg_quality:90,

constraints:{

 facingMode:"environment"

}

});

cams = document.getElementById("camera");

Webcam.attach(cams);

function takeSnap(){

 Webcam.snap(function(data_uri){

     document.getElementById("result").innerHTML = '<img id="cap_img" src=" ' + data_uri + ' ">';

 });

}

console.log("ml5version: ",ml5.version);

var classifier = ml5.imageClassifier('MobileNet',modelLoaded);

function modelLoaded(){

 console.log("Model has successfully been loaded!");

}

function check(){

  var img_box = document.getElementById('cap_img');

  classifier.classify(img_box,gotResult);

}

function gotResult(error,results){

 if (error){

  console.log(error)

 }

 else{

  console.log(results);
  document.getElementById("object_name").innerHTML = results[0].label;

 }

}