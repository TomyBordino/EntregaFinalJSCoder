let container = document.getElementById("container");
let tituloIndex = document.getElementById("tituloIndex");


//Creamos La Clase Personaje
function Personaje(id, nombre, poder, vida, habilidadEsquivar, img, imgAtaque, imgHerido, imgEsquivando) {
	this.id = id;
	this.nombre = nombre;
	this.poder = poder;
	this.vida = vida;
	this.habilidadEsquivar = habilidadEsquivar;
	this.img = img;
	this.imgAtaque = imgAtaque;
	this.imgHerido = imgHerido;
	this.imgEsquivando = imgEsquivando;
}


//Funcion para devolver un numero random del 1 al 100
function random() {
	let numeroRandom = Math.floor(Math.random() * 100);
	return numeroRandom;
}


//Funcion para devolver si el Personaje esquiva o no el ataque del rival
function esquivar(Personaje) {
	//Probabilidad de Esquivar
	if (random() <= Personaje.habilidadEsquivar) {
		return true;
	} else {
		return false;
	}
}


//Funcion para calcular el daño del ataque
function atacar() {
	//Cargar Daño
	dañoAtaque = random() * 5;
	return dañoAtaque;
}


//Instanciamos los Personajes
let luffy = new Personaje(
	1,
	"Luffy",
	"Shotgun Gattlin",
	1500,
	30,
	"./imagenes/luffyJS.jpg",
	"/imagenes/luffyAtacandoJS.jpg",
	"/imagenes/luffyHeridoJS.gif",
	"/imagenes/luffyEsquivando.gif"
);
console.log(luffy.nombre);

let goku = new Personaje(
	2,
	"Goku",
	"Kamehameha",
	1700,
	40,
	"./imagenes/goku2JS.jpg",
	"/imagenes/gokuAtaqueJS.jpg",
	"/imagenes/gokuHeridoJS.jpg",
	"/imagenes/gokuEsquivandoJS.jpg"
);
console.log(goku.nombre);

let vegeta = new Personaje(
	3,
	"Vegeta",
	"Big Bang",
	1700,
	38,
	"/imagenes/vegetaJS.jpg",
	"/imagenes/vegetaAtacandoJS.jpg",
	"/imagenes/vegeteHeridoJS.jpg",
	"/imagenes/vegetaEsquivandoJS.jpg"
);
console.log(vegeta.nombre);

let naruto = new Personaje(
	4,
	"Naruto",
	"Rasengan",
	1000,
	20,
	"/imagenes/narutoJS.jpg",
	"/imagenes/narutoAtacandoJS.gif",
	"/imagenes/narutoHeridoJS.jpg",
	"/imagenes/narutoEsquivandoJS.jpg"
);
console.log(naruto.nombre);

let meliodas = new Personaje(
	5,
	"Meliodas",
	"Contra-Ataque Total",
	1260,
	32,
	"/imagenes/meliodasJS.jpeg",
	"/imagenes/meliodasAtaqueJS.jpg",
	"/imagenes/meliodasHeridoJS.jpg",
	"/imagenes/meliodasEsquivandoJS.jpg"
);
console.log(meliodas.nombre);

let saitama = new Personaje(
	6,
	"Saitama",
	"Golpe Simple",
	1000,
	30,
	"/imagenes/saitamaJS.jpg",
	"/imagenes/saitamaAtaqueJS.jpg",
	"/imagenes/saitamaHeridoJS.gif",
	"/imagenes/saitamaEsquivandoJS.jpg"
);
console.log(saitama.nombre);

let levi = new Personaje(
	7,
	"Levi",
	"Ataque Tridimensional",
	800,
	18,
	"/imagenes/leviJS.jpg",
	"/imagenes/leviAtacandoJS.jpg",
	"/imagenes/leviHeridoJS.jpg",
	"/imagenes/leviEsquivandoJS.jpg"
);
console.log(levi.nombre);

let gojo = new Personaje(
	8,
	"Gojo",
	"Imaginaria Purpura",
	1200,
	32,
	"/imagenes/gojoJS.jpg",
	"/imagenes/gojoAtacandoJS.jpg",
	"/imagenes/gojoHeridoJS.jpg",
	"/imagenes/gojoEsquivandoJS.jpg"
);
console.log(gojo.nombre)


//Creamos un Array con nuestros Personajes
let listaPersonajes = [luffy, goku, vegeta, naruto, meliodas, saitama, levi, gojo];

