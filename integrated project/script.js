// document.addEventListener('DOMContentLoaded', async function() {
//     let products = document.querySelector('.Products');
    
//     try {
//         let data = await fetch('https://fakestoreapi.com/products/category/homedecor');
//         let response = await data.json();
  
//         if (response.products && response.products.length > 0) {
//             response.products.forEach(product => {
//                 if (product.images && product.images.length > 0 && product.description && product.price) {
//                     products.innerHTML += `
//                         <div class="product-item">
//                             <p><strong>Product ID:</strong> ${product.id}</p>
//                             <p><strong>Title:</strong> ${product.title}</p>
//                             <p><strong>Description:</strong> ${product.description}</p>
//                             <p><strong>Price:</strong> ${product.price}</p>
//                             <p><strong>Discount Percentage:</strong> ${product.discountPercentage}</p>
//                             <p><strong>Rating:</strong> ${product.rating}</p>
//                             <p><strong>Stock:</strong> ${product.stock}</p>
//                             <p><strong>Brand:</strong> ${product.brand}</p>
//                             <p><strong>Category:</strong> ${product.category}</p>
//                             <p><strong>Thumbnail:</strong> ${product.thumbnail}</p>
//                             <p><strong>Images:</strong> ${product.images.join(', ')}</p>
//                             <hr>
//                         </div>
//                     `;
//                 } else {
//                     console.error('Missing data for product:', product);
//                 }
//             });
//         } else {
//             console.error('No products found in the response');
//         }
//     } catch (error) {
//         console.error('Error fetching or processing data:', error);
//     }
//   });

  
  
  function addToCart(productName, productPrice, productImage) {
    const item = {
        name: productName,
        price: productPrice,
        img: productImage
    };

    let cartItems = JSON.parse(sessionStorage.getItem('cart')) || [];

    cartItems.push(item);

    sessionStorage.setItem('cart', JSON.stringify(cartItems));

    updateCartIcon();
}

function updateCartIcon() {
    const cartData = sessionStorage.getItem('cart');
    
    if (cartData) {
        const cart = JSON.parse(cartData);
        const cartIcon = document.querySelector('.cart');
        cartIcon.innerHTML = `<i class="fas fa-shopping-cart"></i> Cart (${cart.length})`;
    }
}

window.addEventListener('DOMContentLoaded', updateCartIcon);


  