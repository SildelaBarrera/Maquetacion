let carrito = [];  

let precio = 0;                

jQuery(() => {

    $("#prenda1").on("click", ()=>{
        let prenda = {
            nombre: $(".c1").find("#card-title")[0].innerHTML,
            precio: $(".c1").find(".price")[0].innerHTML,
        } 
        carrito.push(prenda);    
    });
    $("#prenda2").on("click", ()=>{
        let prenda = {
            nombre: $(".c2").find(".card-title")[0].innerHTML,
            precio: $(".c2").find(".price")[0].innerHTML,
        } 
        carrito.push(prenda);
    });
    $("#prenda3").on("click", ()=>{
        let prenda = {
            nombre: $(".c3").find(".card-title")[0].innerHTML,
            precio: $(".c3").find(".price")[0].innerHTML,
        } 
        carrito.push(prenda);
    });
    $("#prenda4").on("click", ()=>{
        let prenda = {
            nombre: $(".c4").find(".card-title")[0].innerHTML,
            precio: $(".c4").find(".price")[0].innerHTML,
        } 
        carrito.push(prenda);
    });
    $("#prenda5").on("click", ()=>{
        let prenda = {
            nombre: $(".c5").find(".card-title")[0].innerHTML,
            precio: $(".c5").find(".price")[0].innerHTML,
        } 
        carrito.push(prenda);
    });
    $("#prenda6").on("click", ()=>{
        let prenda = {
            nombre: $(".c6").find(".card-title")[0].innerHTML,
            precio: $(".c6").find(".price")[0].innerHTML,
        } 
        carrito.push(prenda);
    });
    $("#prenda7").on("click", ()=>{
        let prenda = {
            nombre: $(".c7").find(".card-title")[0].innerHTML,
            precio: $(".c7").find(".price")[0].innerHTML,
        } 
        carrito.push(prenda);
    });
    $("#prenda8").on("click", ()=>{
        let prenda = {
            nombre: $(".c8").find(".card-title")[0].innerHTML,
            precio: $(".c8").find(".price")[0].innerHTML,
        } 
        carrito.push(prenda);
    });

    $("#carrito").on("click", ()=>{   
        precio = 0;
        for(let i=0; i < carrito.length; i++){
            precio += parseInt(carrito[i].precio);
            $(".modal-body").append("<p>" + carrito[i].nombre + " " + carrito[i].precio + "</p>");
         }
         $(".total").append("<p>" + "TOTAL COMPRA" + precio + "</p>");
    });
    
    $('#modalCarrito').on('hide.bs.modal', function () {
        $(".modal-body").empty();
        $(".total").empty();

    })
        

})



