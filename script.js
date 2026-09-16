function calculate() {
    let wins = Number(document.getElementById("wins").value);
    let kills = Number(document.getElementById("kills").value);
    let beds = Number(document.getElementById("beds").value);
    let finalKills = Number(document.getElementById("finalKills").value);
    let finalDeaths = Number(document.getElementById("finalDeaths").value);
    let games = Number(document.getElementById("games").value);

    let winRate = (wins / games) * 100;
    let killsPerGame = kills / games;
    let fkdr = finalKills / finalDeaths;

    document.getElementById("result").innerHTML =
        "Win Rate: " + winRate.toFixed(2) + "%<br>" +
        "Kills/Game: " + killsPerGame.toFixed(2) + "<br>" +
        "FKDR: " + fkdr.toFixed(2);
}
