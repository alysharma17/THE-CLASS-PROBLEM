function add_user() {
    var player_1= document.getElementById("player_1_login").value;
    var player_2= document.getElementById("player_2_login").value;
    localStorage.setItem("player_1_login", player_1);
    localStorage.setItem("player_2_login", player_2);
    window.location="game_page.html";
}