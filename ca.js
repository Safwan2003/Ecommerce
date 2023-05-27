

const productData = JSON.parse(localStorage.getItem('cart'))

function createProduct(products) {
    let mainDiv = document.querySelector('.cart')

    for (let product of products) {
        let productDiv = document.createElement('div')
        let productDes = document.createElement('p')
        let prodText = document.createTextNode(product.description)
        let prodPrice = document.createTextNode(product.price)
        
       // prodPrice.classList.add("price");

        let imagePath =document.createElement('IMG')

        imagePath.setAttribute('src',product.image)
        imagePath.classList.add("image");

        productDes.appendChild(imagePath)
        

        productDes.appendChild(prodText)
        productDes.appendChild(prodPrice)
        productDes.classList.add("description2");
        
         let productButton = document.createElement('button')
         productButton.innerText = 'Remove'
         productButton.addEventListener('click', () => remove())

        
         productButton.classList.add("hbutton");
        //
        
        
        productButton.classList.add("buy");
       
        productButton.addEventListener('click',()=> cartno())

        productDiv.appendChild(productDes)
        productDiv.appendChild(productButton)
        productDiv.classList.add("productdiv");
        mainDiv.appendChild(productDiv)
        

    }
}

createProduct(productData)




function remove(){
    let r = localStorage.removeItem('cart');
   }


// let qty = document.getElementsByClassName("qty");
// for(let i = 0 ; i<qty.length ; i++){
//     qty[i].addEventListener("click" , (e)=>{
//         let updateE1 = e.target;
//         let parentE1 = updateE1.parentElement;
//         let itemprice = parentE1.children[1].innerHTML.replace('Rs : ',' ');
//         let subtotal = parentE1.getElementsByClassName("sub")[0].innerHTML;
//         let updatesubtotal = parseInt(itemprice,10) * parseInt(updateE1.value,10);
//         let itemprices = parentE1.children[3];
//         itemprices.innerHTML = `Rs : ${updatesubtotal}`;
//         if(e.target.value < 0){
//             itemprices.innerHTML = "Rs : 0";
//         }
//     })
// }

    


// login
let input = document.getElementsByTagName("input");
let error = []
let show = document.getElementById("show");
let pass = document.getElementById("pass");

function addEmail(){
    const existingEmail = document.getElementById("email");
    // function will stop if @ found
    if(existingEmail.value == ""){
        return 0
    }
    else if (existingEmail.value.includes("@gmail.com")) {
        return 0
    }
    else{
        existingEmail.value = existingEmail.value + "@gmail.com"; 
    }
    if(existingEmail.value.includes(" ")){
        console.log("Yes");
        alert("Please remove space");
    }
}
function submit(){
    for(let i=0 ; i<input.length ; i++){
        if(input[i].value == ""){
            let errorTxt = `${input[i].name} is required`
            error.push(errorTxt)
        }
    }
    if (error.length > 0) {
        alert(error.join(","))
        error = [];
    }
    else{
        alert("Thanks For Login this Website");
    }
    input[0].value = "";
    input[1].value = "";

}

show.addEventListener("click" , (e)=>{
    if(show.innerHTML == "Show Password"){
    pass.setAttribute("type","text");
    show.innerHTML = "Hide Password";
    }
    else{
        pass.setAttribute("type","password");
        show.innerHTML = "Show Password";
    }
})
let a = localStorage.getItem("check");
console.log(a);
function showlogin(){
    if(a == "true"){
        alert("You already log in")
    }
    else{
        document.getElementById("background").style.display = "flex";
    }
}
function loghide(){
    document.getElementById("background").style.display = "none";
}