//alert("Toda la Informacion se mostrara por Consola  ");

const divCard = document.createElement("div");

const divContent = `
<div class = "titulo-principal">
<h1 class = "card-title">Selecciona Un Personaje</h1>
</div>
`;
divCard.innerHTML = divContent;
tituloIndex.append(divCard);

listaPersonajes.forEach((item) => {
	const divCard = document.createElement("div");

	const divContent = `
    <div class = "card-principal">
    <h5 class = "card-title">${item.nombre}</h5>
    <img id='${item.id}' class="imagenes" src = "${item.img}">
    <p class = "card-text">Ataque: ${item.poder}</p>
    <p class = "card-text">Vida: ${item.vida}</p>
    <p class = "card-text">Probabilidad de Esquivar: ${item.habilidadEsquivar}</p>
    </div>
    `;
	divCard.innerHTML = divContent;
	container.append(divCard);
});




function pelear(seleccion1, seleccion2) {



	let i = 1
	peleaActiva = true

	while (peleaActiva != false) {

		console.log("------------")
		console.log("Ronda " + i)


		const divCard = document.createElement("div");
		const divContent = `
		<div class = "titulo-rondas">
		<h2 class = "card-title">Ronda Numero ${i}</h1>
		</div>
		`;
		divCard.innerHTML = divContent;
		container.append(divCard);


		i++
		quienAtaca = random()

		if (quienAtaca >= 51) {
			console.log(seleccion1.nombre + " Ataca a " + seleccion2.nombre + " Con " + seleccion1.poder)
			const divCard = document.createElement("div");
			const divContent = `
			<div class = "card-ataco">
			<p>-----------------------------</p>
			<img src = "${seleccion1.imgAtaque}"> 
			<h5 class = "card-title">${seleccion1.nombre}</h5>
			<h5 class = "card-text">Ataca con ${seleccion1.poder}</p>

			</div>
			`
			divCard.innerHTML = divContent;
			container.append(divCard);
			if (esquivar(seleccion2) === true) {
				console.log(seleccion2.nombre + " Esquiva el Ataque")
				const divCard = document.createElement("div");
				const divContent = `
                <div class = "card-esquivo">
                <img src = "${seleccion2.imgEsquivando}"> 
				<h5 class = "card-title">${seleccion2.nombre}</h5>
                <h5 class = "card-text">Esquiva el ataque</p>
				<h5 class = "card-text">Puntos de Vida Restantes ${seleccion2.vida}</h5>
				<p>-----------------------------</p>
				</div>
                `
				divCard.innerHTML = divContent;
				container.append(divCard);
			} else {
				dañoInflingido = atacar();
				seleccion2.vida -= dañoInflingido;
				console.log(seleccion2.nombre + " Recibe " + dañoInflingido + " Puntos de Daño ")

				const divCard = document.createElement("div");
				const divContent = `
                <div class = "card-herido">
                <img src = "${seleccion2.imgHerido}"> 
				<h5 class = "card-title">${seleccion2.nombre}</h5>
                <h5 class = "card-text">Recibe Daño</p>
				<h5 class = "card-text">Puntos de Vida Restantes ${seleccion2.vida}</h5>
				<p>-----------------------------</p>
				</div>
                `
				divCard.innerHTML = divContent;
				container.append(divCard);
			}


		} else {
			console.log(seleccion2.nombre + " Ataca a " + seleccion1.nombre + " Con " + seleccion2.poder)
			const divCard = document.createElement("div");
			const divContent = `
			<div class = "card-ataco">
			<p>-----------------------------</p>
			<img src = "${seleccion2.imgAtaque}"> 
			<h5 class = "card-title">${seleccion2.nombre}</h5>
			<h5 class = "card-text">Ataca con ${seleccion2.poder}</p>
			</div>
			`
			divCard.innerHTML = divContent;
			container.append(divCard);
			if (esquivar(seleccion1) === true) {
				console.log(seleccion1.nombre + " Esquiva el Ataque")
				const divCard = document.createElement("div");
				const divContent = `
                <div class = "card-esquivo">
                <img src = "${seleccion1.imgEsquivando}"> 
				<h5 class = "card-title">${seleccion1.nombre}</h5>
                <h5 class = "card-text">Esquiva el ataque</p>
				<h5 class = "card-text">Puntos de Vida Restantes ${seleccion1.vida}</h5>
				<p>-----------------------------</p>
				</div>
                `
				divCard.innerHTML = divContent;
				container.append(divCard);
			} else {
				dañoInflingido = atacar();
				seleccion1.vida -= dañoInflingido;
				console.log(seleccion1.nombre + " Recibe " + dañoInflingido + " Puntos de Daño ")

				const divCard = document.createElement("div");
				const divContent = `
                <div class = "card-herido">
                <img src = "${seleccion1.imgHerido}"> 
				<h5 class = "card-title">${seleccion1.nombre}</h5>
                <h5 class = "card-text">Recibe Daño</p>
				<h5 class = "card-text">Puntos de Vida Restantes ${seleccion1.vida}</h5>
				<p>-----------------------------</p>
				</div>
                `
				divCard.innerHTML = divContent;
				container.append(divCard);
			}
		}

		if (seleccion1.vida <= 0) {
			console.log("------------")
			console.log(seleccion2.nombre + " Es el Ganador")
			peleaActiva = false;

			localStorage.setItem("ultimoGanador", JSON.stringify({ nombre: seleccion2.nombre, poder: seleccion2.poder, vida: seleccion2.vida, habilidadEsquivar: seleccion2.habilidadEsquivar, imagen: seleccion2.img, imagenAtaque: seleccion2.imgAtaque, imagenHerido: seleccion2.imgHerido, imagenEsquivando: seleccion2.imgEsquivando }))
			let objGanador = localStorage.getItem("ultimoGanador")
			let objGanadorJson = JSON.parse(objGanador)

			console.log(objGanador)

			console.log(objGanadorJson)

			const divCard = document.createElement("div");

			const divContent = `
			<div class = "card-principal">

			<p>**********************</p>
			<h3 class = "card-title">Felicidades El Ganador Es</h3>
			<h5 class = "card-title">${seleccion2.nombre}</h5>
			<img class="imagenes" src = "${seleccion2.img}">
			<p>**********************</p>
			</div>
			`;
			divCard.innerHTML = divContent;
			container.append(divCard);


		} else if (seleccion2.vida <= 0) {
			console.log("------------")
			console.log(seleccion1.nombre + " Es el Ganador")
			peleaActiva = false;

			localStorage.setItem("ultimoGanador", JSON.stringify({ nombre: seleccion1.nombre, poder: seleccion1.poder, vida: seleccion1.vida, habilidadEsquivar: seleccion1.habilidadEsquivar, imagen: seleccion1.img, imagenAtaque: seleccion1.imgAtaque, imagenHerido: seleccion1.imgHerido, imagenEsquivando: seleccion1.imgEsquivando }))
			let objGanador = localStorage.getItem("ultimoGanador")
			let objGanadorJson = JSON.parse(objGanador)

			console.log(objGanador)

			console.log(objGanadorJson)


			const divCard = document.createElement("div");

			const divContent = `
			<div class = "card-principal">

			<p>**********************</p>
			<h3 class = "card-title">Felicidades El Ganador Es</h3>
			<h5 class = "card-title">${seleccion1.nombre}</h5>
			<img class="imagenes" src = "${seleccion1.img}">
			<p>**********************</p>
			</div>
			`;
			divCard.innerHTML = divContent;
			container.append(divCard);
		}
		console.log("*****")
		console.log(seleccion1.nombre + " Tiene " + seleccion1.vida + " Puntos de vida")
		console.log(seleccion2.nombre + " Tiene " + seleccion2.vida + " Puntos de vida")

	}
}

let seleccion1 = null
let seleccion2 = null


const imagenes = document.querySelectorAll(".imagenes");
imagenes.forEach((imagen) => {
	imagen.addEventListener("click", (e) => {
		const id = parseInt(e.target.id);
		const personaje = listaPersonajes.find((personaje) => personaje.id === id);

		if (seleccion1 === null) {
			seleccion1 = personaje;
			console.log(seleccion1.nombre)

			//Preguntar Como modificar un DOM al momento de ejecutar un click de un Evento
			/*const divContent = `
			<div class = "titulo-principal">
			<h1 class = "card-title">Selecciona Otro Personaje</h1>
			</div>
			`;
			divCard.innerHTML = divContent;
			container.append(divCard);*/


		} else if (seleccion2 === null) {
			seleccion2 = personaje
			console.log(seleccion2.nombre)
			pelear(seleccion1, seleccion2)

		} else {
			console.log("Ya selecciono sus personajes")
		}
	});
});


const btn = document.createElement("button");
btn.textContent = "sorpresa";

console.log(listaPersonajes);
