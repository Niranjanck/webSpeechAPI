  
    var recognition = new webkitSpeechRecognition();
// questions
q1 = "WHO IS THE CEO OF APPLE";
q2 = "WHO IS THE CEO OF MICROSOFT";
q3 = "GO TO GOOGLE SEARCH"
document.getElementById("qu").innerHTML ="QUESTIONS <br>"+"1-"+ q1+"<br>"+"2-"+q2+"<br>"+"3-"+q3+"<br>";
    // answers
a1 = "TIM COOK";
a2 = "SATYA NADELLA";
    let speech = new SpeechSynthesisUtterance();
    speech.lang="en";
document.querySelector("#listen").addEventListener("click", ()=>{
  recognition.start();
  recognition.onresult = function(event){
    var term = event.results[0][0].transcript.toUpperCase();
      recognition.stop();
  document.getElementById("result").innerHTML = term;
    if (q1==term)
    {
        speech.text = a1;
        document.getElementById("answer").innerHTML = a1;
        window.speechSynthesis.speak(speech);
    }
    else if(q2==term)
    {
        speech.text = a2;
        document.getElementById("answer").innerHTML = a2;
        window.speechSynthesis.speak(speech);
    }
    else if(q3==term)
    {
        window.open("https://www.google.com/");
    }
    else
    {
        speech.text = "Sorry, I don't know the answer";
        document.getElementById("answer").innerHTML = speech.text;
        window.speechSynthesis.speak(speech);
    }
}
});
