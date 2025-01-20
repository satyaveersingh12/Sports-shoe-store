const cartItems = [];
const cartList = document.querySelector(".cart-items");
const totalPriceEl = document.getElementById("total-price");

// Add event listeners to "Add to Cart" buttons
document.querySelectorAll(".add-to-cart").forEach((button) => {
    button.addEventListener("click", () => {
        const product = button.closest(".product");
        const productName = product.querySelector("h3").innerText;
        const productPrice = parseFloat(product.querySelector("p").innerText.replace("r", ""));
        addToCart(productName, productPrice);
    });
});

// Add item to the cart
function addToCart(name, price) {
    const existingItem = cartItems.find((item) => item.name === name);
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cartItems.push({ name, price, quantity: 1 });
    }
    updateCart();
}

// Update cart UI
function updateCart() {
    cartList.innerHTML = "";
    let total = 0;

    cartItems.forEach((item) => {
        const li = document.createElement("li");
        // li.innerHTML = `
        //     r{item.name} xr{item.quantity} - r{(item.price * item.quantity).toFixed(2)}
        // `;
        cartList.appendChild(li);
        total += item.price * item.quantity;
    });

    totalPriceEl.innerText = total.toFixed(2);
}
