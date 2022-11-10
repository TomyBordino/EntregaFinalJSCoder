let container = document.getElementById("container");
let tituloIndex = document.getElementById("tituloIndex");
let containerRondas = document.getElementById("containerRondas");

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


//funcion para intentar crear un intervalo
function contadorRonda(i){
	i= i+1;
	return i
}

function rondas(seleccion1, seleccion2, i){
	peleaActiva = true

	while (peleaActiva != false) {



		const divCard = document.createElement("div");
		const divContent = `
		<div class = "titulo-rondas mb-5 mt-5">
		<h2 class = "card-title">Ronda Numero ${i}</h1>
		</div>
		`;
		divCard.innerHTML = divContent;
		containerRondas.append(divCard);


		i++
		quienAtaca = random()


		
		if (quienAtaca >= 51) {	
			
			if (esquivar(seleccion2) === true) {

				const divCard = document.createElement("div");
				const divContent = `
				<div class = "cajaRondas shadow-lg">
				<div class = "card-ataco ">
				<img class= "mt-4" src = "${seleccion1.imgAtaque}"> 
				<h5 class = "card-title">${seleccion1.nombre}</h5>
				<h5 class = "card-text">Ataca con ${seleccion1.poder}</p>
	
				</div>

                <div class = "card-esquivo ">
                <img class= "mt-4" src = "${seleccion2.imgEsquivando}"> 
				<h5 class = "card-title">${seleccion2.nombre}</h5>
                <h5 class = "card-text">Esquiva el ataque</p>
				<h5 class = "card-text">Puntos de Vida Restantes ${seleccion2.vida}</h5>
				</div>
				</div>
                `
				divCard.innerHTML = divContent;
				containerRondas.append(divCard);
			} else {
				dañoInflingido = atacar();
				seleccion2.vida -= dañoInflingido;


				const divCard = document.createElement("div");
				const divContent = `
				<div class = "cajaRondas shadow-lg">

				<div class = "card-ataco ">
				<img class= "mt-4" src = "${seleccion1.imgAtaque}"> 
				<h5 class = "card-title">${seleccion1.nombre}</h5>
				<h5 class = "card-text">Ataca con ${seleccion1.poder}</p>
	
				</div>

                <div class = "card-herido ">
                <img class= "mt-4" src = "${seleccion2.imgHerido}"> 
				<h5 class = "card-title">${seleccion2.nombre}</h5>
                <h5 class = "card-text">Recibe Daño</p>
				<h5 class = "card-text">Puntos de Vida Restantes ${seleccion2.vida}</h5>
				</div>
				</div>
                `
				divCard.innerHTML = divContent;
				containerRondas.append(divCard);
			}


		} else {


			if (esquivar(seleccion1) === true) {

				const divCard = document.createElement("div");
				const divContent = `
				<div class = "cajaRondas shadow-lg">

				<div class = "card-ataco ">
				<img class= "mt-4" src = "${seleccion2.imgAtaque}"> 
				<h5 class = "card-title">${seleccion2.nombre}</h5>
				<h5 class = "card-text">Ataca con ${seleccion2.poder}</p>
				</div>

                <div class = "card-esquivo ">
                <img class= "mt-4" src = "${seleccion1.imgEsquivando}"> 
				<h5 class = "card-title">${seleccion1.nombre}</h5>
                <h5 class = "card-text">Esquiva el ataque</p>
				<h5 class = "card-text">Puntos de Vida Restantes ${seleccion1.vida}</h5>
				</div>
				</div>
                `
				divCard.innerHTML = divContent;
				containerRondas.append(divCard);
			} else {
				dañoInflingido = atacar();
				seleccion1.vida -= dañoInflingido;


				const divCard = document.createElement("div");
				const divContent = `
				<div class = "cajaRondas shadow-lg">

				<div class = "card-ataco ">
				<img class= "mt-4" src = "${seleccion2.imgAtaque}"> 
				<h5 class = "card-title">${seleccion2.nombre}</h5>
				<h5 class = "card-text">Ataca con ${seleccion2.poder}</p>
				</div>
				
                <div class = "card-herido ">
                <img class= "mt-4" src = "${seleccion1.imgHerido}"> 
				<h5 class = "card-title">${seleccion1.nombre}</h5>
                <h5 class = "card-text">Recibe Daño</p>
				<h5 class = "card-text">Puntos de Vida Restantes ${seleccion1.vida}</h5>
				</div>
				</div>
                `
				divCard.innerHTML = divContent;
				containerRondas.append(divCard);
			}
		}

		if (seleccion1.vida <= 0) {

			peleaActiva = false;

			localStorage.setItem("ultimoGanador", JSON.stringify({ nombre: seleccion2.nombre, poder: seleccion2.poder, vida: seleccion2.vida, habilidadEsquivar: seleccion2.habilidadEsquivar, imagen: seleccion2.img, imagenAtaque: seleccion2.imgAtaque, imagenHerido: seleccion2.imgHerido, imagenEsquivando: seleccion2.imgEsquivando }))
			let objGanador = localStorage.getItem("ultimoGanador")
			let objGanadorJson = JSON.parse(objGanador)

			console.log(objGanador)

			console.log(objGanadorJson)

			const divCard = document.createElement("div");

			const divContent = `

			<div class = "card-principal mt-5">
			<div class = "card-body">

			<h3 class = "card-title mt-5">Felicidades El Ganador Es</h3>
			<img class="imagenes" src = "${seleccion2.img}">
			<h5 class = "card-title mb-5">${seleccion2.nombre}</h5>

			</div>
			</div>
			`;
			divCard.innerHTML = divContent;
			containerRondas.append(divCard);


		} else if (seleccion2.vida <= 0) {

			peleaActiva = false;

			localStorage.setItem("ultimoGanador", JSON.stringify({ nombre: seleccion1.nombre, poder: seleccion1.poder, vida: seleccion1.vida, habilidadEsquivar: seleccion1.habilidadEsquivar, imagen: seleccion1.img, imagenAtaque: seleccion1.imgAtaque, imagenHerido: seleccion1.imgHerido, imagenEsquivando: seleccion1.imgEsquivando }))
			let objGanador = localStorage.getItem("ultimoGanador")
			let objGanadorJson = JSON.parse(objGanador)

			console.log(objGanador)

			console.log(objGanadorJson)


			const divCard = document.createElement("div");

			const divContent = `
			<div class = "card-principal mt-5">
			<div class = "card-body">

			<h3 class = "card-title mt-5">Felicidades El Ganador Es</h3>

			<img class="imagenes" src = "${seleccion1.img}">
			<h5 class = "card-title mb-5">${seleccion1.nombre}</h5>

			</div>
			</div>
			`;
			divCard.innerHTML = divContent;
			containerRondas.append(divCard);
		}


	}
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



//Creamos un Array con nuestros Personajes
let listaPersonajesjson = [luffy, goku, vegeta, naruto, meliodas, saitama, levi, gojo];


 
listaPersonajesJson = []
const pedirArray = async () => {
	const resp = await fetch("datos/personajes.json");
	const productos = await resp.json();
	for (let personaje of productos) {
	  let personajeNuevo = new Personaje(
		personaje.id,
		personaje.nombre,
		personaje.poder,
		personaje.vida,
		personaje.habilidadEsquivar,
		personaje.img,
		personaje.imgAtaque,
		personaje.imgHerido,
		personaje.imgEsquivando
	  );
	  listaPersonajesJson.push(personajeNuevo);

	}
	console.log("Mostramos el Array de Personajes Json")
	console.log(listaPersonajesJson)
  };

  pedirArray()

const divCard = document.createElement("div");

const divContent = `
<div class = "titulo-principal caja-titulo">
<h1 class = "card-title">Bienvenido al Simulador de Peleas</h1>
<p class = "texto-titulo mt-5">En este simulador de peleas usted podra seleccionar dos personajes de anime con los que el sistema va a simular una pelea entre ellos y te devolvera el ganador del enfrentamiento.</p>
<p class = "texto-titulo mt-5">"Para la seleccion de Personajes tendra que dar click sobre la imagen del personaje a elegir"</p>
<p class = "texto-titulo mt-5">"Buena suerte en tu eleccion"</p>

</div>

<div class= "titulo-principal">
<h2 class = "h2-titulo mt-5"> Porfavor Selecciona Ambos luchadores para el encuentro</h2>
</div>
`;
divCard.innerHTML = divContent;
tituloIndex.append(divCard);




listaPersonajesjson.forEach((item) => {
	const divCard = document.createElement("div");

	const divContent = `
    <div class = "card-principal card shadow-lg ms-1">
	<div class = "card-body">
	<img id='${item.id}' class="imagenes card-img-top" src = "${item.img}">
	</div>

	<div class = "face back">
    <h5 class = "card-title">${item.nombre}</h5>
    <p class = "card-text">Ataque: ${item.poder}</p>
    <p class = "card-text">Vida: ${item.vida}</p>
    <p class = "card-text mb-5">Probabilidad de Esquivar: ${item.habilidadEsquivar}%</p>
    </div>
	</div>
    `;
	divCard.innerHTML = divContent;
	container.append(divCard);
});




function pelear(seleccion1, seleccion2) {



	let i = 1
	rondas(seleccion1,seleccion2,i)


}

let seleccion1 = null
let seleccion2 = null


const imagenes = document.querySelectorAll(".imagenes");
imagenes.forEach((imagen) => {
	imagen.addEventListener("click", (e) => {
		const id = parseInt(e.target.id);
		const personaje = listaPersonajesjson.find((personaje) => personaje.id === id);

		if (seleccion1 === null) {
			//Utilizamos Switch Alert
			Swal.fire({
				title: 'Estas Seleccionando Tu personaje',
				text: 'Estas seguro de tu seleccion de Personaje?',
				showClass: {
					popup: 'animate__animated animate__fadeInDown'
				  },
				  hideClass: {
					popup: 'animate__animated animate__fadeOutUp'
				  },
				showDenyButton: true,

				confirmButtonText: 'Guardar Seleccion',
				denyButtonText: `Deshacer Seleccion`,
				
			  }).then((result) => {
				if (result.isConfirmed) {
					seleccion1 = personaje;


					Swal.fire({
						title: 'Felicidades',
						text: 'Tu seleccion es ' + `${seleccion1.nombre} `,
						imageUrl: `${seleccion1.img} `,
						imageWidth: 400,
						imageHeight: 200,
						imageAlt: 'Imagen Personaje Usuario',
						timer: 4000,
				  		timerProgressBar: true,
					  })

				} else if (result.isDenied) {
				  Swal.fire({
					title:'El personaje no fue seleccionado',
					timer: 4000,
					timerProgressBar: true,
				})
				  
				}
			  })


		} else if (seleccion2 === null) {

			Swal.fire({
				title: 'Estas Seleccionando Al Personaje Enemigo',
				text: 'Estas seguro de la seleccion del Personaje?',
				showClass: {
					popup: 'animate__animated animate__fadeInDown'
				  },
				  hideClass: {
					popup: 'animate__animated animate__fadeOutUp'
				  },
				showDenyButton: true,

				confirmButtonText: 'Guardar Seleccion',
				denyButtonText: `Deshacer Seleccion`,
				
			  }).then((result) => {
				if (result.isConfirmed) {
					seleccion2 = personaje;


					Swal.fire({
						title: 'Felicidades',
						text: 'Tu seleccion es ' + `${seleccion2.nombre} `,
						imageUrl: `${seleccion2.img} `,
						imageWidth: 400,
						imageHeight: 200,
						imageAlt: 'Imagen Enemigo',
						timer: 4000,
				  		timerProgressBar: true,
					  })

					  pelear(seleccion1,seleccion2)

				} else if (result.isDenied) {
					Swal.fire({
						title:'El personaje no fue seleccionado',
						timer: 4000,
						timerProgressBar: true,
					})
				}
			  })
			  

		} else {

			Swal.fire({
				icon: 'info',
				title: 'No es Posible seleccionar otro personaje',
				text: 'La pelea ya se esta ejecutando',
				showClass: {
					popup: 'animate__animated animate__fadeInDown'
				  },
				  hideClass: {
					popup: 'animate__animated animate__fadeOutUp'
				  },

				  timer: 4000,
				  timerProgressBar: true,

				})

		}
	});
});


const btn = document.createElement("button");
btn.textContent = "sorpresa";


