// function displayCart() {
//     const cartItemsDiv = document.getElementById('cartItems');
//     let cartHTML = '<ul>';

//     // Retrieve cart items from session storage
//     const cartData = sessionStorage.getItem('cart');
    
//     if (cartData) {
//         const cart = JSON.parse(cartData);

//         cart.forEach(product => {
//             cartHTML += `
//                 <li>
//                     <img src="${product.img}" alt="${product.name}" style="width: 50px; height: 50px;">
//                     <span>${product.name} - Rs ${product.price}</span>
//                 </li>
//             `;
//         });
//     } else {
//         cartHTML += '<li>No items in cart</li>';
//     }

//     cartHTML += '</ul>';
//     cartItemsDiv.innerHTML = cartHTML;
// }

//  displayCart();

// Sample product data structure with image file names
const products = [
    { name: 'Teddy', price: 699, img: './teddy.jpg' },
    { name: 'Watch', price: 2599, img: './watch.jpg'},
    { name: 'Headphones', price: 3599, img: 'headphones.jpg'},
    { name: 'Book', price: 499, img: 'book.jpg'},
    { name: 'Shoes', price: 599, img: 'shoes.jpg'},
    { name: 'Shirt', price: 699, img: 'product.jpg'},
    { name: 'Jeans', price: 1699, img: 'jeans.jpg'},
    { name: 'Tops', price: 800, img: 'tops.jpg'},
    { name: 'T-shirt', price: 1499, img: 'product1.jpg'},
    { name: 'Suit', price: 2500, img: 'pakistani straight salwaar kameez.jpg'},
    // Add more products with their respective image file names
];


// Function to add a product to the cart
function addToCart(productName) {
    // Find the product in the products array
    const product = products.find(p => p.name === productName);
    
    let cart = sessionStorage.getItem('cart') ? JSON.parse(sessionStorage.getItem('cart')) : [];

    // Add the product to the cart
    cart.push(product);

    // Store the updated cart in session storage
    sessionStorage.setItem('cart', JSON.stringify(cart));

    // Update the cart display
    displayCart();
}

// Function to remove a product from the cart
function removeFromCart(productName) {
    // Retrieve cart items from session storage
    let cart = sessionStorage.getItem('cart') ? JSON.parse(sessionStorage.getItem('cart')) : [];

    // Find the index of the product to remove
    const index = cart.findIndex(item => item.name === productName);

    // Remove the product from the cart
    if (index !== -1) {
        cart.splice(index, 1);
    }

    // Store the updated cart in session storage
    sessionStorage.setItem('cart', JSON.stringify(cart));

    // Update the cart display
    displayCart();
}

// Function to display the cart
function displayCart() {
    const cartItemsDiv = document.getElementById('cartItems');
    let cartHTML = '<ul>';

    // Retrieve cart items from session storage
    const cartData = sessionStorage.getItem('cart');

    if (cartData) {
        const cart = JSON.parse(cartData);

        cart.forEach(product => {
            cartHTML += `
                <li type="1">
                    <div id="imgdiv"><img src="${product.img}" alt="Product Image" style="width: 130px; height: 130px;"></div>
                    <span>${product.name} - Rs ${product.price}</span>
                    <button onclick="removeFromCart('${product.name}')">Remove</button>
                </li>
            `;
        });
    } else {
        cartHTML += '<li>No items in cart</li>';
    }

    cartHTML += '</ul>';
    cartItemsDiv.innerHTML = cartHTML;
}

// Call the displayCart function to populate the cart section
displayCart();
