const searchInput = document.getElementById("search-input-searching-673890");
const clearBtn = document.getElementById("clear-btn-searching-673890");
const searchBtn = document.getElementById("search-btn-searching-673890");
const gameCards = document.querySelectorAll(".game-card-searching-673890");
const popup = document.getElementById("popup-searching-673890");
const popupOkBtn = document.getElementById("popup-ok-btn-searching-673890");

// Show/Hide Clear Button
searchInput.addEventListener("input", () => {
    clearBtn.style.display = searchInput.value.trim() !== "" ? "inline-block" : "none";
});

// Clear Button
clearBtn.addEventListener("click", () => {
    searchInput.value = "";
    clearBtn.style.display = "none";
    showAllGames();
});

// Search Button
searchBtn.addEventListener("click", () => {
    const query = searchInput.value.toLowerCase().trim();
    let found = false;

    gameCards.forEach(card => {
        const name = card.querySelector("p").textContent.toLowerCase();
        const keywords = card.getAttribute("data-keywords").toLowerCase();

        if (name.includes(query) || keywords.includes(query)) {
            card.style.display = "block";
            found = true;
        } else {
            card.style.display = "none";
        }
    });

    if (!found) {
        popup.style.display = "flex";
    }
});

// Popup OK Button
popupOkBtn.addEventListener("click", () => {
    popup.style.display = "none";
    searchInput.value = "";
    clearBtn.style.display = "none";
    showAllGames();
});

function showAllGames() {
    gameCards.forEach(card => {
        card.style.display = "block";
    });
}