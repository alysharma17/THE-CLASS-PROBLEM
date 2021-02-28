var player_1_name=localStorage.getItem("player_1_login");
var player_2_name=localStorage.getItem("player_2_login");
var player_1_score=0;
var player_2_score=0;



document.getElementById("player_1_name").innerHTML=player_1_name + ": ";
document.getElementById("player_2_name").innerHTML=player_2_name + ": ";
document.getElementById("score_1").innerHTML=player_1_score;
document.getElementById("score_2").innerHTML=player_2_score;
document.getElementById("player_question").innerHTML="Question Turn: " + player_1_name;
document.getElementById("player_answer").innerHTML="Answer Turn: " + player_2_name;


function send() {
var get_word=document.getElementById("question").value;
var word=get_word.toLowerCase();
console.log(word);

var someletter=word.charAt(1);
console.log(someletter);

var halflength=math.floor(word.length/2);
var someletter2=word.charAt(halflength);
console.log(someletter2);

var lastletter=word.length-1;
var someletter3=word.charAt(lastletter);
console.log(someletter3);

var replace_someletter=word.replace(someletter, "_");
var replace_someletter2=replace_someletter.replace(someletter2, "_");
var replace_someletter3=replace_someletter2.replace(someletter3, "_");
var question="<h4 id='word_display'> Q." + replace_someletter3 + "</h4>";
var input_box= "<br> Answer: <input type='text' id='answer_input'>";
var check_button= "<br> <br> <button onclick='check()'>Check</button>";
var row= question + input_box + check_button;
document.getElementById("output").innerHTML=row;
document.getElementById("question").value=" ";


}
 
var question_turn="player_1";
var answer_turn="player_2";

function check() {
answer=document.getElementById("answer_input").value;
answer_in_lowercase=answer.toLowerCase();
if (answer_in_lowercase== word) {
if (answer_turn=="player_2") { 
player_2_score=player_2_score+1;
document.getElementById("score_2").innerHTML=player_2_score;
}
else {
player_1_score=player_1_score+1;
document.getElementById("score_1").innerHTML=player_1_score;

}

}
if (answer_turn=="player_1") {
    answer_turn="player_2";
    document.getElementById("player_answer").innerHTML="Answer Turn: " + player_2_name;
}
else {
answer_turn="player_1";
document.getElementById("player_answer").innerHTML="Answer Turn: " + player_1_name;

}
if (question_turn=="player_1") {
    question_turn="player_2";
    document.getElementById("player_question").innerHTML="Question Turn: " + player_2_name;
}
else {
answer_turn="player_1";
document.getElementById("player_question").innerHTML="Question Turn: " + player_1_name;

} 
document.getElementById("output").innerHTML="  ";
}