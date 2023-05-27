let i=0
function cartno( ) {
    // alert("added to cart");
     i=i+1;
this.i=i;    
   
   
     document.getElementById("count").innerHTML=i;
}
const cartHandler = (product) => {
     alert('Order added to cart')
     let prevOrder = JSON.parse(localStorage.getItem('cart'))
     let currentOrder = []
     if (prevOrder) {
         currentOrder = [product, ...prevOrder]
     } else {
         currentOrder = [product]
     }


     localStorage.setItem('cart', JSON.stringify(currentOrder))
 }
 const productData = [ 
 { id: 0, name: "", description: "Main Jacket", image: "pic4.png",price:"$20", is_featured: true },
 { id: 1, name: "", description: "Main Jacket ", image:"pic4.png",price: "$20", is_featured: true },
 { id: 2, name: "", description: "Main Jacket", image: "pic4.png",price: "$20", is_featured: true },
 { id: 3, name: "", description: "Main Jacket", image: "pic4.png",price:" $20", is_featured: true },
 { id: 4, name: "", description: "Main Jacket", image: "pic4.png",price: "$20", is_featured: true },
 { id: 5, name: "", description: "Main Jacket", image: "pic4.png",price: "$20", is_featured: true },
 { id: 6, name: "", description: "Main Jacket", image: "pic4.png",price: "$20", is_featured: true },
 { id: 7, name: "", description: "Main Jacket", image: "pic4.png",price: "$20", is_featured: true },
 { id: 8, name: "", description: "Main Jacket", image: "pic4.png",price: "$20", is_featured: true },
 
 
]

 function createProduct(products) {
    let mainDiv = document.querySelector('#products')
mainDiv.classList.add("container");

    for (let product of products) {

        let productDiv = document.createElement('div')
        let productDes = document.createElement('p')
        let prodText = document.createTextNode(product.description)
        let prodPrice = document.createTextNode(product.price)
        
       
        let imagePath =document.createElement('IMG')

        imagePath.setAttribute('src',product.image)
        imagePath.classList.add("image");

        productDes.appendChild(imagePath)
        

        productDes.appendChild(prodText)
        productDes.appendChild(prodPrice)
        productDes.classList.add("description");
        
        let productButton = document.createElement('button')
        productButton.innerText = 'Buy Now'
        productButton.addEventListener('click', () => cartHandler(product))
        productButton.classList.add("hbutton");
        productButton.classList.add("buy");
       
        productButton.addEventListener('click',()=> cartno())

        productDiv.appendChild(productDes)
        productDiv.appendChild(productButton)

        mainDiv.appendChild(productDiv)


    }
}

createProduct(productData)






