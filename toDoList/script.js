input = document.querySelector(".input");
botonAgregar = document.querySelector(".boton-agregar");
container = document.querySelector(".container");


class Item{
    constructor(nuevaTarea) {
        this.crearDiv(nuevaTarea)
    }
    crearDiv() {
        
        /*crear input*/

        var inputItem = document.createElement("input");
        inputItem.type = "text";
        inputItem.disabled = true;
        inputItem.classList.add("item-input");
        inputItem.value = input.value;
        
        /*crear div*/

        var newDiv = document.createElement("div");
        newDiv.classList.add("item");

        /*boton editar*/

        var botonEditar = document.createElement("button");
        botonEditar.innerHTML = "<i class='fas fa-lock'></i>";
        botonEditar.classList.add("boton-editar");

        /*boton borrar*/

        var botonRemover = document.createElement("button");
        botonRemover.innerHTML = "<i class='fas fa-trash'></i>";
        botonRemover.classList.add("boton-remover");

        
        newDiv.appendChild(inputItem);
        newDiv.appendChild(botonEditar);
        newDiv.appendChild(botonRemover);
        container.appendChild(newDiv);

        
        botonEditar.addEventListener("click", function(){
            if(inputItem.disabled === true){
                inputItem.disabled = false; 
                botonEditar.innerHTML = "<i class='fas fa-lock-open'></i>" ;   
            } else { 
                inputItem.disabled = true; 
                botonEditar.innerHTML = "<i class='fas fa-lock'></i>";
            }
        });

          
        botonRemover.addEventListener("click", function(){
            container.removeChild(newDiv);
        });        
    }
}

function chequearInput(){
    if(input.value !== " "){
        new Item(input.value);
        input.value = " ";
    }  
}

botonAgregar.addEventListener("click", function(){
    chequearInput();
});
