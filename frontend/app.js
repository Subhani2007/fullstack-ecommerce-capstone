let cart = [];

function addToCart(productName, price) {

    cart.push({
        name: productName,
        price: price
    });

    document.getElementById("cartCount").innerText = cart.length;

    alert(productName + " added to cart!");
}


function showCart() {

    if (cart.length === 0) {
        alert("Your cart is empty!");
        return;
    }

    let message = "Your Cart:\n\n";
    let total = 0;

    cart.forEach((item, index) => {

        message += `${index + 1}. ${item.name} - ₹${item.price}\n`;

        total += item.price;
    });

    message += `\nTotal: ₹${total}`;

    alert(message);
}


function subscribeUser() {

    const email = document.getElementById("email").value;

    if (email === "") {
        alert("Please enter your email address.");
        return;
    }

    alert("Thank you for subscribing! 🎉");

    document.getElementById("email").value = "";
}
