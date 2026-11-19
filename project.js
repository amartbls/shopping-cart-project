    const graphicscardstore = [
        {
            name: "RTX5090" 
            ,brand: "NVIDIARTX"
            ,generation: "RTX50Series" 
            ,price: 1999
            ,image: "img/5090.jpg"
        }
        ,{
            name: "RTX5080"
            ,brand: "NVIDIARTX"
            ,generation: "RTX50Series"
            ,price: 999
            ,image: "img/5080.jpg"
        }
        ,{
            name: "RTX5070TI"
            ,brand: "NVIDIARTX"
            ,generation: "RTX50Series"
            ,price: 749
            ,image: "img/5070ti.jpg"
        }
        ,{
            name: "RTX5070" 
            ,brand: "NVIDIARTX"
            ,generation: "RTX50Series"
            ,price: 549
            ,image: "img/5070.jpg"
        }
        ,{
            name: "RTX5060TI16GB"
            ,brand: "NVIDIARTX"
            ,generation: "RTX50Series"
            ,price: 429
            ,image: "img/5060ti16gb.jpg"
        }
        ,{
            name: "RTX5060TI8GB"
            ,brand: "NVIDIARTX"
            ,generation: "RTX50Series"
            ,price: 379
            ,image: "img/5060ti8gb.jpg"
        }
        ,{
            name: "RTX5060"
            ,brand: "NVIDIARTX"
            ,generation: "RTX50Series"
            ,price: 299
            ,image: "img/5060.jpg"
        }
        ,{
            name: "RTX5050"
            ,brand: "NVIDIARTX"
            ,generation: "RTX50Series"
            ,price: 249
            ,image: "img/5050.jpg"
        }
        ,{
            name: "RTX4060"
            ,brand: "NVIDIARTX"
            ,generation: "RTX40Series"
            ,price: 299
            ,image: "img/4060.jpg"
        }
        ,{
            name: "RTX4060TI8GB"
            ,brand: "NVIDIARTX"
            ,generation: "RTX40Series"
            ,price: 399
            ,image: "img/4060ti8gb.jpg"
        }
        ,{
            name: "RTX4060TI16GB"
            ,brand: "NVIDIARTX"
            ,generation: "RTX40Series"
            ,price: 499
            ,image: "img/4060ti16gb.jpg"
        }
        ,{
            name: "RTX4070"
            ,brand: "NVIDIARTX"
            ,generation: "RTX40Series"
            ,price: 599
            ,image: "img/4070.jpg"
        }
        ,{
            name: "RTX4070TI"
            ,brand: "NVIDIARTX"
            ,generation: "RTX40Series"
            ,price: 799
            ,image: "img/4070ti.jpg"
        }
        ,{
            name: "RTX4080"
            ,brand: "NVIDIARTX"
            ,generation: "RTX40Series"
            ,price: 999
            ,image: "img/4080.jpg"
        }
        ,{
            name: "RTX4090"
            ,brand: "NVIDIARTX"
            ,generation: "RTX40Series"
            ,price: 1599
            ,image: "img/4090.jpg"
        }
        ,{
            name: "RX9070XT" 
            ,brand: "RADEONRX"
            ,generation: "RX9000Series"
            ,price: 599
            ,image: "img/9070xt.jpg"
        }
        ,{
            name: "RX9070"
            ,brand: "RADEONRX"
            ,generation: "RX9000Series"
            ,price: 549
            ,image: "img/9070.jpg"
        }
        ,{
            name: "RX9060XT"
            ,brand: "RADEONRX"
            ,generation: "RX9000Series"
            ,price: 349
            ,image: "img/9060xt.jpg"
        }
        ,{
            name: "RX9050"
            ,brand: "RADEONRX"
            ,generation: "RX9000Series"
            ,price: 279
            ,image: "img/9050.jpg"
        }
        ,{
            name: "RX7900XTX" 
            ,brand: "RADEONRX"
            ,generation: "RX7000Series"
            ,price: 999
            ,image: "img/7900xtx.jpg"
        }
        ,{
            name: "RX7900XT"
            ,brand: "RADEONRX"
            ,generation: "RX7000Series"
            ,price: 899
            ,image: "img/7900xt.jpg"
        }
        ,{
            name: "RX7900GRE"
            ,brand: "RADEONRX"
            ,generation: "RX7000Series"
            ,price: 549
            ,image: "img/7900gre.jpg"
        }
        ,{
            name: "RX7800XT" 
            ,brand: "RADEONRX"
            ,generation: "RX7000Series"
            ,price: 499
            ,image: "img/7800xt.jpg"
        }
        ,{
            name: "RX7700XT"
            ,brand: "RADEONRX"
            ,generation: "RX7000Series"
            ,price: 449
            ,image: "img/7700xt.jpg"
        }
        ,{
            name: "RX7600XT" 
            ,brand: "RADEONRX"
            ,generation: "RX7000Series"
            ,price: 329
            ,image: "img/7600xt.jpg"
        }
        ,{
            name: "RX7600"
            ,brand: "RADEONRX"
            ,generation: "RX7000Series"
            ,price: 269
            ,image: "img/7600.jpg"
        }
        ,{
            name: "B570"
            ,brand: "INTELARC"
            ,generation: "BATTLEMAGE"
            ,price: 219
            ,image: "img/b570.jpg"
        }
        ,{
            name: "B580"
            ,brand: "INTELARC"
            ,generation: "BATTLEMAGE"
            ,price: 249
            ,image: "img/b580.jpg"
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
    let index = graphicscardstore.findIndex(graphicscard => graphicscard.name === itemname)
    container.insertAdjacentHTML(
        "beforeend",
        `<div class="Card">
            <h2 class="itemname" data-item="${itemname}">${itemname}</h2>
            <h3 class="price">$ ${graphicscardstore[index].price}</h3>
            <img src="${graphicscardstore[index].image}" alt="${itemname}"/>
            <h4 class="brand">${graphicscardstore[index].brand}</h4>
            <h5 class="generation">${graphicscardstore[index].generation}</h5>
            <button class="+cart">Add to Cart</button>
        </div>`,
    );
}
for(i=0; i<=graphicscardstore.length; i++){
    inject(graphicscardstore[i].name)
}
const cartaddbutton = document.querySelectorAll(".+cart")
const Cards = document.querySelectorAll(".Card")
const filters = document.querySelectorAll(".filter")
filters.forEach(filter => {
filter.addEventlistener("click", ()=>{
    const category = filter.dataset.filter;
    Cards.forEach(Card => {
        if(category === "all"||Card.category.textContent === filter.textContent){
            display: "flex";
        }
        else{
            display: "none";
        }
    });
    
})
});