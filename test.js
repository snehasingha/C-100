var recognition = window.webkitSpeechRecognition;
var synth = window.speechSynthesis;
speech = new recognition();
speech.start();

camera = document.getElementById("c");
Webcam.attach(camera);
Webcam.set({
    width: 360,
    height: 250,
    image_format: 'jpeg',
    jpeg_quality: 90
});

speech.onresult = function (event) {
    console.log(event);
    var text=event.results[0][0].transcript
    if (text == "go") {
        takeSelfie();
    }
}

function speak(speech) {
    var utterance = new SpeechSynthesisUtterance(speech);
    synth.speak(utterance);
}

function takeSelfie() {
    console.log("in")
    Webcam.snap(function (i) {
        document.getElementById("o").innerHTML = '<img id="i" src="' + i + '">';
    });
    link = document.getElementById("link")
    document.getElementById("link").href = document.getElementById("i").src;
    link.click();
}