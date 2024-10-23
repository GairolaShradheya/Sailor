document.addEventListener('DOMContentLoaded', () => {
    const productList = document.getElementById('product-list');

    // Sample product data
    const products = [
        { name: 'Product 1', price: '$10' },
        { name: 'Product 2', price: '$20' },
        { name: 'Product 3', price: '$30' },
    ];

    // Insert products into the product list
    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.innerHTML = `<h3>${product.name}</h3><p>${product.price}</p>`;
        productList.appendChild(productDiv);
    });
});