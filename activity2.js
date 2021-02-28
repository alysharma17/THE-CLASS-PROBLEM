function get_score() {
    var get_score_from_storage=localStorage.getItem("score");
    document.getElementById("display_score").innerHTML= "Score: " + get_score_from_storage;
}
function back() {
    window.location="activity_1.html";
}