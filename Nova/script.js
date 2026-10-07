let cartCount = 0;

const cartCounter = document.getElementById("cartCount");

const buttons = document.querySelectorAll(".add-btn");

buttons.forEach(button => {

    button.addEventListener("click", () => {

        cartCount++;

        cartCounter.textContent = cartCount;

        button.textContent = "Добавлено ✓";

        setTimeout(() => {
            button.textContent = "Добавить в корзину";
        }, 1200);

    });

});