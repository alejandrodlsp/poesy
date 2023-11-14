const poemsContainer = document.getElementById("poem-container");
const poemTitle = document.getElementById("poem-title");
const poemContent = document.getElementById("poem-content");

let curImg = 1;
let bgImgs = document.querySelectorAll(".bg-imgs img");
    setInterval(() => {
        let prevImg = curImg? curImg-1: bgImgs.length-1;

        bgImgs[prevImg].style.opacity = 0;
        bgImgs[curImg].style.opacity = 100;
        curImg++;

        if (curImg >= bgImgs.length) {
            curImg = 0;
        }
}, 100000);

function addPoem(poem) {
    const newPoemP = document.createElement("p")
    const newContent = document.createTextNode(poem["name"])
    newPoemP.appendChild(newContent)
    newPoemP.onclick = () => loadPoem(poem)

    poemsContainer.appendChild(newPoemP)
}

function loadPoem(poem) {
    poemTitle.textContent = poem["name"]
    poemContent.textContent = poem["content"]
}

let poems = [
    {
        "name": "Corrientes",
        "content": "¡Ah! Dejarse llevar por el viento,\nel invisible susurro en nuestra piel.\nUn sueño de alzar el vuelo, ser libre.\n\nMás, ¿saben aquellos que pisan tierra firme,\nlo que en el aire descubro y anhelo?\nLa realidad aguarda, implacable y en derroche.\n\nEfímero control en la vasta inmensidad,\nla ilusión de dominar el firmamento,\npero al final, la certeza de mi humanidad.\n\nDesde las alturas, el mundo se ve distinto,\nun pedestal imaginario, un breve respiro,\nmas pronto llega el descenso y el instante extinto.\n\nLa columna de aire se desvanece, el éxtasis cede,\ny la brisa que nos sostenía se retira,\nentonces, conscientes de la gravedad, caemos.\n\nAun así, en cada vuelo encuentro un destello,\nuna chispa de ser, de libertad etérea,\nque me impulsa a buscar lo que en verdad anhelo.\n"
    },
    {
        "name": "Dolor",
        "content": "Se arraiga sigilosa, sin piedad,\ntormento oculto, maldito pesar,\nmi razón se eclipsa, en su maldad,\nnada tiene sentido, todo es penar.\n\nOh, cómo quisiera liberarme,\ndel yugo oscuro que me aprisiona,\nmas de sus cadenas no puedo quebrarme,\nmi corazón sangra, sin razón.\n\nAsí lucharé, con valor y tesón,\ncontra la envidia, enemigo feroz,\nhallaré la luz, mi redención,\nen el amor, la paz, y ser yo en voz."
    },
    {
        "name": "Invierno",
        "content": "Oh, muerte, tú de hermosura vestida,\nreposar en tu tierra húmeda, lecho suave,\ndonde el césped danza sobre la vida,\nescuchar el silencio, poesía que el alma trae.\n\nSin sombras del ayer, sin promesas del mañana, \n\t - en libertad sin censuras,\nolvidar el tiempo, un suspiro eterno,\nperdonar a la vida, ver el mundo desde las alturas,\nen la paz que fluye, frío y eterno sendero."
    },
    {
        "name": "Sevilla",
        "content": "Entre calles que susurran historia,\ndonde el sol abraza con su cálida gloria,\nla vida se despliega como un manto,\nen cada rincón, en cada encanto.\n\nGentes que caminan al compás,\nsus pasos danzan, libres, en solaz.\nEn plazas bulliciosas, la música florece,\nnotas que acarician, el alma enriquece.\n\nGuitarras que susurran secretos al viento,\npalmas que marcan el compás del momento.\nBajo naranjos, en sombras que se estiran,\nla vida se viste de colores que inspiran.\n\nSevilla, joya de encuentros casuales,\ndonde lo cotidiano se viste de especiales.\nEn cada paso, la historia se entreteje,\ny la vida, como un arte, florece.\n\nAsí, entre guitarras y risas en la brisa,\nSevilla canta su canción precisa.\nEn los aconteceres de lo sencillo hallamos,\nla esencia de la vida, donde nos encontramos."
    }
]

poems.forEach(addPoem)
loadPoem(poems[0])