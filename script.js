function searchPlayer() {
    const username = document.getElementById("playerInput").value.trim();
    const result = document.getElementById("result");

    if (!username) {
        result.innerHTML = '<p class="error">Введите ник игрока.</p>';
        return;
    }

    result.innerHTML = 
        <div class="player-card">
            <h2>${username}</h2>
            <p>Кнопка работает! Сейчас подключим Agera API.</p>
        </div>
    ;
}
