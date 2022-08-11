

const URL="http://localhost:8080/api/character";
const URL2="http://localhost:8080/api/consola";
const URL3="http://localhost:8080/api/game";

window.onload = () =>{
    init()
}

const init = async () =>{
    const Character = await getCharacter();
    mappedCharacter(Character);
    const Consola = await getConsola();
    mappedConsola(Consola);
    const Game = await getGame();
    mappedGame(Game)
}

const getCharacter = async () =>{
    const apiCharacter = await fetch(URL);
    apiCharacterJson = apiCharacter.json()
    return apiCharacterJson;
}

const getConsola = async () =>{
    const apiConsola = await fetch(URL2);
    apiConsolaJson = apiConsola.json();
    return apiConsolaJson;
}
const getGame = async () =>{
    const apiGame = await fetch(URL3)
    apiGameJson = apiGame.json();
    return apiGameJson;
}

const mappedCharacter = (characters) =>{
     characters.data.character.map((character)=>{
       return printCharacter({
           nombre:character.name,
           habilidad: character.skill,
           imagen:character.images,
           potencia:character.power
       })
     })
}
const mappedConsola = (consolas) =>{
consolas.data.consolas.map((consola)=>{
     return printConsola({
         nombre:consola.name,
         descripcion:consola.description,
         imagen: consola.images
     })
})
}
const mappedGame = (games) =>{
    games.data.game.map((game)=>{
         return printGame({
             nombre: game.name,
             imagen: game.images
         })
    })
}


const printCharacter = (character) =>{
    const mainContainer = document.querySelector("#mainContainer")
    mainContainer.innerHTML += `
    <div>
    <h2> Nombre: ${character.nombre} </h2>
    <h3>Habilidades: ${character.habilidad} </h3>
    <img src =${character.imagen} alt=${character.nombre}/>
    <p> ${character.potencia} </p>

    </div>
    
    `
}
const printConsola = (consola) =>{

    mainContainer.innerHTML += `
    <div>
    <h2>Consola:${consola.nombre} </h2>
    <p>${consola.descripcion} </p>
    <img src=${consola.imagen} alt=${consola.nombre}/>
    
    </div>
    
    `
}
const printGame = (game) =>{

    mainContainer.innerHTML += `
    <div>
    <h2> Juego:${game.nombre} </h2>   
    <img src=${game.imagen} alt=${game.nombre}/>
    
    </div>
    
    `
}