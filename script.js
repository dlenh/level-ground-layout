document.getElementById("pickGrass").addEventListener("click", pickGrass);
document.getElementById("pickFire").addEventListener("click", pickFire);
document.getElementById("pickWater").addEventListener("click", pickWater);

// document.querySelector("main").addEventListener("mouseover", mainBG);

// function mainBG() {
//     document.querySelector("main").style.backgroundImage = "none";
// }

const kanto = document.getElementById("kanto")
const johto = document.getElementById("johto")
const hoenn = document.getElementById("hoenn")
const sinnoh = document.getElementById("sinnoh")
const unova = document.getElementById("unova")
const kalos = document.getElementById("kalos")
const alola = document.getElementById("alola")
const galar = document.getElementById("galar")

// kanto.addEventListener("mouseover", kantoMap);
// johto.addEventListener("mouseover", johtoMap);
// hoenn.addEventListener("mouseover", hoennMap);
// unova.addEventListener("mouseover", unovaMap);
// kalos.addEventListener("mouseover", kalosMap);
// alola.addEventListener("mouseover", alolaMap);
// galar.addEventListener("mouseover", galarMap);

kanto.addEventListener("click", kantoRegion);
johto.addEventListener("click", johtoRegion);
hoenn.addEventListener("click", hoennRegion);
sinnoh.addEventListener("click", sinnohRegion);
unova.addEventListener("click", unovaRegion);
kalos.addEventListener("click", kalosRegion);
alola.addEventListener("click", alolaRegion);
galar.addEventListener("click", galarRegion);

// function kantoMap() {
//     document.querySelector("main").style.backgroundImage = "url('images/kanto/kanto.png')";
//     // document.querySelector("main").style.backgroundRepeat = "no-repeat";
//     document.querySelector("main").style.backgroundSize = "cover";
// }

// function johtoMap() {
//     document.querySelector("main").style.backgroundImage = "url('images/johto.png')";
//     document.querySelector("main").style.backgroundSize = "cover";
// }

// function hoennMap() {
//     document.querySelector("main").style.backgroundImage = "url('images/hoenn/hoenn.png')";
//     document.querySelector("main").style.backgroundSize = "cover";
// }

// function sinnohMap() {
//     document.querySelector("main").style.backgroundImage = "url('images/sinnoh/sinnoh.png')";
//     document.querySelector("main").style.backgroundSize = "cover";
// }

// function unovaMap() {
//     document.querySelector("main").style.backgroundImage = "url('images/unova.png')";
//     document.querySelector("main").style.backgroundSize = "cover";
// }

// function kalosMap() {
//     document.querySelector("main").style.backgroundImage = "url('images/kalos.png')";
//     document.querySelector("main").style.backgroundSize = "cover";
// }

// function alolaMap() {
//     document.querySelector("main").style.backgroundImage = "url('images/alola.png')";
//     document.querySelector("main").style.backgroundSize = "cover";
// }

// function galarMap() {
//     document.querySelector("main").style.backgroundImage = "url('images/galar.png')";
//     document.querySelector("main").style.backgroundSize = "cover";
// }

const main =  document.querySelector("main")
const grass = document.getElementById("grass")
const fire = document.getElementById("fire")
const water = document.getElementById("water")
const boxAName = document.querySelector(".box-a h3")
const boxBName = document.querySelector(".box-b h3")
const boxCName = document.querySelector(".box-c h3")

function clearStarter() {
    boxA.style.backgroundColor = "lightgray";
    boxB.style.backgroundColor = "lightgray";
    boxC.style.backgroundColor = "lightgray";
}

function kantoRegion() {
    clearStarter();
    main.style.backgroundImage = "url('images/kanto/kanto.png')";
    main.style.backgroundSize = "cover";
    grass.src = "images/kanto/bulbasaur.png";
    boxAName.innerText = "BULBASAUR";
    fire.src = "images/kanto/charmander.png";
    boxBName.innerText = "CHARMANDER";
    water.src = "images/kanto/squirtle.png";
    boxCName.innerText = "SQUIRTLE";
}

