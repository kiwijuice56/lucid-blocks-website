const fanartList = [
    { src: "images/fanart/cheats_blamesman_discord.webp", credit: "cheats blamesman on discord" },
    { src: "images/fanart/ikouu_discord.webp", credit: "callmeiko on discord" },
    { src: "images/fanart/d387_discord.png", credit: "d387 on discord" },
    { src: "images/fanart/kvivitulo_discord_bubblebear.webp", credit: "kvivitulo on discord" },
    { src: "images/fanart/hairic_bubblebear.png", credit: "hairic on discord" },
    { src: "images/fanart/hairic_discord.png", credit: "hairic on discord" },
    { src: "images/fanart/hairic_glutton.png", credit: "hairic on discord" },
    { src: "images/fanart/hairic_librarian.png", credit: "hairic on discord" },
    { src: "images/fanart/hairic_wisp.png", credit: "hairic on discord" },
    { src: "images/fanart/resbunter_discord_blasphemy.jpg", credit: "resbunter on discord" },
    { src: "images/fanart/resbunter_discord.jpg", credit: "resbunter on discord" },
    { src: "images/fanart/heavywithcoping_discord.png", credit: "heavywithcoping on discord" },
    { src: "images/fanart/foxper_2.0_discord_bubblebears.jpg", credit: "foxper_04 on instagram" },
    { src: "images/fanart/foxper_2.0_discord.webp", credit: "foxper_04 on instagram" },
    { src: "images/fanart/para_discord.png", credit: "paranormilia on instagram" },
    { src: "images/fanart/evil_kasane_teto_discord.png", credit: "evil kasane teto on discord" },
];

function nextFanart() {
    index = (index + 1) % fanartList.length;
    updateImage();
}

function updateImage() {
    const selectedFanart = fanartList[index];
    const fanartImg = document.getElementById("fanart-img");
    const fanartCredit = document.getElementById("fanart-credit");

    fanartImg.src = selectedFanart.src;
    fanartCredit.textContent = "by: " + selectedFanart.credit;
}

let index = Math.floor(Math.random() * fanartList.length);
updateImage();