var SpeechRecognition = window.webkitSpeechRecognition;
recognition = new SpeechRecognition();


function start(){
document.getElementById("textbox").innerHTML = "";
recognition.start();    
}
recognition.onresult = function(event){
console.log(event); 

var Content = event.results[0][0].transcript;
document.getElementById("textbox").innerHTML = Content;
console.log(Content);
speak();
}


function speak(){
 var synth = window.speechSynthesis;
 var To_speak = "Taking your selfie in 5 seconds";
 var ulltar_speak = new SpeechSynthesisUtterance(To_speak);
  synth.speak(ulltar_speak);
Webcam.attach(camera);
setTimeout(function(){
take_snapshot();
save();  
},7000);
}

camera = document.getElementById("camera");
Webcam.set({
height: 250,
width: 360,
image_format:"jpeg",
jpeg_quality: 90
})

function take_snapshot(){
Webcam.snap(function(data_uri){
document.getElementById("result").innerHTML = "<img id='snapshot'src='"+data_uri+"'>";  
}
);  
}

function save(){
link = document.getElementById("link");
image = document.getElementById("snapshot").src;
link.href = image;
link.click();  
}