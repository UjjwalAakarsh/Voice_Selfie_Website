var SpeechRecognition=window.webkitSpeechRecognition;
var recognition=new SpeechRecognition();
function start() {
document.getElementById("textbox").innerHTML="";
recognition.start()
}
recognition.onresult= function run(result){
    console.log(result);
    output=result.results[0][0].transcript;
    console.log(output);

if(output=="take my selfie"){
document.getElementById("textbox").innerHTML=output
    speak();
    Webcam.attach("#camera");
    setTimeout(
        function(){
            take_snapshot();
            save();
        },5000
    );
}
function save(){
   link=document.getElementById("link");
   image=document.getElementById("cap_img").src
   link.href=image;
   link.click()
}

    
}
function speak(){
    speech=window.speechSynthesis;
    speak_data="Taking Your Selfie In 5 Seconds"
    saythis=new SpeechSynthesisUtterance(speak_data);
    speech.speak(saythis);
}
Webcam.set({
    height:250,
    width:360,
    image_quality:png,
    png_quality:90,
})

function take_snapshot(){
    Webcam.snap(function(pic){
        document.getElementById("selfie").innerHTML=`<img src=${pic} id="cap_img">`
    })
}