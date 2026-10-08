const cartCount = document.getElementById("cartCount");
const toast = document.getElementById("toast");

let cart = 0;

document.querySelectorAll(".add-cart").forEach(button => {
    button.addEventListener("click", () => {

        cart++;

        cartCount.textContent = cart;

        toast.classList.add("show");

        setTimeout(() => {
            toast.classList.remove("show");
        }, 1800);
    });
});


document.getElementById("cartBtn").addEventListener("click", () => {

    if (cart === 0) {
        alert("Корзина пока пуста.");
    } else {
        alert(`В корзине товаров: ${cart}`);
    }

});


document.getElementById("searchBtn").addEventListener("click", () => {

    const query = prompt("Что ищем в NOVA?");

    if (query && query.trim() !== "") {
        alert(`Поиск: ${query}`);
    }

});


document.querySelectorAll(".category").forEach(category => {

    category.addEventListener("click", () => {

        document.querySelectorAll(".category")
            .forEach(item => item.classList.remove("active"));

        category.classList.add("active");

    });

});
