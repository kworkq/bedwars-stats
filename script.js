function searchPlayer() {
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
            <h2>${username}</h2>

            <div class="stats-grid">
                <div class="stat">
                    <div class="stat-name">Wins</div>
                    <div class="stat-value">—</div>
                </div>

                <div class="stat">
                    <div class="stat-name">Losses</div>
                    <div class="stat-value">—</div>
                </div>

                <div class="stat">
                    <div class="stat-name">W/L</div>
                    <div class="stat-value">—</div>
                </div>

                <div class="stat">
                    <div class="stat-name">Kills</div>
                    <div class="stat-value">—</div>
                </div>

                <div class="stat">
                    <div class="stat-name">Deaths</div>
                    <div class="stat-value">—</div>
                </div>

                <div class="stat">
                    <div class="stat-name">Final Kills</div>
                    <div class="stat-value">—</div>
                </div>

                <div class="stat">
                    <div class="stat-name">Final Deaths</div>
                    <div class="stat-value">—</div>
                </div>

                <div class="stat">
                    <div class="stat-name">Beds</div>
                    <div class="stat-value">—</div>
                </div>

                <div class="stat">
                    <div class="stat-name">Games</div>
                    <div class="stat-value">—</div>
                </div>
            </div>
        </div>
    ;
}
