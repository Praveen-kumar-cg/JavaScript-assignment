// //16-A Mini Assignment 1: Shopping Cart Calculator
const cart = [
    ["Laptop", 45000, 1],
    ["Mouse", 800, 2],
    ["Keyboard", 1500, 1],
    ["Headphones", 2500, 1]
];
let grandTotal=0;
for (let i=0;i<cart.length;i++){
    for (let j=0;j<cart[0].length;j++){
        let productpice=cart[i][1]*cart[i][2];
        grandTotal+=productpice
        console.log(`
            Product:${cart[i][0]}
            Price:${cart[i][1]}
            Quantity:${cart[i][2]}
            Item Total:${productpice}`)
        
        
    }
}
console.log(grandTotal)
if (grandTotal>50000){
    let discount=0.9
    grandTotal=grandTotal*discount
}
console.log(grandTotal)