function johtoRegion() {
    clearStarter();
    main.style.backgroundImage = "url('images/johto/johto.png')";
    main.style.backgroundSize = "cover";
    grass.src = "images/johto/chikorita.png";
    boxAName.innerText = "CHIKORITA";
    fire.src = "images/johto/cyndaquil.png";
    boxBName.innerText = "CYNDAQUIL";
    water.src = "images/johto/totodile.png";
    boxCName.innerText = "TOTODILE";
}

function hoennRegion() {
    clearStarter();
    main.style.backgroundImage = "url('images/hoenn/hoenn.png')";
    main.style.backgroundSize = "cover";
    grass.src = "images/hoenn/treecko.png";
    boxAName.innerText = "TREECKO";
    fire.src = "images/hoenn/torchic.png";
    boxBName.innerText = "TORCHIC";
    water.src = "images/hoenn/mudkip.png";
    boxCName.innerText = "MUDKIP";
}

function sinnohRegion() {
    clearStarter();
    main.style.backgroundImage = "url('images/sinnoh/sinnoh.png')";
    main.style.backgroundSize = "cover";
    grass.src = "images/sinnoh/turtwig.png";
    boxAName.innerText = "TURTWIG";
    fire.src = "images/sinnoh/chimchar.png";
    boxBName.innerText = "CHIMCHAR";
    water.src = "images/sinnoh/piplup.png";
    boxCName.innerText = "PIPLUP";
}

function unovaRegion() {
    clearStarter();
    main.style.backgroundImage = "url('images/unova/unova.png')";
    main.style.backgroundSize = "cover";
    grass.src = "images/unova/snivy.png";
    boxAName.innerText = "SNIVY";
    fire.src = "images/unova/tepig.png";
    boxBName.innerText = "TEPIG";
    water.src = "images/unova/oshawott.png";
    boxCName.innerText = "OSHAWOTT";
}

function kalosRegion() {
    clearStarter();
    main.style.backgroundImage = "url('images/kalos/kalos.png')";
    main.style.backgroundSize = "cover";
    grass.src = "images/kalos/chespin.png";
    boxAName.innerText = "CHESPIN";
    fire.src = "images/kalos/fennekin.png";
    boxBName.innerText = "FENNEKIN";
    water.src = "images/kalos/froakie.png";
    boxCName.innerText = "FROAKIE";
}

function alolaRegion() {
    clearStarter();
    main.style.backgroundImage = "url('images/alola/alola.png')";
    main.style.backgroundSize = "cover";
    grass.src = "images/alola/rowlet.png";
    boxAName.innerText = "ROWLET";
    fire.src = "images/alola/litten.png";
    boxBName.innerText = "LITTEN";
    water.src = "images/alola/popplio.png";
    boxCName.innerText = "POPPLIO";
}

function galarRegion() {
    clearStarter();
    main.style.backgroundImage = "url('images/galar/galar.png')";
    main.style.backgroundSize = "cover";
    grass.src = "images/galar/grookey.png";
    boxAName.innerText = "GROOKEY";
    fire.src = "images/galar/scorbunny.png";
    boxBName.innerText = "SCORBUNNY";
    water.src = "images/galar/sobble.png";
    boxCName.innerText = "SOBBLE";
}

const boxA = document.querySelector(".box-a")
const boxB = document.querySelector(".box-b")
const boxC = document.querySelector(".box-c")

function pickGrass() {
    boxA.style.backgroundColor = "lightgreen";
    boxB.style.backgroundColor = "lightgray";
    boxC.style.backgroundColor = "lightgray";
}

function pickFire() {
    boxA.style.backgroundColor = "lightgray";
    boxB.style.backgroundColor = "pink";
    boxC.style.backgroundColor = "lightgray";
}

function pickWater() {
    boxA.style.backgroundColor = "lightgray";
    boxB.style.backgroundColor = "lightgray";
    boxC.style.backgroundColor = "lightblue";
}
