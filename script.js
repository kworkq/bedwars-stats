async function searchPlayer() {
    const username = document.getElementById("playerInput").value.trim();
    const result = document.getElementById("result");

    if (!username) {
        result.innerHTML = <p class="error">Введите ник игрока.</p>;
        return;
    }

    result.innerHTML = <p>Загрузка статистики ${username}...</p>;

    try {
        const response = await fetch(
            https://api.agerapvp.club/v1/player/profile/${encodeURIComponent(username)},
            {
                headers: {
                    "X-Api-Key": "db6a5857-e587-48ba-8220-a8456117eb38"
                }
            }
        );

        if (!response.ok) {
            throw new Error("API error: " + response.status);
        }

        const data = await response.json();

        console.log(data);

        result.innerHTML = 
            <div class="player-card">
                <h2>${username}</h2>
                <pre>${JSON.stringify(data, null, 2)}</pre>
            </div>
        ;

    } catch (error) {
        console.error(error);

        result.innerHTML = 
            <p class="error">
                Не удалось получить статистику.
            </p>
        ;
    }
}
