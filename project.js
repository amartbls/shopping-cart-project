    const graphicscardstore = [
        {
            name: "RTX5090" 
            ,brand: "NVIDIARTX"
            ,generation: "RTX50Series" 
            ,price: 1999
            ,image: null
        }
        ,{
            name: "RTX5080"
            ,brand: "NVIDIARTX"
            ,generation: "RTX50Series"
            ,price: 999
            ,image: null
        }
        ,{
            name: "RTX5070TI"
            ,brand: "NVIDIARTX"
            ,generation: "RTX50Series"
            ,price: 749
            ,image: null
        }
        ,{
            name: "RTX5070" 
            ,brand: "NVIDIARTX"
            ,generation: "RTX50Series"
            ,price: 549
            ,image: null
        }
        ,{
            name: "RTX5060TI16GB"
            ,brand: "NVIDIARTX"
            ,generation: "RTX50Series"
            ,price: 429
            ,image: null
        }
        ,{
            name: "RTX5060TI8GB"
            ,brand: "NVIDIARTX"
            ,generation: "RTX50Series"
            ,price: 379
            ,image: null
        }
        ,{
            name: "RTX5060"
            ,brand: "NVIDIARTX"
            ,generation: "RTX50Series"
            ,price: 299
            ,image: null
        }
        ,{
            name: "RTX5050"
            ,brand: "NVIDIARTX"
            ,generation: "RTX50Series"
            ,price: 249
            ,image: null
        }
        ,{
            name: "RTX4060"
            ,brand: "NVIDIARTX"
            ,generation: "RTX40Series"
            ,price: 299
            ,image: null
        }
        ,{
            name: "RTX4060TI8GB"
            ,brand: "NVIDIARTX"
            ,generation: "RTX40Series"
            ,price: 399
            ,image: null
        }
        ,{
            name: "RTX4070"
            ,brand: "NVIDIARTX"
            ,generation: "RTX40Series"
            ,price: 599
            ,image: null
        }
        ,{
            name: "RTX4070TI"
            ,brand: "NVIDIARTX"
            ,generation: "RTX40Series"
            ,price: 799
            ,image: null
        }
        ,{
            name: "RTX4080"
            ,brand: "NVIDIARTX"
            ,generation: "RTX40Series"
            ,price: 999
            ,image: null
        }
        ,{
            name: "RTX4090"
            ,brand: "NVIDIARTX"
            ,generation: "RTX40Series"
            ,price: 1599
            ,image: null
        }
        ,{
            name: "RX9070XT" 
            ,brand: "RADEONRX"
            ,generation: "RX9000Series"
            ,price: 599
            ,image: null
        }
        ,{
            name: "RX9070"
            ,brand: "RADEONRX"
            ,generation: "RX9000Series"
            ,price: 549
            ,image: null
        }
        ,{
            name: "RX9060XT"
            ,brand: "RADEONRX"
            ,generation: "RX9000Series"
            ,price: 349
            ,image: null
        }
        ,{
            name: "RX9060" 
            ,brand: "RADEONRX"
            ,generation: "RX9000Series"
            ,price: 299
            ,image: null
        }
        ,{
            name: "RX9050"
            ,brand: "RADEONRX"
            ,generation: "RX9000Series"
            ,price: 279
            ,image: null
        }
        ,{
            name: "RX7900XTX" 
            ,brand: "RADEONRX"
            ,generation: "RX7000Series"
            ,price: 999
            ,image: null
        }
        ,{
            name: "RX7900XT"
            ,brand: "RADEONRX"
            ,generation: "RX7000Series"
            ,price: 899
            ,image: null
        }
        ,{
            name: "RX7900GRE"
            ,brand: "RADEONRX"
            ,generation: "RX7000Series"
            ,price: 549
            ,image: null
        }
        ,{
            name: "RX7800XT" 
            ,brand: "RADEONRX"
            ,generation: "RX7000Series"
            ,price: 499
            ,image: null
        }
        ,{
            name: "RX7700XT"
            ,brand: "RADEONRX"
            ,generation: "RX7000Series"
            ,price: 449
            ,image: null
        }
        ,{
            name: "RX7600XT" 
            ,brand: "RADEONRX"
            ,generation: "RX7000Series"
            ,price: 329
            ,image: null
        }
        ,{
            name: "RX7600"
            ,brand: "RADEONRX"
            ,generation: "RX7000Series"
            ,price: 269
            ,image: null
        }
        ,{
            name: "B570"
            ,brand: "INTELARC"
            ,generation: "BATTLEMAGE"
            ,price: 219
            ,image: null
        }
        ,{
            name: "B580"
            ,brand: "INTELARC"
            ,generation: "BATTLEMAGE"
            ,price: 249
            ,image: null
        }
    ]
    //nbg: name,brand,generation
        function filterbynbg(parameter, parameter2){
            return graphicscardstore.filter(card=>card[parameter] === parameter2)
    }
        function filterbyprice(minimum, maximum){
            return graphicscardstore.filter(card=>card.price >= minimum && card.price <= maximum )
        }
    cart = []
    function addtocart(itemname){
        cart.push(graphicscardstore.find((card)=>card.name === itemname))
    }
    function removefromcart(itemname){
        cart.splice(cart.indexOf(itemname),1)
    }
    removefromcart("RTX5090")
    function totalcost(cart){
        cost = 0
        i = 0
        while(i+1<=cart.length){
            cost += cart[i].price
            i++
        }
        return cost
    }
function inject(itemname){
    const container = document.querySelector(".container");
    container.insertAdjacentHTML(
        "beforeend",
        '<div class="card">
            <h2 class="itemname">${itemname}</h2>
            <img src="" alt="${itemname}"/>
            <h3 class="generation"></h3>
            <h4 class="brand"></h4>
            <h5 class="price"></h5>
            <button class="+cart">Add to cart<button>
        </div>',
    );
}