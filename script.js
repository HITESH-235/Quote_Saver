function toggleNav() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

const input = document.getElementById("quoteInput");
const addBtn = document.getElementById("addBtn");
const container = document.getElementById("quoteContainer");

let quotes = JSON.parse(localStorage.getItem("quotes") || "[]");

function saveQuotes() {
    localStorage.setItem("quotes", JSON.stringify(quotes));
}

function renderQuotes() {
    container.innerHTML = "";

    quotes.forEach((q, i) => {
        const card = document.createElement("div");
        card.className = "quote-card";

        const text = document.createElement("div");
        text.className = "quote-text";
        text.textContent = q;

        const del = document.createElement("button");
        del.className = "delete-btn";
        del.textContent = "DELETE";

        del.onclick = () => {
            quotes.splice(i, 1);
            saveQuotes();
            renderQuotes();
        };

        card.appendChild(text);
        card.appendChild(del);
        container.appendChild(card);
    });
}

addBtn.onclick = () => {
    const value = input.value.trim();
    if (!value) return;

    quotes.push(value);
    saveQuotes();
    input.value = "";
    renderQuotes();
};

renderQuotes();


function toggleDropdown() {
    const drop = document.getElementById("dropdown");
    drop.style.display = drop.style.display === "block" ? "none" : "block";
}
