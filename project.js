    const graphicscardstore = [
        {
            name: "RTX5090" 
            ,brand: "NVIDIARTX"
            ,generation: "RTX50Series" 
            ,price: 1999
            ,image: "https://www.zotac.com/download/files/styles/w1024/public/product_gallery/graphics_cards/zt-b50900b-10p-image01.jpg?itok=cif57HoU"
        }
        ,{
            name: "RTX5080"
            ,brand: "NVIDIARTX"
            ,generation: "RTX50Series"
            ,price: 999
            ,image: "https://d2vfia6k6wrouk.cloudfront.net/productimages/09cfd7f3-797e-4cb0-ac0d-b3ca00a12e69/images/pny-rtx-5080-slim-dual-fan-oc-pk.jpg"
        }
        ,{
            name: "RTX5070TI"
            ,brand: "NVIDIARTX"
            ,generation: "RTX50Series"
            ,price: 749
            ,image: "https://m.media-amazon.com/images/I/71YnD7X0ijL.jpg"
        }
        ,{
            name: "RTX5070" 
            ,brand: "NVIDIARTX"
            ,generation: "RTX50Series"
            ,price: 549
            ,image: "https://d2vfia6k6wrouk.cloudfront.net/productimages/ec29d9c1-2797-44fc-a4b5-b3ca008fe05e/images/pny-rtx-5070-slim-dual-fan-oc-gr.jpg"
        }
        ,{
            name: "RTX5060TI16GB"
            ,brand: "NVIDIARTX"
            ,generation: "RTX50Series"
            ,price: 429
            ,image: "https://m.media-amazon.com/images/I/81kYKB0Aj5L.jpg"
        }
        ,{
            name: "RTX5060TI8GB"
            ,brand: "NVIDIARTX"
            ,generation: "RTX50Series"
            ,price: 379
            ,image: "https://m.media-amazon.com/images/I/81-KEx-lGSL.jpg"
        }
        ,{
            name: "RTX5060"
            ,brand: "NVIDIARTX"
            ,generation: "RTX50Series"
            ,price: 299
            ,image: "https://m.media-amazon.com/images/I/71ii5ow8slL.jpg"
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
    let index = graphicscardstore.findIndex(graphicscard => graphicscard.name === itemname)
    container.insertAdjacentHTML(
        "beforeend",
        `<div class="Card">
            <h2 class="itemname" data-item="${itemname}">${itemname}</h2>
            <img src="${graphicscardstore[index].image}" alt="${itemname}"/>
            <h3 class="price">$ ${graphicscardstore[index].price}</h3>
            <button class="+cart">Add to Cart</button>
        </div>`,
    );
}
for(i=0; i<=graphicscardstore.length; i++){
    inject(graphicscardstore[i].name)
}
