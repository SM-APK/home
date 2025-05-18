document.addEventListener("DOMContentLoaded", () => {
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-mode");
    }
});

function toggleClearButton() {
    let searchBar = document.getElementById("searchBar");
    let clearBtn = document.getElementById("clearBtn");
    clearBtn.style.display = searchBar.value ? "inline" : "none";
}

function clearSearch() {
    document.getElementById("searchBar").value = "";
    document.getElementById("clearBtn").style.display = "none";
    showAllProducts();
}

function searchProduct() {
    let query = document.getElementById("searchBar").value.toLowerCase();
    let products = document.querySelectorAll(".product");

    products.forEach(product => {
        let productName = product.querySelector("h3").textContent.toLowerCase();
        product.style.display = productName.includes(query) ? "flex" : "none";
    });
}

function filterByPrice() {
    let min = parseFloat(document.getElementById("minPrice").value) || 0;
    let max = parseFloat(document.getElementById("maxPrice").value) || Infinity;
    let products = document.querySelectorAll(".product");

    products.forEach(product => {
        let priceText = product.querySelector("p").textContent;
        let price = parseFloat(priceText.replace("Price: ₹", ""));
        product.style.display = (price >= min && price <= max) ? "flex" : "none";
    });
}

function clearPriceFilter() {
    document.getElementById("minPrice").value = "";
    document.getElementById("maxPrice").value = "";
    showAllProducts();
}

function showAllProducts() {
    let products = document.querySelectorAll(".product");
    products.forEach(product => {
        product.style.display = "flex";
    });
}

function toggleTheme() {
    document.body.classList.toggle("dark-mode");
    let theme = document.body.classList.contains("dark-mode") ? "dark" : "light";
    localStorage.setItem("theme", theme);
}
