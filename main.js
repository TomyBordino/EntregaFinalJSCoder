const db = {
    methods: {
        find: (id) => {
            return db.items.find(item => item.id === id);
        },
        remove: (items) => {
            items.array.forEach(element => {
                const producto = db.methods.find(item.id);
                producto.cantidad = producto.cantidad - item.cantidad;
                
            });
            console.log(db);
        },  
    },

    items : [ 
        {
            id:0,
            titulo: 'Funko Pop',
            precio: 5000,
            cantidad: 10,

        },
        {
            id:1,
            titulo: 'Figura Luffy',
            precio: 20000,
            cantidad: 3,

        },
        {
            id:2,
            titulo: 'Manga One Piece',
            precio: 900,
            cantidad: 12,

        },
        {
            id:3,
            titulo: 'Manga Demon Slayer',
            precio: 950,
            cantidad: 8,

        },
    ]
}


const carritoDeCompras = {
    items: [],
    methods: {
        add: (id,cantidad) => {
            const cartItem = carritoDeCompras.methods.get(id);

            if(cartItem){
                if(carritoDeCompras.methods.inventario(id, cantidad + cartItem.cantidad)){
                    
                }else{
                    alert("No hay inventario suficiente");
                }
                }else{
                carritoDeCompras.items.push({ id, cantidad});
                }
            },
            
        
        remove: (id,cantidad) =>{
            const cartItem = carritoDeCompras.methods.get(id);
            if(cartItem.cantidad - cantidad > 0 ){
                cartItem.cantidad -= cantidad;
            }else{
                carritoDeCompras.items = carritoDeCompras.items.filter(item => item.id != id);
            }
        },
        count: () => {
            return carritoDeCompras.items.reduce((acumulador, item) => acumulador+ item.cantidad , 0);
        },
        get: (id) =>{
            const index = carritoDeCompras.items.findIndex((item) => item.id === id);
            return index > 0 ? carritoDeCompras.items[index] : null;
        },
        getTotal: () => {
            const total = carritoDeCompras.items.reduce((acumulador , item) => {
                const found = db.methods.find(item.id);
                return acumulador + found.precio * item.cantidad;
            }, 0);
            return total;
        },
        inventario: (id,cantidad) =>{
            return db.items.find((item) => item.id === id).cantidad - cantidad >0;
        },
        comprar: () => {
            db.methods.remove(carritoDeCompras.items);
            carritoDeCompras.items = [];
        },

    }
};


renderStore();


//Creamos una Funcion
function renderStore(){
    const html = db.items.map((item ) => {
        return `
            <div class="item">
                <div class="title">${item.titulo}</div>
                <div class="price">${mostrarPrecio(item.precio)}</div>
                <div class="cantidad">${item.cantidad}</div>

                <div class = "actions">
                    <button class = "add" data-id="${item.id
                    }"> Añadir al Carrito</button>
                </div>
            </div>`;
    });

    document.querySelector("#store-container").innerHTML = html.join("");

    document.querySelectorAll('.item .actions .add').forEach(button =>{
        button.addEventListener('click' , e => {
            const id = parseInt(button.getAttribute('data-id'));
            const item = db.methods.find(id);

            if(item && item.cantidad -1 > 0){
                carritoDeCompras.methods.add(id,1);
                console.log(carritoDeCompras);
                renderCarritoDeCompras();

            }
            else{
                console.log("Ya no Hay Inventario");
            }
        });
    });
};


function renderCarritoDeCompras(){
    
}

function mostrarPrecio(n){
    //Utilizamos Una Api
    return new Intl.NumberFormat('en-US',{
        maximumSignificantDigits:2,
        style: 'currency',
        currency: 'USD'
    }).format(n);
}

