import corrientes from './poems/corrientes.json' assert { type: 'json' };
import dolor from './poems/dolor.json' assert { type: 'json' };
import invierno from './poems/invierno.json' assert { type: 'json' };
import sevilla from './poems/sevilla.json' assert { type: 'json' };


const poemsContainer = document.getElementById("poem-container");
const poemTitle = document.getElementById("poem-title");
const poemContent = document.getElementById("poem-content");

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

addPoem(corrientes)
addPoem(dolor)
addPoem(invierno)
addPoem(sevilla)

loadPoem(corrientes)