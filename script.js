async function searchPlayer() {
    const username = document.getElementById("playerInput").value.trim();
    const result = document.getElementById("result");

    if (!username) {
        result.innerHTML = 
            <p class="error">Please enter a Minecraft username.</p>
        ;
        return;
    }

    result.innerHTML = 
        <div class="player-card">
            <h2>Loading ${username}...</h2>
        </div>
    ;

    try {
        // Здесь позже будет адрес нашего backend:
        const response = await fetch(
            YOUR_BACKEND_URL/player/${encodeURIComponent(username)}
        );

        if (!response.ok) {
            throw new Error("Player not found");
        }

        const data = await response.json();

        result.innerHTML = `
            <div class="player-card">
                <h2>${data.username}</h2>

                <div class="stats-grid">
                    <div class="stat">
                        <div class="stat-name">Wins</div>
                        <div class="stat-value">${data.wins ?? "—"}</div>
                    </div>

                    <div class="stat">
                        <div class="stat-name">Losses</div>
                        <
